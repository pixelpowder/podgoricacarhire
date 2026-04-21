import { t, buildAlternates } from '../../metadata';
import PodgoricaCityGuide from '@/src/components/pages/blog/PodgoricaCityGuide';

export async function generateMetadata() {
  const title = t('en', 'blogCityGuide.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogCityGuide.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/podgorica-city-guide'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PodgoricaCityGuideRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogCityGuide.title'),
    "description": t('en', 'blogCityGuide.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-podgorica-city-guide.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaCityGuide />
    </>
  );
}
