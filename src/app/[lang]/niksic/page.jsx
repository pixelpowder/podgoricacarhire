import { t, buildAlternates } from '../../metadata';
import Niksic from '@/src/components/pages/Niksic';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'niksic.title') + ' | Podgorica Car Hire',
    description: t(lang, 'niksic.seoDesc'),
    alternates: buildAlternates('niksic'),
  };
}

export default function LangNiksicRoute() {
  return <Niksic />;
}
