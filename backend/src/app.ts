import cors from 'cors';
import express, { Router } from 'express';
import { corsOrigins } from './config/env';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { healthRouter } from './routes/health.routes';
import { meRouter } from './routes/me.routes';

export const app = express();

app.disable('x-powered-by');
app.use(cors({ origin: corsOrigins }));
app.use(express.json({ limit: '1mb' }));

const api = Router();
api.use('/health', healthRouter);
api.use('/me', meRouter);

app.use('/api/v1', api);

app.use(notFoundHandler);
app.use(errorHandler);
