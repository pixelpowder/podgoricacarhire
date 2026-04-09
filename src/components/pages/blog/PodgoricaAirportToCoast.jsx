'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaAirportToCoast() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogAirportCoast.title')}
      subtitle={t('blogAirportCoast.subtitle')}
      description={t('blogAirportCoast.description')}
      image="/img/blog-podgorica-airport-to-coast.webp"
    >
      <h2>{t('blogAirportCoast.h2Overview')}</h2>
      <p>{t('blogAirportCoast.overviewP1')}</p>
      <p>{t('blogAirportCoast.overviewP2')}</p>

      <h2>{t('blogAirportCoast.h2RouteBudva')}</h2>
      <p>{t('blogAirportCoast.routeBudvaP')}</p>

      <img src="/img/blog-podgorica-airport-to-coast-inline.webp" alt={t('blogAirportCoast.altInline')} loading="lazy" />

      <h2>{t('blogAirportCoast.h2RouteBar')}</h2>
      <p>{t('blogAirportCoast.routeBarP')} <a href={localePath('/blog/skadar-lake-from-podgorica')}>{t('blogAirportCoast.routeBarLink')}</a>.</p>

      <h2>{t('blogAirportCoast.h2RouteKotor')}</h2>
      <p>{t('blogAirportCoast.routeKotorP')}</p>

      <h2>{t('blogAirportCoast.h2Tunnel')}</h2>
      <p>{t('blogAirportCoast.tunnelP')}</p>

      <h2>{t('blogAirportCoast.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogAirportCoast.tipTimingLabel')}</strong> {t('blogAirportCoast.tipTimingVal')}</li>
        <li><strong>{t('blogAirportCoast.tipTollLabel')}</strong> {t('blogAirportCoast.tipTollVal')}</li>
        <li><strong>{t('blogAirportCoast.tipFuelLabel')}</strong> {t('blogAirportCoast.tipFuelVal')}</li>
        <li><strong>{t('blogAirportCoast.tipNightLabel')}</strong> {t('blogAirportCoast.tipNightVal')}</li>
      </ul>

      <h2>{t('blogAirportCoast.h2Compare')}</h2>
      <div className="route-info">
        <h3>{t('blogAirportCoast.compareTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogAirportCoast.compareBudva')}</strong>
            {t('blogAirportCoast.compareBudvaVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAirportCoast.compareBar')}</strong>
            {t('blogAirportCoast.compareBarVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAirportCoast.compareKotor')}</strong>
            {t('blogAirportCoast.compareKotorVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAirportCoast.compareUlcinj')}</strong>
            {t('blogAirportCoast.compareUlcinjVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
