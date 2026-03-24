import express from 'express';
import cors from 'cors';
import { requestLogger } from './middleware/request-logger.js';
import { errorHandler } from './middleware/error-handler.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Health check
app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
    },
  });
});

app.use(errorHandler);

// Only start the server if this file is run directly (not imported for testing)
if (process.env['NODE_ENV'] !== 'test') {
  const port = parseInt(process.env['PORT'] ?? '3001', 10);
  app.listen(port, () => {
    console.log(`API server running on port ${port}`);
  });
}
