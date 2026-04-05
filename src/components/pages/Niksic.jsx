'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Niksic() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("niksic.title")} subtitle={t("niksic.subtitle")} description={t("niksic.seoDesc")} image="/img/niksic-town.webp">
      <img src="/img/niksic-town.webp" alt="Niksic" loading="lazy" />
      <h2>{t('niksicBody.h1')}</h2>
      <p>{t('niksicBody.p1')}</p>
      <p>{t('niksicBody.p2')}</p>
      <h2>{t('niksicBody.breweryTitle')}</h2>
      <p>{t('niksicBody.breweryText')}</p>
      <h2>{t('niksicBody.lakeTitle')}</h2>
      <p>{t('niksicBody.lakeText')}</p>
      <h2>{t('niksicBody.fortressTitle')}</h2>
      <p>{t('niksicBody.fortressText')}</p>
      <h2>{t('niksicBody.gatewayTitle')}</h2>
      <p>{t('niksicBody.gatewayText')}</p>
      <h2>{t('niksicBody.drivingTitle')}</h2>
      <p>{t('niksicBody.drivingText')}</p>
    </ContentPage>
  );
}
