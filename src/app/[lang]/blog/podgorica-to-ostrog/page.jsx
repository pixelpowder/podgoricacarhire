import { t, buildAlternates } from '../../../metadata';
import PodgoricaToOstrog from '@/src/components/pages/blog/PodgoricaToOstrog';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogOstrog.title') + ' | Podgorica Car Hire',
    description: t(lang, 'blogOstrog.description'),
    alternates: buildAlternates('blog/podgorica-to-ostrog', lang),
  };
}

export default async function LangPodgoricaToOstrogRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogOstrog.title'),
    "description": t(lang, 'blogOstrog.description'),
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
