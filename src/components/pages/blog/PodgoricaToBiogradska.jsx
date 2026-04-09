'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaToBiogradska() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogBiogradska.title')}
      subtitle={t('blogBiogradska.subtitle')}
      description={t('blogBiogradska.description')}
      image="/img/blog-podgorica-to-biogradska.webp"
    >
      <h2>{t('blogBiogradska.h2Why')}</h2>
      <p>{t('blogBiogradska.whyP1')}</p>
      <p>{t('blogBiogradska.whyP2')}</p>

      <h2>{t('blogBiogradska.h2Route')}</h2>
      <p>{t('blogBiogradska.routeP')} <a href={localePath('/blog/podgorica-moraca-canyon')}>{t('blogBiogradska.routeLink')}</a>.</p>

      <img src="/img/blog-podgorica-to-biogradska-inline.webp" alt={t('blogBiogradska.altInline')} loading="lazy" />

      <h2>{t('blogBiogradska.h2Lake')}</h2>
      <p>{t('blogBiogradska.lakeP')}</p>

      <h2>{t('blogBiogradska.h2Trails')}</h2>
      <p>{t('blogBiogradska.trailsP')}</p>

      <h2>{t('blogBiogradska.h2Kolasin')}</h2>
      <p>{t('blogBiogradska.kolasinP')}</p>

      <h2>{t('blogBiogradska.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogBiogradska.tipShoesLabel')}</strong> {t('blogBiogradska.tipShoesVal')}</li>
        <li><strong>{t('blogBiogradska.tipSeasonLabel')}</strong> {t('blogBiogradska.tipSeasonVal')}</li>
        <li><strong>{t('blogBiogradska.tipFoodLabel')}</strong> {t('blogBiogradska.tipFoodVal')}</li>
        <li><strong>{t('blogBiogradska.tipBugsLabel')}</strong> {t('blogBiogradska.tipBugsVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogBiogradska.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogBiogradska.glanceDistance')}</strong>
            {t('blogBiogradska.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBiogradska.glanceDrive')}</strong>
            {t('blogBiogradska.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBiogradska.glanceEntry')}</strong>
            {t('blogBiogradska.glanceEntryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBiogradska.glanceBestFor')}</strong>
            {t('blogBiogradska.glanceBestForVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
