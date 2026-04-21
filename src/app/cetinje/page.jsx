import { t, buildAlternates } from '../metadata';
import Cetinje from '@/src/components/pages/Cetinje';

export async function generateMetadata() {
  const title = t('en', 'cetinje.title') + ' | Podgorica Car Hire';
  const description = t('en', 'cetinje.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('cetinje'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function CetinjeRoute() {
  return <Cetinje />;
}
