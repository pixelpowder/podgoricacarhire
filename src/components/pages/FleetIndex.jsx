'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { Users, Fuel, Settings, Briefcase, ArrowRight } from 'lucide-react';

export default function FleetIndex() {
  const { t, localePath } = useTranslation();

  return (
    <ContentPage
      title={t('fleetIndex.title', 'Our Fleet')}
      subtitle={t('fleetIndex.subtitle', 'Seven cars chosen for the Podgorica trip — capital errands, Skadar wine runs, Durmitor weekends, Adriatic days.')}
      image="/img/fleet/peugeot-308.jpg"
      heroPosition="center"
      description={t('fleetIndex.seoDesc', 'Browse the Podgorica Car Hire fleet — full specs, fuel economy, boot size, and what each car is best for on the roads out of TGD.')}
    >
      <p>{t('fleetIndex.intro1', `The Podgorica fleet is built for the capital's particular brief: straight grid boulevards, wide free kerbside parking in the inner blocks, the 12 km Sozina tunnel to the coast, the Morača canyon climb to Kolašin, and the M9 up to Ostrog monastery. Seven cars, each chosen for a specific kind of day out of TGD airport: a VW Polo or Toyota Yaris Hybrid for the city-only renter who values electric-quiet crawl through a 40°C afternoon; a Renault Clio or Peugeot 308 for the airport-to-coast crowd working a Bar–Ulcinj beach day; a Renault Megane for families with real hold luggage; a Kia Stonic for anyone taking the broken M9 up to Ostrog or the unsealed spurs around Rijeka Crnojevića; and a VW Golf for renters who want one car to handle every leg equally well.`)}</p>

      <p>{t('fleetIndex.intro2', `Three things matter in Podgorica more than they do elsewhere in Montenegro. First, heat. The capital sits in a basin below 50 metres of elevation and routinely passes 40°C from mid-June to late August — a hybrid-powered compressor in the Yaris is measurably colder than a small turbo running its AC off a petrol belt, and it matters more in Podgorica traffic than anywhere on the coast. Second, tolls. The Bar–Podgorica motorway via Sozina is Montenegro's first toll road, and the new Smokovac–Mateševo section that cuts the Kolašin run by 40 minutes is also tolled; cars with adaptive cruise make those long steady-speed runs genuinely relaxing rather than merely bearable. Third, fuel range. Beyond Nikšić the fuel network thins out — a 308 or Megane with a 50-litre diesel tank gives you the reach a 36-litre Yaris does not.`)}</p>

      <p>{t('fleetIndex.intro3', `Two rules of thumb for renters choosing from Podgorica: one, pick for your hardest day, not your easiest. The Yaris is magic on the flat Sozina run to the coast but it drones on the 1,450 m climb to Žabljak and you will wish you had the Golf's diesel torque by the second hairpin. Two, the capital's free on-street parking forgives a larger car than the coastal old towns do — you can rent a 308 here without the Kotor-style bastion-gate Tetris. That said, if your plan is one day in Podgorica and six days in Kotor Bay, rent with the coast in mind; if you are basing in the capital and doing Ostrog, Skadar Lake wine tastings and a Durmitor weekend, rent for the mountain roads.`)}</p>

      <div className="fleet-index-grid">
        {config.cars.map((car) => {
          const tk = (sub, fallback) => {
            const val = t(`cars.${car.slug}.${sub}`);
            return val && val !== `cars.${car.slug}.${sub}` ? val : fallback;
          };
          const name = tk('name', car.name);
          const tagline = tk('tagline', car.tagline);
          const category = tk('category', car.category);
          const consumption = car.details?.consumption;

          return (
            <a
              key={car.slug}
              href={localePath(`/cars/${car.slug}`)}
              className="fleet-index-card"
            >
              <div className="fleet-index-card__img" style={{ backgroundImage: `url(${car.image})` }}>
                <span className="fleet-index-card__tag">{category}</span>
              </div>
              <div className="fleet-index-card__body">
                <h3 className="fleet-index-card__name">{name}</h3>
                <p className="fleet-index-card__tagline">{tagline}</p>
                <div className="fleet-index-card__specs">
                  <span><Users size={14} /> {car.seats}</span>
                  <span><Settings size={14} /> {car.transmission.slice(0,4)}</span>
                  <span><Fuel size={14} /> {car.fuel}</span>
                  <span><Briefcase size={14} /> {car.luggage}</span>
                </div>
                {consumption && (
                  <div className="fleet-index-card__extra">
                    {consumption}
                  </div>
                )}
                <div className="fleet-index-card__footer">
                  <span className="fleet-index-card__arrow">
                    {t('cars.readGuide', 'Read guide')} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </ContentPage>
  );
}
