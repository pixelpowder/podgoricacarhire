import { t, buildAlternates } from '../../metadata';
import PodgoricaToDurmitor from '@/src/components/pages/blog/PodgoricaToDurmitor';

export async function generateMetadata() {
  const title = t('en', 'blogDurmitor.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogDurmitor.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/podgorica-to-durmitor'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PodgoricaToDurmitorRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogDurmitor.title'),
    "description": t('en', 'blogDurmitor.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-podgorica-to-durmitor.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaToDurmitor />
    </>
  );
}
