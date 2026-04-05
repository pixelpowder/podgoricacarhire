import { t, buildAlternates } from '../metadata';
import Niksic from '@/src/components/pages/Niksic';

export async function generateMetadata() {
  return {
    title: t('en', 'niksic.title') + ' | Podgorica Car Hire',
    description: t('en', 'niksic.seoDesc'),
    alternates: buildAlternates('niksic'),
  };
}

export default function NiksicRoute() {
  return <Niksic />;
}
