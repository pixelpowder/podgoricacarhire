import { t, buildAlternates } from '../metadata';
import Niksic from '@/src/components/pages/Niksic';

export async function generateMetadata() {
  const title = t('en', 'niksic.title') + ' | Podgorica Car Hire';
  const description = t('en', 'niksic.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('niksic'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function NiksicRoute() {
  return <Niksic />;
}
