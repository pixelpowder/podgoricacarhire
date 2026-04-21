import { t, buildAlternates } from '../../metadata';
import SkadarLakeFromPodgorica from '@/src/components/pages/blog/SkadarLakeFromPodgorica';

export async function generateMetadata() {
  const title = t('en', 'blogSkadar.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogSkadar.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/skadar-lake-from-podgorica'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function SkadarLakeFromPodgoricaRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSkadar.title'),
    "description": t('en', 'blogSkadar.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-skadar-lake-from-podgorica.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SkadarLakeFromPodgorica />
    </>
  );
}
