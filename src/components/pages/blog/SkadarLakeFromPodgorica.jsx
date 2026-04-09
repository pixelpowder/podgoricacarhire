'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SkadarLakeFromPodgorica() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSkadar.title')}
      subtitle={t('blogSkadar.subtitle')}
      description={t('blogSkadar.description')}
      image="/img/blog-skadar-lake-from-podgorica.webp"
    >
      <h2>{t('blogSkadar.h2Why')}</h2>
      <p>{t('blogSkadar.whyP1')}</p>
      <p>{t('blogSkadar.whyP2')}</p>

      <h2>{t('blogSkadar.h2Virpazar')}</h2>
      <p>{t('blogSkadar.virpazarP')}</p>

      <img src="/img/blog-skadar-lake-from-podgorica-inline.webp" alt={t('blogSkadar.altInline')} loading="lazy" />

      <h2>{t('blogSkadar.h2Boat')}</h2>
      <p>{t('blogSkadar.boatP')}</p>

      <h2>{t('blogSkadar.h2Wine')}</h2>
      <p>{t('blogSkadar.wineP')}</p>

      <h2>{t('blogSkadar.h2Beaches')}</h2>
      <p>{t('blogSkadar.beachesP')} <a href={localePath('/blog/podgorica-airport-to-coast')}>{t('blogSkadar.beachesLink')}</a>.</p>

      <h2>{t('blogSkadar.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogSkadar.tipSeasonLabel')}</strong> {t('blogSkadar.tipSeasonVal')}</li>
        <li><strong>{t('blogSkadar.tipBoatLabel')}</strong> {t('blogSkadar.tipBoatVal')}</li>
        <li><strong>{t('blogSkadar.tipRepellentLabel')}</strong> {t('blogSkadar.tipRepellentVal')}</li>
        <li><strong>{t('blogSkadar.tipFoodLabel')}</strong> {t('blogSkadar.tipFoodVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogSkadar.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceDistance')}</strong>
            {t('blogSkadar.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceDrive')}</strong>
            {t('blogSkadar.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceBoatTrip')}</strong>
            {t('blogSkadar.glanceBoatTripVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceEntry')}</strong>
            {t('blogSkadar.glanceEntryVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
