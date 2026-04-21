import { t, buildAlternates } from '../../metadata';
import PodgoricaAirportToCoast from '@/src/components/pages/blog/PodgoricaAirportToCoast';

export async function generateMetadata() {
  const title = t('en', 'blogAirportCoast.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogAirportCoast.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/podgorica-airport-to-coast'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PodgoricaAirportToCoastRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogAirportCoast.title'),
    "description": t('en', 'blogAirportCoast.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-podgorica-airport-to-coast.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaAirportToCoast />
    </>
  );
}
