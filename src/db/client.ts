import { createClient, SupabaseClient } from "@supabase/supabase-js";
require("dotenv").config();

const dbUrl = process.env.DB_URL || "";
const dbKey = process.env.DB_SERVICE_KEY || "";

if (!dbUrl || !dbKey) {
  if (process.env.NODE_ENV !== "test") {
    throw new Error("Missing Supabase URL or Key in environment variables");
  }
}

let client: SupabaseClient;

export const getClient = (): SupabaseClient => {
  if (!client) {
    client = createClient(dbUrl, dbKey);
  }
  return client;
};

export default getClient;
