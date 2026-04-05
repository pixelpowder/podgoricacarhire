import { t, buildAlternates } from '../metadata';
import Cetinje from '@/src/components/pages/Cetinje';

export async function generateMetadata() {
  return {
    title: t('en', 'cetinje.title') + ' | Podgorica Car Hire',
    description: t('en', 'cetinje.seoDesc'),
    alternates: buildAlternates('cetinje'),
  };
}

export default function CetinjeRoute() {
  return <Cetinje />;
}
