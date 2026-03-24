import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { AppError } from '../utils/error.js';

export function validate(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const message = err.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join('; ');
        next(new AppError('VALIDATION_ERROR', message, 422));
        return;
      }
      next(err);
    }
  };
}
