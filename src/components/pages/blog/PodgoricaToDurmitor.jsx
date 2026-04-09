'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaToDurmitor() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogDurmitor.title')}
      subtitle={t('blogDurmitor.subtitle')}
      description={t('blogDurmitor.description')}
      image="/img/blog-podgorica-to-durmitor.webp"
    >
      <h2>{t('blogDurmitor.h2Overview')}</h2>
      <p>{t('blogDurmitor.overviewP1')}</p>
      <p>{t('blogDurmitor.overviewP2')}</p>

      <h2>{t('blogDurmitor.h2RouteNiksic')}</h2>
      <p>{t('blogDurmitor.routeNiksicP')}</p>

      <img src="/img/blog-podgorica-to-durmitor-inline.webp" alt={t('blogDurmitor.altInline')} loading="lazy" />

      <h2>{t('blogDurmitor.h2RouteMoraca')}</h2>
      <p>{t('blogDurmitor.routeMoracaP')} <a href={localePath('/blog/podgorica-moraca-canyon')}>{t('blogDurmitor.routeMoracaLink')}</a>.</p>

      <h2>{t('blogDurmitor.h2BlackLake')}</h2>
      <p>{t('blogDurmitor.blackLakeP')}</p>

      <h2>{t('blogDurmitor.h2TaraBridge')}</h2>
      <p>{t('blogDurmitor.taraBridgeP')}</p>

      <h2>{t('blogDurmitor.h2Fuel')}</h2>
      <p>{t('blogDurmitor.fuelP')}</p>

      <h2>{t('blogDurmitor.h2Stops')}</h2>
      <ul>
        <li><strong>{t('blogDurmitor.stopNiksicLabel')}</strong> {t('blogDurmitor.stopNiksicVal')}</li>
        <li><strong>{t('blogDurmitor.stopSavnikLabel')}</strong> {t('blogDurmitor.stopSavnikVal')}</li>
        <li><strong>{t('blogDurmitor.stopZabljakLabel')}</strong> {t('blogDurmitor.stopZabljakVal')}</li>
        <li><strong>{t('blogDurmitor.stopTaraLabel')}</strong> {t('blogDurmitor.stopTaraVal')}</li>
      </ul>

      <h2>{t('blogDurmitor.h2Car')}</h2>
      <p>{t('blogDurmitor.carP')}</p>

      <div className="route-info">
        <h3>{t('blogDurmitor.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogDurmitor.glanceDistance')}</strong>
            {t('blogDurmitor.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDurmitor.glanceDrive')}</strong>
            {t('blogDurmitor.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDurmitor.glanceElevation')}</strong>
            {t('blogDurmitor.glanceElevationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDurmitor.glanceBestCar')}</strong>
            {t('blogDurmitor.glanceBestCarVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
