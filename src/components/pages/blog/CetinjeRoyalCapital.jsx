'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function CetinjeRoyalCapital() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogCetinje.title')}
      subtitle={t('blogCetinje.subtitle')}
      description={t('blogCetinje.description')}
      image="/img/blog-cetinje-royal-capital.webp"
    >
      <h2>{t('blogCetinje.h2Why')}</h2>
      <p>{t('blogCetinje.whyP1')}</p>
      <p>{t('blogCetinje.whyP2')}</p>

      <h2>{t('blogCetinje.h2Monastery')}</h2>
      <p>{t('blogCetinje.monasteryP')}</p>

      <img src="/img/blog-cetinje-royal-capital-inline.webp" alt={t('blogCetinje.altInline')} loading="lazy" />

      <h2>{t('blogCetinje.h2Museums')}</h2>
      <p>{t('blogCetinje.museumsP')}</p>

      <h2>{t('blogCetinje.h2Embassies')}</h2>
      <p>{t('blogCetinje.embassiesP')}</p>

      <h2>{t('blogCetinje.h2LovcenLink')}</h2>
      <p>{t('blogCetinje.lovcenLinkP')} <a href={localePath('/blog/podgorica-to-durmitor')}>{t('blogCetinje.lovcenLinkText')}</a>.</p>

      <h2>{t('blogCetinje.h2Food')}</h2>
      <p>{t('blogCetinje.foodP')}</p>

      <h2>{t('blogCetinje.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogCetinje.tipRoadLabel')}</strong> {t('blogCetinje.tipRoadVal')}</li>
        <li><strong>{t('blogCetinje.tipParkingLabel')}</strong> {t('blogCetinje.tipParkingVal')}</li>
        <li><strong>{t('blogCetinje.tipTimeLabel')}</strong> {t('blogCetinje.tipTimeVal')}</li>
        <li><strong>{t('blogCetinje.tipShoesLabel')}</strong> {t('blogCetinje.tipShoesVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogCetinje.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogCetinje.glanceDistance')}</strong>
            {t('blogCetinje.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogCetinje.glanceDrive')}</strong>
            {t('blogCetinje.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogCetinje.glanceElevation')}</strong>
            {t('blogCetinje.glanceElevationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogCetinje.glanceBestFor')}</strong>
            {t('blogCetinje.glanceBestForVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
