import request from 'supertest';
import { setupApp } from './index';
import mongoose from 'mongoose';
import type { Server } from 'http';

let server: Server;

beforeAll(async () => {
  const app = await setupApp();
  server = app.listen();
});

afterAll(async () => {
  if (server && server.close) {
    await server.close();
  }
  await mongoose.disconnect();
});

describe('GET /health', () => {
  it('should return status ok', async () => {
    const res = await request(server).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('GET /greek-god/68d6561d957bbf3b4f979f98', () => {
  it('should return Zeus details', async () => {
    const res = await request(server).get('/greek-god/68d6561d957bbf3b4f979f98');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      _id: "68d6561d957bbf3b4f979f98",
      name: "Zeus",
      role: "King of the gods, sky, thunder",
      myth: "Overthrew the Titans; ruled from Mount Olympus; punished Prometheus",
      __v: 0
    });
  });
});

describe('GET /greek-god/:id fail states', () => {
  it('should return 400 for invalid id format', async () => {
    const res = await request(server).get('/greek-god/notavalidid');
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: 'Invalid id format. Must be a 24 character hex string.' });
  });

  it('should return 404 for valid id but resource not found', async () => {
    // Use a valid but non-existent ObjectId
    const nonExistentId = '0123456789abcdef01234567';
    const res = await request(server).get(`/greek-god/${nonExistentId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ message: 'Greek god not found' });
  });
});
