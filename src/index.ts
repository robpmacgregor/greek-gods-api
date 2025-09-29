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

app.get('/healthz', (req: express.Request, res: express.Response) => {
  logger.info('GET /healthz endpoint called');
  res.status(200).json({ status: 'ok' });
});

app.get('/greek-god/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    logger.error(`Invalid id format received: ${id}`);
    return res.status(400).json({ message: 'Invalid id format. Must be a 24 character hex string.' });
  }

  try {
    const god = await GreekGodModel.findById(id);
    if (god) {
      logger.info(`Greek god found: ${god.name} (id: ${id})`);
      res.status(200).json(god);
    } else {
      logger.error(`Greek god not found for id: ${id}`);
      res.status(404).json({ message: 'Greek god not found' });
    }
  } catch (error) {
    logger.error(`Error fetching Greek god by id ${id}: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/greek-god', async (req: express.Request, res: express.Response) => {
  try {
    const gods = await GreekGodModel.find({});
    logger.info(`GET /greek-god - Returned ${gods.length} Greek gods`);
    res.status(200).json(gods);
  } catch (error) {
    logger.error(`Error fetching Greek gods: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
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
