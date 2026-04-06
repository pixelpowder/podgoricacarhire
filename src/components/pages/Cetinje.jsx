'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Cetinje() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("cetinje.title")} subtitle={t("cetinje.subtitle")} description={t("cetinje.seoDesc")} image="/img/lovcen-viewpoint.webp">
      <img src="/img/lovcen-viewpoint.webp" alt="Lovćen National Park viewpoint above the clouds" loading="lazy" />
      <h2>{t('cetinjeBody.h1')}</h2>
      <p>{t('cetinjeBody.p1')}</p>
      <p>{t('cetinjeBody.p2')}</p>
      <h2>{t('cetinjeBody.monasteryTitle')}</h2>
      <p>{t('cetinjeBody.monasteryText')}</p>
      <img src="/img/cetinje-village.webp" alt="Montenegrin village near Cetinje" loading="lazy" />
      <h2>{t('cetinjeBody.museumsTitle')}</h2>
      <h3>{t('cetinjeBody.kingPalaceTitle')}</h3>
      <p>{t('cetinjeBody.kingPalaceText')}</p>
      <h3>{t('cetinjeBody.nationalMuseumTitle')}</h3>
      <p>{t('cetinjeBody.nationalMuseumText')}</p>
      <h2>{t('cetinjeBody.lovcenTitle')}</h2>
      <p>{t('cetinjeBody.lovcenText')}</p>
    </ContentPage>
  );
}
