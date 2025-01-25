import { createClient } from "@supabase/supabase-js";

require("dotenv").config();

const dbUrl = process.env.DB_URL || "";
const dbKey = process.env.DB_SERVICE_KEY || "";

if (!dbUrl || !dbKey) {
  throw new Error("Missing Supabase URL or Key in environment variables");
}

const client = createClient(dbUrl, dbKey);

export default client;
