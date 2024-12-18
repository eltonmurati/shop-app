import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const config = {
    matcher: ["/product/:path*"],
};

export default auth((req) => {
    const reqUrl = new URL(req.url);
    console.log(reqUrl.pathname);
    if (!req.auth && reqUrl?.pathname !== "/login") {
        return NextResponse.redirect(new URL(`/login?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`, req.url));
    }
});