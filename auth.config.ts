import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: {nextUrl} }) {
            const isLoggedIn = !!auth?.user;
            const isOnProduct = nextUrl.pathname.startsWith('/product');
            if (isOnProduct) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;