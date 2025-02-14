import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://zerotohero_owner:STlnPAcUg18N@ep-noisy-boat-a5dzlah9.us-east-2.aws.neon.tech/zero2hero?sslmode=require"
);
export const db = drizzle(sql, { schema });
