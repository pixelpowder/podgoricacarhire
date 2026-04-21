// Expose the request pathname via a custom header so the root layout
// (which has no access to route params) can derive the active locale for
// <html lang="..."> and JSON-LD schema markup.
//
// Also 301-redirects retired car-guide slugs to their nearest real-inventory
// replacement (LocalRent doesn't actually stock some of these in MNE).

import { NextResponse } from 'next/server';

const RETIRED_CARS = {
  'skoda-octavia':    'peugeot-308',      // mid-size diesel auto → closest
  'toyota-corolla':   'toyota-yaris',     // Toyota stays Toyota
  'mercedes-c-class': 'peugeot-308',      // premium mid-size → mid-size
  'jeep-renegade':    'kia-stonic',       // compact crossover
  'bmw-x3':           'kia-stonic',       // SUV → crossover
  'vw-transporter':   '/cars',            // van → index
  'dacia-duster':     'kia-stonic',       // budget crossover
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const carMatch = pathname.match(/^(?:\/([a-z]{2}))?\/cars\/([a-z0-9-]+)\/?$/);
  if (carMatch) {
    const [, locale, slug] = carMatch;
    if (RETIRED_CARS[slug]) {
      const target = RETIRED_CARS[slug];
      const newPath = target.startsWith('/')
        ? (locale ? `/${locale}${target}` : target)
        : (locale ? `/${locale}/cars/${target}` : `/cars/${target}`);
      const url = request.nextUrl.clone();
      url.pathname = newPath;
      return NextResponse.redirect(url, 301);
    }
  }

  const res = NextResponse.next();
  res.headers.set('x-pathname', pathname);
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
