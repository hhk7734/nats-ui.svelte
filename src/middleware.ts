import { NextRequest } from "next/server";

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(req: NextRequest) {}
