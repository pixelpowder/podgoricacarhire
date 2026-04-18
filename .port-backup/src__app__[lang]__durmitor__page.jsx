import { t, buildAlternates } from '../../metadata';
import Durmitor from '@/src/components/pages/Durmitor';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'durmitor.title') + ' | Podgorica Car Hire',
    description: t(lang, 'durmitor.seoDesc'),
    alternates: buildAlternates('durmitor'),
  };
}

export default function LangDurmitorRoute() {
  return <Durmitor />;
}
