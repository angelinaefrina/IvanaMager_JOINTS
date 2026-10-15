import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ quiet: true });

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().positive().default(4000),
  SUPABASE_URL: z.url(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  CORS_ORIGIN: z.string().default('http://localhost:3000'),
  DATASET_SUMBER: z.enum(['sintetis', 'survei', 'semua']).default('sintetis'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  // Hanya nama variabel yang dicetak, bukan nilainya (hindari bocornya secret).
  const fields = parsed.error.issues.map((i) => i.path.join('.')).join(', ');
  console.error(`Konfigurasi .env tidak valid / kurang: ${fields}`);
  process.exit(1);
}

export const env = parsed.data;

export const corsOrigins = env.CORS_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean);
