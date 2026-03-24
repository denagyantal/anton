import express from 'express';
import request from 'supertest';
import { z } from 'zod';
import { validate } from './validate.js';
import { errorHandler } from './error-handler.js';

const testSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().min(0, 'Age must be non-negative'),
});

function createTestApp() {
  const app = express();
  app.use(express.json());

  app.post('/test', validate(testSchema), (_req, res) => {
    res.status(200).json({ data: { ok: true } });
  });

  app.use(errorHandler);
  return app;
}

describe('validate middleware', () => {
  const app = createTestApp();

  it('passes validation with valid body', async () => {
    const response = await request(app)
      .post('/test')
      .send({ name: 'John', age: 30 });

    expect(response.status).toBe(200);
    expect(response.body.data.ok).toBe(true);
  });

  it('returns 422 VALIDATION_ERROR for missing required field', async () => {
    const response = await request(app)
      .post('/test')
      .send({ age: 30 });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.status).toBe(422);
    expect(response.body.error.message).toContain('name');
  });

  it('returns 422 VALIDATION_ERROR for invalid field type', async () => {
    const response = await request(app)
      .post('/test')
      .send({ name: 'John', age: 'not-a-number' });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('returns 422 with details for multiple invalid fields', async () => {
    const response = await request(app)
      .post('/test')
      .send({});

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('name');
  });

  it('returns 422 when body violates constraint', async () => {
    const response = await request(app)
      .post('/test')
      .send({ name: 'John', age: -5 });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('Age must be non-negative');
  });
});
