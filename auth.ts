import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/app/lib/types';

const supabase = createClient<Database>(process.env.POSTGRES_URL!, process.env.POSTGRES_PUBLIC_KEY!);
/*
async function getUser(email: string): Promise<User | undefined> {
    try {
        
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({email: z.string().email(), password: z.string().min(6)})
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const {} = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                }

                return null;
            },
        }),
    ],
});*/