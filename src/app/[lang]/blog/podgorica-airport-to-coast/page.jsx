import { t, buildAlternates } from '../../../metadata';
import PodgoricaAirportToCoast from '@/src/components/pages/blog/PodgoricaAirportToCoast';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogAirportCoast.title') + ' | Podgorica Car Hire',
    description: t(lang, 'blogAirportCoast.description'),
    alternates: buildAlternates('blog/podgorica-airport-to-coast', lang),
  };
}

export default function LangPodgoricaAirportToCoastRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogAirportCoast.title'),
    "description": t(lang, 'blogAirportCoast.description'),
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
