import request from 'supertest';
import app from './index';

describe('GET /health', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('GET /greek-god/1', () => {
  it('should return Zeus details', async () => {
    const res = await request(app).get('/greek-god/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      name: "Zeus",
      role: "King of the gods, sky, thunder",
      myth: "Overthrew the Titans; ruled from Mount Olympus; punished Prometheus"
    });
  });
});
