'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaCityGuide() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogCityGuide.title')}
      subtitle={t('blogCityGuide.subtitle')}
      description={t('blogCityGuide.description')}
      image="/img/blog-podgorica-city-guide.webp"
    >
      <h2>{t('blogCityGuide.h2Reputation')}</h2>
      <p>{t('blogCityGuide.reputationP1')}</p>
      <p>{t('blogCityGuide.reputationP2')}</p>

      <h2>{t('blogCityGuide.h2Old')}</h2>
      <p>{t('blogCityGuide.oldP')}</p>

      <img src="/img/blog-podgorica-city-guide-inline.webp" alt={t('blogCityGuide.altInline')} loading="lazy" />

      <h2>{t('blogCityGuide.h2Green')}</h2>
      <p>{t('blogCityGuide.greenP')}</p>

      <h2>{t('blogCityGuide.h2Food')}</h2>
      <p>{t('blogCityGuide.foodP1')}</p>
      <p>{t('blogCityGuide.foodP2')} <a href={localePath('/blog/niksic-brewery-waterfalls')}>{t('blogCityGuide.foodLink')}</a>.</p>

      <h2>{t('blogCityGuide.h2Markets')}</h2>
      <p>{t('blogCityGuide.marketsP')}</p>

      <h2>{t('blogCityGuide.h2DayTrips')}</h2>
      <p>{t('blogCityGuide.dayTripsP')} <a href={localePath('/blog/skadar-lake-from-podgorica')}>{t('blogCityGuide.dayTripsLink')}</a>.</p>

      <h2>{t('blogCityGuide.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogCityGuide.tipParkingLabel')}</strong> {t('blogCityGuide.tipParkingVal')}</li>
        <li><strong>{t('blogCityGuide.tipHeatLabel')}</strong> {t('blogCityGuide.tipHeatVal')}</li>
        <li><strong>{t('blogCityGuide.tipWalkLabel')}</strong> {t('blogCityGuide.tipWalkVal')}</li>
        <li><strong>{t('blogCityGuide.tipCafeLabel')}</strong> {t('blogCityGuide.tipCafeVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogCityGuide.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogCityGuide.glancePopulation')}</strong>
            {t('blogCityGuide.glancePopulationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogCityGuide.glanceElevation')}</strong>
            {t('blogCityGuide.glanceElevationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogCityGuide.glanceTimeNeeded')}</strong>
            {t('blogCityGuide.glanceTimeNeededVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogCityGuide.glanceBestFor')}</strong>
            {t('blogCityGuide.glanceBestForVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
