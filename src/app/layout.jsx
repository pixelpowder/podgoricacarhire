import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieBanner from '@/src/CookieBanner';
import { LanguageContext } from '@/src/i18n/LanguageContext';
import { DEFAULT_LANG } from '@/src/i18n/languages';

export const metadata = {
  title: 'Podgorica Car Hire — Airport Pickup, Drive Montenegro',
  description:
    'Rent a car in Podgorica from \u20AC13/day. Pick up at Podgorica Airport (TGD) and drive to Durmitor, Lake Skadar, Kotor, and the coast. Free cancellation, full insurance, no hidden fees.',
  metadataBase: new URL('https://www.podgoricacarhire.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
      </head>
      <body>
        <LanguageContext value={DEFAULT_LANG}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LanguageContext>
      </body>
    </html>
  );
}
