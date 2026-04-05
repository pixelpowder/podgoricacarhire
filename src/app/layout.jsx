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
  title: 'Podgorica Car Hire — Budget Flights, Open Roads',
  description:
    'Fly Ryanair or Wizz into TGD, grab a car from \u20AC13/day, and reach Lake Skadar in 30 min or Durmitor in 2.5 hrs. 200+ vehicles, free cancellation, full insurance.',
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
