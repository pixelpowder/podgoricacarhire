import { t, buildAlternates } from '../../metadata';
import OstrogMonastery from '@/src/components/pages/OstrogMonastery';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'ostrog-monastery.title') + ' | Podgorica Car Hire',
    description: t(lang, 'ostrog-monastery.seoDesc'),
    alternates: buildAlternates('ostrog-monastery', lang),
  };
}

export default function LangOstrogMonasteryRoute() {
  return <OstrogMonastery />;
}
