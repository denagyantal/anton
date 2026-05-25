import express from 'express';
import cors from 'cors';
import { requestLogger } from './middleware/request-logger.js';
import { errorHandler } from './middleware/error-handler.js';
import { authRouter } from './routes/auth.js';
import { accountsRouter } from './routes/accounts.js';
import { quotesRouter } from './routes/quotes.js';
import { invoicesRouter, publicInvoicesRouter } from './routes/invoices.js';
import { paymentsRouter } from './routes/payments.js';
import { authMiddleware } from './middleware/auth.js';
import { startReminderJob } from './jobs/reminder-sender.js';
import { syncRouter } from './routes/sync.js';
import quickbooksRouter from './routes/quickbooks.js';

export const app = express();

app.use(cors());

// Stripe webhook must receive raw body — register BEFORE express.json()
app.use('/api/v1/payments', express.raw({ type: 'application/json' }), paymentsRouter);

app.use(express.json());
app.use(requestLogger);

// Health check (public)
app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
    },
  });
});

// Auth routes (public)
app.use('/api/v1/auth', authRouter);

// Account routes (protected)
app.use('/api/v1/accounts', accountsRouter);

// Quote action routes (protected)
app.use('/api/v1/quotes', quotesRouter);

// Public (no auth) invoice routes — view and pay by token
app.use('/api/v1/invoices', publicInvoicesRouter);

// Invoice routes (protected)
app.use('/api/v1/invoices', invoicesRouter);

// Sync routes (protected)
app.use('/api/v1/sync', syncRouter);

// QuickBooks routes (mixed: connect/status/disconnect are protected; callback is public)
app.use('/api/v1/quickbooks', quickbooksRouter);

// Protected route: current user
app.get('/api/v1/me', authMiddleware, (req, res) => {
  res.status(200).json({
    data: {
      user: req.user,
    },
  });
});

app.use(errorHandler);

// Only start the server if this file is run directly (not imported for testing)
if (process.env['NODE_ENV'] !== 'test') {
  const port = parseInt(process.env['PORT'] ?? '3001', 10);
  app.listen(port, () => {
    console.log(`API server running on port ${port}`);
  });
  startReminderJob();
}
