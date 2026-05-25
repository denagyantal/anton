import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { z } from 'zod';
import { pullChanges, pushChanges } from '../services/sync-service.js';

export const syncRouter = Router();

syncRouter.use(authMiddleware);

const pullSchema = z.object({
  lastPulledAt: z.number().nullable(),
  schemaVersion: z.number().optional(),
  migration: z.unknown().optional(),
});

const pushSchema = z.object({
  changes: z.record(
    z.string(),
    z.object({
      created: z.array(z.record(z.string(), z.unknown())).default([]),
      updated: z.array(z.record(z.string(), z.unknown())).default([]),
      deleted: z.array(z.string()).default([]),
    }),
  ).default({}),
  lastPulledAt: z.number().nullable().optional(),
});

syncRouter.post('/pull', validate(pullSchema), async (req, res, next) => {
  try {
    const { lastPulledAt } = req.body as z.infer<typeof pullSchema>;
    const accountId = req.user!.accountId;
    const result = await pullChanges({ lastPulledAt, accountId });
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

syncRouter.post('/push', validate(pushSchema), async (req, res, next) => {
  try {
    const { changes } = req.body as z.infer<typeof pushSchema>;
    const accountId = req.user!.accountId;
    await pushChanges({ changes: changes as any, accountId });
    res.json({ data: {} });
  } catch (err) {
    next(err);
  }
});
