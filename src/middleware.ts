import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const config = {
    matcher: ["/product/:path*"],
};

export default auth((req) => {
    const reqUrl = new URL(req.url);
    if (!req.auth && reqUrl?.pathname !== "/login") {
        return NextResponse.redirect(new URL(`/login?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`, req.url));
    }
});