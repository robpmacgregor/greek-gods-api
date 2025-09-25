import express from 'express';
import winston from 'winston';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://root:example@mongo:27017/example?authSource=admin';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()]
});

app.get('/health', (req: express.Request, res: express.Response) => {
  logger.info('GET /health endpoint called');
  res.status(200).json({ status: 'ok' });
});

app.get('/greek-god/1', (req: express.Request, res: express.Response) => {
  res.status(200).json({
    id: 1,
    name: "Zeus",
    role: "King of the gods, sky, thunder",
    myth: "Overthrew the Titans; ruled from Mount Olympus; punished Prometheus"
  });
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
