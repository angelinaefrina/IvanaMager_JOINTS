import { supabase } from '../config/supabase';
import { throwIfSupabaseError } from '../middleware/errorHandler';

export const MasterModel = {
  async listMapel() {
    const { data, error } = await supabase
      .from('mapel')
      .select('id, kode, nama, is_pilihan, kelompok')
      .order('id');
    throwIfSupabaseError(error);
    return data ?? [];
  },

  async listBidangKarir() {
    const { data, error } = await supabase.from('bidang_karir').select('id, kode, nama').order('id');
    throwIfSupabaseError(error);
    return data ?? [];
  },

  async cariKarir(q: string | undefined, limit: number) {
    let query = supabase.from('karir').select('id, nama, bidang_karir_id, is_trending');
    if (q) {
      // Escape wildcard LIKE agar input siswa diperlakukan sebagai teks biasa.
      query = query.ilike('nama', `%${q.replace(/[\\%_]/g, (c) => `\\${c}`)}%`);
    }
    const { data, error } = await query.order('nama').limit(limit);
    throwIfSupabaseError(error);
    return data ?? [];
  },

  /** ID yang TIDAK ada di tabel (untuk validasi input). */
  async mapelTidakAda(ids: number[]) {
    if (ids.length === 0) return [];
    const { data, error } = await supabase.from('mapel').select('id').in('id', ids);
    throwIfSupabaseError(error);
    const ada = new Set((data ?? []).map((r) => r.id));
    return ids.filter((id) => !ada.has(id));
  },

  async bidangKarirTidakAda(ids: number[]) {
    if (ids.length === 0) return [];
    const { data, error } = await supabase.from('bidang_karir').select('id').in('id', ids);
    throwIfSupabaseError(error);
    const ada = new Set((data ?? []).map((r) => r.id));
    return ids.filter((id) => !ada.has(id));
  },

  async karirTidakAda(ids: string[]) {
    if (ids.length === 0) return [];
    const { data, error } = await supabase.from('karir').select('id').in('id', ids);
    throwIfSupabaseError(error);
    const ada = new Set((data ?? []).map((r) => r.id));
    return ids.filter((id) => !ada.has(id));
  },
};
