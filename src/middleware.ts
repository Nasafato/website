import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { Locale, i18n } from "@/i18n-config";

function getLocale(request: NextRequest) {
  let languages = new Negotiator({
    headers: Object.fromEntries(new Map(request.headers).entries()),
  }).languages();
  if (languages[0] === "*") {
    languages = ["en-US"];
  }
  try {
    const locale = match(
      languages,
      i18n.locales as unknown as string[],
      i18n.defaultLocale
    );
    return locale; // -> 'en-US'
  } catch (err) {
    console.error("err", err);
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const localeCookie = request.cookies.get("NEXT_LOCALE");
  let locale;
  const cookieValue = (localeCookie?.value ?? "") as Locale;
  if (i18n.locales.includes(cookieValue)) {
    locale = localeCookie?.value;
  } else {
    locale = getLocale(request);
  }
  if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "") {
    const url = new URL(`/${locale}`, request.url);
    return NextResponse.redirect(url);
  }

  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale.
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next|.*.json|api|opengraph-image|.*\\..*).*)"],
};
