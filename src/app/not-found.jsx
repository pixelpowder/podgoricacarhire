import NotFound from '@/src/components/pages/NotFound';
import { t as translate } from './metadata';

export const metadata = {
  title: `${translate('en', 'metaTitle.notFound')} | Podgorica Car Hire`,
};

export default function NotFoundPage() {
  return <NotFound />;
}
