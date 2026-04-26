'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function OstrogMonastery() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("ostrog-monastery.title")} subtitle={t("ostrog-monastery.subtitle")} description={t("ostrog-monastery.seoDesc")} image="/img/ostrog-monastery.webp">
      <img src="/img/ostrog-monastery.webp" alt="Ostrog Monastery" loading="lazy" />
      <h2>{t('ostrogBody.h1')}</h2>
      <p>{t('ostrogBody.p1')}</p>
      <p>{t('ostrogBody.p2')}</p>
      <img src="/img/ostrog-cliff.webp" alt={t('pageAlt.ostrogCliff')} loading="lazy" />
      <h2>{t('ostrogBody.upperTitle')}</h2>
      <p>{t('ostrogBody.upperText')}</p>
      <h2>{t('ostrogBody.lowerTitle')}</h2>
      <p>{t('ostrogBody.lowerText')}</p>
      <h2>{t('ostrogBody.practicalTitle')}</h2>
      <p>{t('ostrogBody.practicalText')}</p>
      <h2>{t('ostrogBody.drivingTitle')}</h2>
      <p>{t('ostrogBody.drivingText')}</p>
    </ContentPage>
  );
}
