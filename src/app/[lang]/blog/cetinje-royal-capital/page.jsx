import { t, buildAlternates } from '../../../metadata';
import CetinjeRoyalCapital from '@/src/components/pages/blog/CetinjeRoyalCapital';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogCetinje.title') + ' | Podgorica Car Hire',
    description: t(lang, 'blogCetinje.description'),
    alternates: buildAlternates('blog/cetinje-royal-capital', lang),
  };
}

export default function LangCetinjeRoyalCapitalRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogCetinje.title'),
    "description": t(lang, 'blogCetinje.description'),
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
