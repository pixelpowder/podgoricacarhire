import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headers } from 'next/headers';
import CookieBanner from '@/src/CookieBanner';
import DynamicLanguageProvider from '@/src/i18n/DynamicLanguageProvider';
import { SUPPORTED_LANGS, DEFAULT_LANG, LANG_HREFLANG } from '@/src/i18n/languages';
import LocaleAwareSchema from '@/src/components/LocaleAwareSchema';
import { t as translate } from './metadata';

export const metadata = {
  title: translate('en', 'metaTitle.homepage'),
  description: translate('en', 'home.seoDesc'),
  metadataBase: new URL('https://www.podgoricacarhire.com'),
};

async function activeContext() {
  const h = await headers();
  const pathname = h.get('x-pathname') || h.get('x-invoke-path') || '';
  const segs = pathname.replace(/^\//, '').split('/').filter(Boolean);
  let lang = DEFAULT_LANG;
  let rest = segs;
  if (segs[0] && SUPPORTED_LANGS.includes(segs[0]) && segs[0] !== DEFAULT_LANG) {
    lang = segs[0];
    rest = segs.slice(1);
  }
  const isHomepage = rest.length === 0;
  return { lang, isHomepage };
}

export default async function RootLayout({ children }) {
  const { lang, isHomepage } = await activeContext();
  const htmlLang = LANG_HREFLANG[lang] || lang;

  return (
    <html lang={htmlLang}>
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <LocaleAwareSchema lang={lang} isHomepage={isHomepage} />
      </head>
      <body>
        <DynamicLanguageProvider initialLang={lang}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </DynamicLanguageProvider>
      </body>
    </html>
  );
}
