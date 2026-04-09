'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaMoracaCanyon() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogMoraca.title')}
      subtitle={t('blogMoraca.subtitle')}
      description={t('blogMoraca.description')}
      image="/img/blog-podgorica-moraca-canyon.webp"
    >
      <h2>{t('blogMoraca.h2Why')}</h2>
      <p>{t('blogMoraca.whyP1')}</p>
      <p>{t('blogMoraca.whyP2')}</p>

      <h2>{t('blogMoraca.h2Road')}</h2>
      <p>{t('blogMoraca.roadP')}</p>

      <img src="/img/blog-podgorica-moraca-canyon-inline.webp" alt={t('blogMoraca.altInline')} loading="lazy" />

      <h2>{t('blogMoraca.h2Monastery')}</h2>
      <p>{t('blogMoraca.monasteryP')}</p>

      <h2>{t('blogMoraca.h2Viewpoints')}</h2>
      <p>{t('blogMoraca.viewpointsP')}</p>

      <h2>{t('blogMoraca.h2Continue')}</h2>
      <p>{t('blogMoraca.continueP')} <a href={localePath('/blog/podgorica-to-durmitor')}>{t('blogMoraca.continueLink')}</a>.</p>

      <h2>{t('blogMoraca.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogMoraca.tipDrivingLabel')}</strong> {t('blogMoraca.tipDrivingVal')}</li>
        <li><strong>{t('blogMoraca.tipFuelLabel')}</strong> {t('blogMoraca.tipFuelVal')}</li>
        <li><strong>{t('blogMoraca.tipStopsLabel')}</strong> {t('blogMoraca.tipStopsVal')}</li>
        <li><strong>{t('blogMoraca.tipCameraLabel')}</strong> {t('blogMoraca.tipCameraVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogMoraca.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogMoraca.glanceDistance')}</strong>
            {t('blogMoraca.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogMoraca.glanceDrive')}</strong>
            {t('blogMoraca.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogMoraca.glanceRoad')}</strong>
            {t('blogMoraca.glanceRoadVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogMoraca.glanceBestCar')}</strong>
            {t('blogMoraca.glanceBestCarVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
