import { Router } from 'express';
import * as asesmen from '../controllers/asesmen.controller';
import * as c from '../controllers/siswa.controller';
import { auth } from '../middleware/auth';
import { requireRole } from '../middleware/requireRole';

// Semua endpoint memakai req.user.id; siswa hanya bisa mengakses datanya sendiri.
export const siswaRouter = Router();

siswaRouter.use(auth, requireRole('siswa'));

siswaRouter.get('/me', c.getMe);
siswaRouter.post('/me/kode-bk', c.gabungSekolah);
siswaRouter.post('/me/onboarding', c.onboarding);
siswaRouter.put('/me/profil', c.ubahProfil);
siswaRouter.put('/me/preferensi', c.ubahPreferensi);
siswaRouter.put('/me/mapel', c.ubahMapel);
siswaRouter.put('/me/mapel-favorit', c.ubahMapelFavorit);
siswaRouter.put('/me/bidang-karir', c.ubahBidangKarir);
siswaRouter.put('/me/target-karir', c.ubahTargetKarir);
siswaRouter.delete('/me/target-karir/:id', c.hapusTargetKarir);

siswaRouter.post('/me/asesmen', asesmen.kirim);
siswaRouter.get('/me/asesmen', asesmen.riwayat);
siswaRouter.get('/me/asesmen/terakhir', asesmen.terakhir);
