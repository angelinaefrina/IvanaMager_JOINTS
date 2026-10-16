import { Router } from 'express';
import * as kode from '../controllers/kodeBk.controller';
import { auth } from '../middleware/auth';
import { requireRole } from '../middleware/requireRole';

// Semua query dibatasi ke sekolah_id milik BK (lihat KodeBkService).
export const bkRouter = Router();

bkRouter.use(auth, requireRole('bk'));

bkRouter.post('/kode', kode.buatKode);
bkRouter.get('/kode', kode.daftarKode);
bkRouter.patch('/kode/:id', kode.ubahKode);
