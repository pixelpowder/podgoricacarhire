'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function NiksicBreweryWaterfalls() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogNiksic.title')}
      subtitle={t('blogNiksic.subtitle')}
      description={t('blogNiksic.description')}
      image="/img/blog-niksic-brewery-waterfalls.webp"
    >
      <h2>{t('blogNiksic.h2Why')}</h2>
      <p>{t('blogNiksic.whyP1')}</p>
      <p>{t('blogNiksic.whyP2')}</p>

      <h2>{t('blogNiksic.h2Brewery')}</h2>
      <p>{t('blogNiksic.breweryP')}</p>

      <img src="/img/blog-niksic-brewery-waterfalls-inline.webp" alt={t('blogNiksic.altInline')} loading="lazy" />

      <h2>{t('blogNiksic.h2Kapino')}</h2>
      <p>{t('blogNiksic.kapinoP')}</p>

      <h2>{t('blogNiksic.h2Krupac')}</h2>
      <p>{t('blogNiksic.krupacP')}</p>

      <h2>{t('blogNiksic.h2Fortress')}</h2>
      <p>{t('blogNiksic.fortressP')}</p>

      <h2>{t('blogNiksic.h2Combine')}</h2>
      <p>{t('blogNiksic.combineP')} <a href={localePath('/blog/podgorica-to-ostrog')}>{t('blogNiksic.combineLink')}</a>.</p>

      <h2>{t('blogNiksic.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogNiksic.tipFuelLabel')}</strong> {t('blogNiksic.tipFuelVal')}</li>
        <li><strong>{t('blogNiksic.tipSwimLabel')}</strong> {t('blogNiksic.tipSwimVal')}</li>
        <li><strong>{t('blogNiksic.tipFoodLabel')}</strong> {t('blogNiksic.tipFoodVal')}</li>
        <li><strong>{t('blogNiksic.tipTimeLabel')}</strong> {t('blogNiksic.tipTimeVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogNiksic.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogNiksic.glanceDistance')}</strong>
            {t('blogNiksic.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogNiksic.glanceDrive')}</strong>
            {t('blogNiksic.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogNiksic.glanceHighlights')}</strong>
            {t('blogNiksic.glanceHighlightsVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogNiksic.glanceBestFor')}</strong>
            {t('blogNiksic.glanceBestForVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
