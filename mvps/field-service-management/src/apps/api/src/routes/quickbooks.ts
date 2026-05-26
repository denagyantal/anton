import { Router, Request, Response, NextFunction } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { AppError } from '../utils/error.js';
import {
  generateAuthorizationUrl,
  consumeOAuthState,
  exchangeCodeForTokens,
  getConnectionStatus,
  disconnectQuickBooks,
  getQbSyncLog,
  retryEntitySync,
} from '../services/quickbooks-service.js';

const router = Router();

// POST /api/v1/quickbooks/connect
// Returns the OAuth authorization URL for the mobile app to open
router.post('/connect', authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accountId = req.user!.accountId;
    const authUrl = generateAuthorizationUrl(accountId);
    res.json({ data: { authorizationUrl: authUrl } });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/quickbooks/callback
// Intuit redirects here after user grants/denies access — NO auth middleware (unauthenticated callback)
router.get('/callback', async (req: Request, res: Response) => {
  const { code, state, realmId, error } = req.query as Record<string, string>;
  const webBaseUrl = process.env['WEB_BASE_URL'] ?? '';

  if (error) {
    return res.redirect(`${webBaseUrl}/quickbooks-result?status=denied`);
  }

  if (!code || !state || !realmId) {
    return res.redirect(
      `${webBaseUrl}/quickbooks-result?status=error&reason=missing_params`,
    );
  }

  const accountId = consumeOAuthState(state);
  if (!accountId) {
    return res.redirect(
      `${webBaseUrl}/quickbooks-result?status=error&reason=invalid_state`,
    );
  }

  try {
    await exchangeCodeForTokens(accountId, code, realmId);
    return res.redirect(`${webBaseUrl}/quickbooks-result?status=connected`);
  } catch (err) {
    console.error('QuickBooks callback error:', err);
    return res.redirect(
      `${webBaseUrl}/quickbooks-result?status=error&reason=token_exchange`,
    );
  }
});

// GET /api/v1/quickbooks/status
// Returns current connection status, company name, and recent sync log
router.get('/status', authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accountId = req.user!.accountId;
    const [connectionStatus, syncLog] = await Promise.all([
      getConnectionStatus(accountId),
      getQbSyncLog(accountId, 50),
    ]);
    res.json({ data: { ...connectionStatus, syncLog } });
  } catch (err) {
    next(err);
  }
});

// POST /api/v1/quickbooks/disconnect
router.post('/disconnect', authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accountId = req.user!.accountId;
    await disconnectQuickBooks(accountId);
    res.json({ data: { disconnected: true } });
  } catch (err) {
    next(err);
  }
});

// POST /api/v1/quickbooks/sync
// Manually re-sync a specific entity to QuickBooks
router.post('/sync', authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accountId = req.user!.accountId;
    const { entityType, entityId } = req.body as { entityType?: string; entityId?: string };

    if (!entityType || !entityId) {
      throw new AppError('VALIDATION_ERROR', 'entityType and entityId are required', 422);
    }

    const validTypes = ['CUSTOMER', 'INVOICE', 'PAYMENT'];
    if (!validTypes.includes(entityType)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `entityType must be one of: ${validTypes.join(', ')}`,
        422,
      );
    }

    const result = await retryEntitySync(accountId, entityType, entityId);

    if (result.status === 'NOT_FOUND') {
      throw new AppError('NOT_FOUND', result.message ?? 'Entity not found', 404);
    }

    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

export default router;
