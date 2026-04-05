import { t, buildAlternates } from '../metadata';
import Durmitor from '@/src/components/pages/Durmitor';

export async function generateMetadata() {
  return {
    title: t('en', 'durmitor.title') + ' | Podgorica Car Hire',
    description: t('en', 'durmitor.seoDesc'),
    alternates: buildAlternates('durmitor'),
  };
}

export default function DurmitorRoute() {
  return <Durmitor />;
}
