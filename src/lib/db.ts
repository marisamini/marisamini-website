import { neon } from "@neondatabase/serverless";

const connectionString =
  process.env.POSTGRES_VISITORS_POSTGRES_URL || process.env.POSTGRES_URL;

export const sql = connectionString ? neon(connectionString) : null;
