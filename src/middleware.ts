import createMiddleware from "next-intl/middleware";

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico).*)"],
};

export default createMiddleware({
	locales: ["en", "ko"],
	defaultLocale: "en",
});
