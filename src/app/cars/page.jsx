import { t, buildAlternates } from '../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.podgoricacarhire.com';

export async function generateMetadata() {
  const title = 'Our Fleet, 7 Cars for Rent at Podgorica Airport | Podgorica Car Hire';
  const description = (t('en', 'fleetIndex.seoDesc') !== 'fleetIndex.seoDesc'
    ? t('en', 'fleetIndex.seoDesc')
    : 'Browse the Podgorica Car Hire fleet, economy, mid-size and crossover options from €22/day at TGD airport. Specs, fuel economy and best routes for each car.');
  return {
    title,
    description,
    alternates: buildAlternates('cars'),
    openGraph: {
      title,
      description,
      url: `${SITE}/cars`,
      type: 'website',
      images: [{ url: `${SITE}/img/fleet/renault-clio.jpg`, width: 1200, height: 800, alt: t('en', 'aria.fleetGalleryAlt') }],
    },
  };
}

export default function FleetIndexRoute() {
  return <FleetIndex />;
}
