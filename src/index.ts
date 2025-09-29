import express from 'express';
import winston from 'winston';
import { connectDB } from './utils/db';
import { GreekGodModel } from './models/greekGod';
import { isValidObjectId } from './utils/validators';

const app = express();
const PORT = process.env.EXPRESS_PORT;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()]
});

app.get('/health', (req: express.Request, res: express.Response) => {
  logger.info('GET /health endpoint called');
  res.status(200).json({ status: 'ok' });
});

app.get('/greek-god/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid id format. Must be a 24 character hex string.' });
  }

  const god = await GreekGodModel.findById(id);
  if (god) {
    res.status(200).json(god);
  } else {
    res.status(404).json({ message: 'Greek god not found' });
  }
});

// Async setup function for tests and server
export async function setupApp() {
  await connectDB();
  return app;
}

// Only start the server if this file is run directly
if (require.main === module) {
  setupApp().then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  });
}
