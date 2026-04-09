'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaToOstrog() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogOstrog.title')}
      subtitle={t('blogOstrog.subtitle')}
      description={t('blogOstrog.description')}
      image="/img/blog-podgorica-to-ostrog.webp"
    >
      <h2>{t('blogOstrog.h2Why')}</h2>
      <p>{t('blogOstrog.whyP1')}</p>
      <p>{t('blogOstrog.whyP2')}</p>

      <h2>{t('blogOstrog.h2Road')}</h2>
      <p>{t('blogOstrog.roadP')}</p>

      <img src="/img/blog-podgorica-to-ostrog-inline.webp" alt={t('blogOstrog.altInline')} loading="lazy" />

      <h2>{t('blogOstrog.h2Lower')}</h2>
      <p>{t('blogOstrog.lowerP')}</p>

      <h2>{t('blogOstrog.h2Upper')}</h2>
      <p>{t('blogOstrog.upperP')}</p>

      <h2>{t('blogOstrog.h2Practical')}</h2>
      <ul>
        <li><strong>{t('blogOstrog.tipDressLabel')}</strong> {t('blogOstrog.tipDressVal')}</li>
        <li><strong>{t('blogOstrog.tipParkingLabel')}</strong> {t('blogOstrog.tipParkingVal')}</li>
        <li><strong>{t('blogOstrog.tipTimingLabel')}</strong> {t('blogOstrog.tipTimingVal')}</li>
        <li><strong>{t('blogOstrog.tipWaterLabel')}</strong> {t('blogOstrog.tipWaterVal')}</li>
      </ul>

      <h2>{t('blogOstrog.h2Combine')}</h2>
      <p>{t('blogOstrog.combineP')} <a href={localePath('/blog/niksic-brewery-waterfalls')}>{t('blogOstrog.combineLink')}</a>.</p>

      <div className="route-info">
        <h3>{t('blogOstrog.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogOstrog.glanceDistance')}</strong>
            {t('blogOstrog.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOstrog.glanceDrive')}</strong>
            {t('blogOstrog.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOstrog.glanceElevation')}</strong>
            {t('blogOstrog.glanceElevationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOstrog.glanceEntry')}</strong>
            {t('blogOstrog.glanceEntryVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
