import { Router, Request, Response, NextFunction } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { prisma } from '../config/prisma.js';
import { getConnectionStatus, getQbSyncLog } from '../services/quickbooks-service.js';
import { InvoiceStatus } from '@prisma/client';

const router = Router();
router.use(authMiddleware);

// GET /api/v1/dashboard/schedule?date=YYYY-MM-DD
router.get('/schedule', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const accountId = req.user!.accountId;
    const dateStr = req.query['date'] as string | undefined;
    const targetDate = dateStr ? new Date(dateStr + 'T00:00:00Z') : new Date();
    const startOfDay = new Date(targetDate);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(targetDate);
    endOfDay.setUTCHours(23, 59, 59, 999);

    const events = await prisma.scheduleEvent.findMany({
      where: {
        accountId,
        startTime: { gte: startOfDay, lte: endOfDay },
      },
      include: {
        job: {
          select: {
            status: true,
            customer: { select: { name: true } },
          },
        },
        assignedTo: { select: { name: true } },
      },
      orderBy: { startTime: 'asc' },
    });

    res.json({
      data: {
        date: startOfDay.toISOString().slice(0, 10),
        events: events.map((e) => ({
          id: e.id,
          title: e.title,
          startTime: e.startTime.toISOString(),
          endTime: e.endTime.toISOString(),
          allDay: e.allDay,
          jobStatus: e.job?.status ?? null,
          customerName: e.job?.customer?.name ?? null,
          assignedToName: e.assignedTo?.name ?? null,
        })),
      },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/dashboard/invoices?status=PAID
router.get('/invoices', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const accountId = req.user!.accountId;
    const statusParam = req.query['status'] as string | undefined;
    const validStatuses = Object.values(InvoiceStatus);
    const statusFilter =
      statusParam && validStatuses.includes(statusParam as InvoiceStatus)
        ? (statusParam as InvoiceStatus)
        : undefined;

    const invoices = await prisma.invoice.findMany({
      where: {
        accountId,
        ...(statusFilter ? { status: statusFilter } : {}),
      },
      include: {
        customer: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });

    res.json({
      data: {
        invoices: invoices.map((inv) => ({
          id: inv.id,
          invoiceNumber: inv.invoiceNumber,
          customerName: inv.customer.name,
          status: inv.status,
          total: inv.total,
          amountPaid: inv.amountPaid,
          sentAt: inv.sentAt?.toISOString() ?? null,
          paidAt: inv.paidAt?.toISOString() ?? null,
          dueAt: inv.dueAt?.toISOString() ?? null,
          createdAt: inv.createdAt.toISOString(),
        })),
      },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/dashboard/sync-status
router.get('/sync-status', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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

export { router as dashboardRouter };
