import { createClient } from "@supabase/supabase-js";
import { Database } from "@/app/lib/types";

export const postgres = createClient<Database> (
    process.env.POSTGRES_URL!,
    process.env.POSTGRES_SECRET!,
);