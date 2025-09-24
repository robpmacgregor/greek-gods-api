import request from 'supertest';
import express from 'express';

const app = express();
app.get('/health', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'ok' });
});

describe('GET /health', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
