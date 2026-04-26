import { t, buildAlternates } from '../../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.podgoricacarhire.com';

const OG_LOCALE = {
  en: 'en_US',
  de: 'de_DE',
  ru: 'ru_RU',
  it: 'it_IT',
  fr: 'fr_FR',
  me: 'sr_ME',
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const descKey = 'fleetIndex.seoDesc';
  const descTranslated = t(lang, descKey);
  const description = descTranslated !== descKey
    ? descTranslated
    : 'Browse the Podgorica Car Hire fleet, economy, mid-size and crossover options from €22/day at TGD airport.';
  const titleTranslated = t(lang, 'fleetIndex.title');
  const baseTitle = titleTranslated !== 'fleetIndex.title' ? titleTranslated : 'Our Fleet';
  const title = `${baseTitle} | Podgorica Car Hire`;
  return {
    title,
    description,
    alternates: buildAlternates('cars', lang),
    openGraph: {
      title,
      description,
      url: `${SITE}/${lang}/cars`,
      type: 'website',
      locale: OG_LOCALE[lang] || 'en_US',
      images: [{ url: `${SITE}/img/fleet/renault-clio.jpg`, width: 1200, height: 800, alt: baseTitle }],
    },
  };
}

export default function LangFleetIndexRoute() {
  return <FleetIndex />;
}
