import { t, buildAlternates } from '../metadata';
import LakeSkadar from '@/src/components/pages/LakeSkadar';

export async function generateMetadata() {
  const title = t('en', 'lake-skadar.title') + ' | Podgorica Car Hire';
  const description = t('en', 'lake-skadar.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('lake-skadar'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function LakeSkadarRoute() {
  return <LakeSkadar />;
}
