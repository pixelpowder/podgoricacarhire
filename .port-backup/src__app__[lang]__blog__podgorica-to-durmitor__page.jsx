import { t, buildAlternates } from '../../../metadata';
import PodgoricaToDurmitor from '@/src/components/pages/blog/PodgoricaToDurmitor';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogDurmitor.title') + ' | Podgorica Car Hire',
    description: t(lang, 'blogDurmitor.description'),
    alternates: buildAlternates('blog/podgorica-to-durmitor'),
  };
}

export default function LangPodgoricaToDurmitorRoute() {
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
