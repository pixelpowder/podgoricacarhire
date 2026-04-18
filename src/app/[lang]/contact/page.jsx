import Contact from '@/src/components/pages/Contact';
import { t, buildAlternates } from '@/src/app/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Contact Us | Podgorica Car Hire',
    description: 'Get in touch with Podgorica Car Hire.',
    alternates: buildAlternates('contact', lang),
  };
}

export default function ContactPage() {
  return <Contact />;
}
