import { Request, Response, NextFunction } from 'express';
import { supabaseAdmin } from '../config/supabase.js';
import { AppError } from '../utils/error.js';

export interface AuthUser {
  id: string;
  email: string;
  accountId: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export async function authMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    next(new AppError('UNAUTHORIZED', 'Missing or invalid authorization header', 401));
    return;
  }

  const token = authHeader.slice(7);
  if (!token) {
    next(new AppError('UNAUTHORIZED', 'Missing authentication token', 401));
    return;
  }

  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data.user) {
      next(new AppError('UNAUTHORIZED', 'Invalid or expired token', 401));
      return;
    }

    const accountId = data.user.user_metadata?.account_id ?? '';

    req.user = {
      id: data.user.id,
      email: data.user.email ?? '',
      accountId,
    };

    next();
  } catch {
    next(new AppError('UNAUTHORIZED', 'Token verification failed', 401));
  }
}
