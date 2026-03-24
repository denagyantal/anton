import request from 'supertest';
import { app } from './index.js';

describe('Health endpoint', () => {
  it('GET /api/v1/health returns 200 with status ok', async () => {
    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('status', 'ok');
    expect(response.body.data).toHaveProperty('timestamp');
  });

  it('GET /api/v1/health returns a valid ISO timestamp', async () => {
    const response = await request(app).get('/api/v1/health');

    const timestamp = response.body.data.timestamp;
    const parsed = new Date(timestamp);
    expect(parsed.toISOString()).toBe(timestamp);
  });
});
