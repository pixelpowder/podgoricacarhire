import { t, buildAlternates } from '../../metadata';
import PodgoricaToOstrog from '@/src/components/pages/blog/PodgoricaToOstrog';

export async function generateMetadata() {
  return {
    title: t('en', 'blogOstrog.title') + ' | Podgorica Car Hire',
    description: t('en', 'blogOstrog.description'),
    alternates: buildAlternates('blog/podgorica-to-ostrog'),
  };
}

export default function PodgoricaToOstrogRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogOstrog.title'),
    "description": t('en', 'blogOstrog.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-podgorica-to-ostrog.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaToOstrog />
    </>
  );
}
