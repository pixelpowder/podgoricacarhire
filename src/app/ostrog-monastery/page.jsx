import { t, buildAlternates } from '../metadata';
import OstrogMonastery from '@/src/components/pages/OstrogMonastery';

export async function generateMetadata() {
  return {
    title: t('en', 'ostrog-monastery.title') + ' | Podgorica Car Hire',
    description: t('en', 'ostrog-monastery.seoDesc'),
    alternates: buildAlternates('ostrog-monastery'),
  };
}

export default function OstrogMonasteryRoute() {
  return <OstrogMonastery />;
}
