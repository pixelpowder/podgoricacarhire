import { notFound } from 'next/navigation';
import { buildAlternates } from '../../../metadata';
import { SUPPORTED_LANGS, DEFAULT_LANG } from '@/src/i18n/languages';
import config from '@/src/siteConfig';
import { carMetas } from '@/src/data/carMetas';
import CarDetail from '@/src/components/pages/CarDetail';

const LANG_PREFIXES = SUPPORTED_LANGS.filter(l => l !== DEFAULT_LANG);

const OG_LOCALE = {
  en: 'en_US',
  de: 'de_DE',
  ru: 'ru_RU',
  it: 'it_IT',
  fr: 'fr_FR',
  me: 'sr_ME',
};

export function generateStaticParams() {
  const params = [];
  for (const lang of LANG_PREFIXES) {
    for (const car of config.cars) {
      params.push({ lang, slug: car.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return {};

  const meta = carMetas[slug]?.[lang] || carMetas[slug]?.en;
  const title = meta?.title || `${car.name} | Podgorica Car Hire`;
  const description = meta?.desc || `${car.name} rental guide for Podgorica and inland Montenegro.`;
  const SITE = 'https://www.podgoricacarhire.com';
  return {
    title,
    description,
    alternates: buildAlternates(`cars/${slug}`, lang),
    openGraph: {
      title,
      description,
      url: `${SITE}/${lang}/cars/${slug}`,
      type: 'website',
      locale: OG_LOCALE[lang] || 'en_US',
      images: [{ url: `${SITE}${car.image}`, width: 1200, height: 800, alt: car.name }],
    },
  };
}

export default async function LangCarDetailRoute({ params }) {
  const { lang, slug } = await params;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) notFound();

  const localizedDesc =
    carMetas[slug]?.[lang]?.desc ||
    carMetas[slug]?.en?.desc ||
    car.suitability;

  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    'name': car.name,
    'description': localizedDesc,
    'image': `https://www.podgoricacarhire.com${car.image}`,
    'brand': { '@type': 'Brand', 'name': car.name.split(' ')[0] },
    'vehicleSeatingCapacity': car.seats,
    'vehicleTransmission': car.transmission,
    'fuelType': car.fuel,
    'inLanguage': lang === 'me' ? 'cnr' : lang,
    ...(car.details?.consumption && { 'fuelConsumption': car.details.consumption }),
    ...(car.details?.topSpeed && { 'speed': car.details.topSpeed }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }} />
      <CarDetail slug={slug} />
    </>
  );
}
