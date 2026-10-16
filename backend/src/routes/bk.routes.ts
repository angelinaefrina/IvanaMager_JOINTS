import { Router } from 'express';
import * as kode from '../controllers/kodeBk.controller';
import * as nilai from '../controllers/nilaiRapor.controller';
import { auth } from '../middleware/auth';
import { requireRole } from '../middleware/requireRole';

// Semua query dibatasi ke sekolah_id milik BK (lihat KodeBkService).
export const bkRouter = Router();

bkRouter.use(auth, requireRole('bk'));

bkRouter.post('/kode', kode.buatKode);
bkRouter.get('/kode', kode.daftarKode);
bkRouter.patch('/kode/:id', kode.ubahKode);

bkRouter.get('/nilai/menunggu', nilai.daftarMenunggu);
bkRouter.get('/nilai/template', nilai.template);
bkRouter.post('/nilai/impor', nilai.impor);
bkRouter.get('/siswa/:siswaId/nilai', nilai.nilaiSiswa);
bkRouter.post('/siswa/:siswaId/nilai/verifikasi', nilai.putuskan);
