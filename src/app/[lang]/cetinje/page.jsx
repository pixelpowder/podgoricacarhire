import { t, buildAlternates } from '../../metadata';
import Cetinje from '@/src/components/pages/Cetinje';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'cetinje.title') + ' | Podgorica Car Hire',
    description: t(lang, 'cetinje.seoDesc'),
    alternates: buildAlternates('cetinje'),
  };
}

export default function LangCetinjeRoute() {
  return <Cetinje />;
}
