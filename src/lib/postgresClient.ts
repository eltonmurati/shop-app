import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/types";

export const postgres = createClient<Database> (
    process.env.NEXT_PUBLIC_POSTGRES_URL!,
    process.env.NEXT_PUBLIC_POSTGRES_PUBLIC!,
);