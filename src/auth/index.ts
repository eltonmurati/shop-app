import { postgres } from "@/lib/postgresClient";
import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

async function getUser(email: string) {
    let { data: user, error } = await postgres.from('user').select('*').eq('email_address', email);
    if (error) { throw error; }
    else { 
        if (user) { return user[0]; }
        else { return null; }
    }
};

export const BASE_PATH = '/api/auth';

const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            async authorize(credentials): Promise<User | null> {
                const user = await getUser(credentials.email as string);

                if (user) {
                    if (user.password_hash === credentials.password) {
                        return { email: user.email_address };
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            },
        })
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);