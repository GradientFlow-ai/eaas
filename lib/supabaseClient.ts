import { createClient } from "@supabase/supabase-js";

const anonKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabaseClient = createClient(
  "https://ttkxzgtxzohwfqpsgaeu.supabase.co",
  anonKey as string,
);

export default supabaseClient;
