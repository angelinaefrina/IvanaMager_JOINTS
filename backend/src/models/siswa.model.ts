import { supabase } from '../config/supabase';
import { throwIfSupabaseError } from '../middleware/errorHandler';
import type { Database } from '../../types/database';

type SiswaInsert = Database['public']['Tables']['siswa']['Insert'];
type SiswaUpdate = Database['public']['Tables']['siswa']['Update'];

export const SiswaModel = {
  async findById(id: string) {
    const { data, error } = await supabase
      .from('siswa')
      .select('id, tingkat, rombel, peminatan, angkatan, onboarding_selesai, created_at, updated_at')
      .eq('id', id)
      .maybeSingle();
    throwIfSupabaseError(error);
    return data;
  },

  async upsert(row: SiswaInsert) {
    const { error } = await supabase.from('siswa').upsert(row, { onConflict: 'id' });
    throwIfSupabaseError(error);
  },

  async update(id: string, fields: SiswaUpdate) {
    const { error } = await supabase.from('siswa').update(fields).eq('id', id);
    throwIfSupabaseError(error);
  },
};
