import express from 'express';
import winston from 'winston';

const app = express();
const PORT = process.env.PORT || 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()]
});

app.get('/health', (req: express.Request, res: express.Response) => {
  logger.info('GET /health endpoint called');
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
