import { t, buildAlternates } from '../metadata';
import OstrogMonastery from '@/src/components/pages/OstrogMonastery';

export async function generateMetadata() {
  const title = t('en', 'ostrog-monastery.title') + ' | Podgorica Car Hire';
  const description = t('en', 'ostrog-monastery.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('ostrog-monastery'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function OstrogMonasteryRoute() {
  return <OstrogMonastery />;
}
