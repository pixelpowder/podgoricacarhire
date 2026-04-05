'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Durmitor() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("durmitor.title")} subtitle={t("durmitor.subtitle")} description={t("durmitor.seoDesc")} image="/img/durmitor-mountains.webp">
      <img src="/img/durmitor-mountains.webp" alt="Durmitor mountains" loading="lazy" />
      <h2>{t('durmitorBody.h1')}</h2>
      <p>{t('durmitorBody.p1')}</p>
      <p>{t('durmitorBody.p2')}</p>
      <h2>{t('durmitorBody.activitiesTitle')}</h2>
      <h3>{t('durmitorBody.hikingTitle')}</h3>
      <p>{t('durmitorBody.hikingText')}</p>
      <h3>{t('durmitorBody.raftingTitle')}</h3>
      <p>{t('durmitorBody.raftingText')}</p>
      <h3>{t('durmitorBody.winterTitle')}</h3>
      <p>{t('durmitorBody.winterText')}</p>
      <h2>{t('durmitorBody.blackLakeTitle')}</h2>
      <p>{t('durmitorBody.blackLakeText')}</p>
      <h2>{t('durmitorBody.drivingTitle')}</h2>
      <p>{t('durmitorBody.drivingText')}</p>
    </ContentPage>
  );
}
