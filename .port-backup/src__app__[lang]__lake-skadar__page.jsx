import { t, buildAlternates } from '../../metadata';
import LakeSkadar from '@/src/components/pages/LakeSkadar';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'lake-skadar.title') + ' | Podgorica Car Hire',
    description: t(lang, 'lake-skadar.seoDesc'),
    alternates: buildAlternates('lake-skadar'),
  };
}

export default function LangLakeSkadarRoute() {
  return <LakeSkadar />;
}
