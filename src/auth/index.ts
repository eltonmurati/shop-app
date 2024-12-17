import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = '/api/auth';

const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "E-mail", type: "text", placeholder: "example@domain.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
                const users = [
                    {
                        id: "1",
                        name: "Elton Murati",
                        email: "elton9996@gmail.com",
                        password: "password",
                    },
                    {
                        id: "2",
                        name: "BWC Merchants",
                        email: "info@bwcmerchants.co.uk",
                        password: "newadmin22",
                    },
                ];

                const user = users.find( (user) => user.email === credentials.email && user.password === credentials.password );

                return user ? user : null;
            },
        })
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);