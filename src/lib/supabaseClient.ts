import { createClient } from '@supabase/supabase-js';

// Usamos (import.meta as any) para saltar la validación estricta de TypeScript en AI Studio
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Faltan las variables de entorno de Supabase. Revisa tu archivo .env");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');