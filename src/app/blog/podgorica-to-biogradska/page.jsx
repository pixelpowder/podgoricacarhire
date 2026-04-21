import { t, buildAlternates } from '../../metadata';
import PodgoricaToBiogradska from '@/src/components/pages/blog/PodgoricaToBiogradska';

export async function generateMetadata() {
  const title = t('en', 'blogBiogradska.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogBiogradska.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/podgorica-to-biogradska'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PodgoricaToBiogradskaRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogBiogradska.title'),
    "description": t('en', 'blogBiogradska.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-podgorica-to-biogradska.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaToBiogradska />
    </>
  );
}
