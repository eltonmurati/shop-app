import NextAuth, { User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { createClient } from '@supabase/supabase-js';
import { Database, Tables } from '@/app/lib/types';

const supabase = createClient<Database>(process.env.POSTGRES_URL!, process.env.POSTGRES_PUBLIC_KEY!);

declare module "next-auth"{
    interface User {
        email_address: string;
        password_hash: string;
    }
}

async function getUser(email: string): Promise<User | undefined> {
    let { data: user, error } = await supabase.from('user').select('email_address, password_hash').eq('email_address', email);
    if (user) { return user[0]; }
    else { throw error; }
};

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({email: z.string().email(), password: z.string().min(6)})
                    .safeParse(credentials);
                
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password_hash);

                    if (passwordsMatch) return user;
                }
                
                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});