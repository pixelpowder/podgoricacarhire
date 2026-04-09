import { t, buildAlternates } from '../../metadata';
import CetinjeRoyalCapital from '@/src/components/pages/blog/CetinjeRoyalCapital';

export async function generateMetadata() {
  return {
    title: t('en', 'blogCetinje.title') + ' | Podgorica Car Hire',
    description: t('en', 'blogCetinje.description'),
    alternates: buildAlternates('blog/cetinje-royal-capital'),
  };
}

export default function CetinjeRoyalCapitalRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogCetinje.title'),
    "description": t('en', 'blogCetinje.description'),
    "image": "https://www.podgoricacarhire.com/img/blog-cetinje-royal-capital.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Hire", "url": "https://www.podgoricacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <CetinjeRoyalCapital />
    </>
  );
}
