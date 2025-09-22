import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
