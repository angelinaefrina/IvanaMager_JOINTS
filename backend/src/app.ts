import cors from 'cors';
import express, { Router } from 'express';
import { corsOrigins } from './config/env';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { asesmenRouter } from './routes/asesmen.routes';
import { bkRouter } from './routes/bk.routes';
import { healthRouter } from './routes/health.routes';
import { masterRouter } from './routes/master.routes';
import { meRouter } from './routes/me.routes';
import { siswaRouter } from './routes/siswa.routes';

export const app = express();

app.disable('x-powered-by');
app.use(cors({ origin: corsOrigins }));
app.use(express.json({ limit: '1mb' }));

const api = Router();
api.use('/health', healthRouter);
api.use('/me', meRouter);
api.use('/master', masterRouter);
api.use('/asesmen', asesmenRouter);
api.use('/siswa', siswaRouter);
api.use('/bk', bkRouter);

app.use('/api/v1', api);

app.use(notFoundHandler);
app.use(errorHandler);
