import { createClient } from "@supabase/supabase-js";

const anonKey = process.env.PUBLIC_SUPABASE_ANON_KEY;
const httpUrl = process.env.DATABASE_HTTP_URL;

const supabaseClient = createClient(
  httpUrl as string,
  anonKey as string,
);

export default supabaseClient;
