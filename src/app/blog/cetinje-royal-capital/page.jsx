import { t, buildAlternates } from '../../metadata';
import CetinjeRoyalCapital from '@/src/components/pages/blog/CetinjeRoyalCapital';

export async function generateMetadata() {
  const title = t('en', 'blogCetinje.title') + ' | Podgorica Car Hire';
  const description = t('en', 'blogCetinje.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/cetinje-royal-capital'),
    openGraph: { title, description, type: 'website' },
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
