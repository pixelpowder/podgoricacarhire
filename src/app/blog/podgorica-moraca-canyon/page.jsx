import { t, buildAlternates } from '../../metadata';
import PodgoricaMoracaCanyon from '@/src/components/pages/blog/PodgoricaMoracaCanyon';

export async function generateMetadata() {
  const title = t('en', 'blogMoraca.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogMoraca.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/podgorica-moraca-canyon'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PodgoricaMoracaCanyonRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogMoraca.title'),
    "description": t('en', 'blogMoraca.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-podgorica-moraca-canyon.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaMoracaCanyon />
    </>
  );
}
