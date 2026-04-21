import { t, buildAlternates } from '../../metadata';
import NiksicBreweryWaterfalls from '@/src/components/pages/blog/NiksicBreweryWaterfalls';

export async function generateMetadata() {
  const title = t('en', 'blogNiksic.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogNiksic.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/niksic-brewery-waterfalls'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function NiksicBreweryWaterfallsRoute() {
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
