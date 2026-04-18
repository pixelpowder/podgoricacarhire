import { t, buildAlternates } from '../../../metadata';
import NiksicBreweryWaterfalls from '@/src/components/pages/blog/NiksicBreweryWaterfalls';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogNiksic.title') + ' | Podgorica Car Hire',
    description: t(lang, 'blogNiksic.description'),
    alternates: buildAlternates('blog/niksic-brewery-waterfalls', lang),
  };
}

export default function LangNiksicBreweryWaterfallsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogNiksic.title'),
    "description": t('en', 'blogNiksic.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-niksic-brewery-waterfalls.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <NiksicBreweryWaterfalls />
    </>
  );
}
