import { t, buildAlternates } from '../metadata';
import Durmitor from '@/src/components/pages/Durmitor';

export async function generateMetadata() {
  const title = t('en', 'durmitor.title') + ' | Podgorica Car Hire';
  const description = t('en', 'durmitor.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('durmitor'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function DurmitorRoute() {
  return <Durmitor />;
}
