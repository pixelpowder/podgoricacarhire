'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function LakeSkadar() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("lake-skadar.title")} subtitle={t("lake-skadar.subtitle")} description={t("lake-skadar.seoDesc")} image="/img/lake-skadar.webp">
      <img src="/img/lake-skadar.webp" alt="Lake Skadar" loading="lazy" />
      <h2>{t('lakeSkadarBody.h1')}</h2>
      <p>{t('lakeSkadarBody.p1')}</p>
      <p>{t('lakeSkadarBody.p2')}</p>
      <h2>{t('lakeSkadarBody.wildlifeTitle')}</h2>
      <p>{t('lakeSkadarBody.wildlifeText')}</p>
      <img src="/img/moraca-canyon.webp" alt="Lake Skadar wetlands" loading="lazy" />
      <h2>{t('lakeSkadarBody.villagesTitle')}</h2>
      <h3>{t('lakeSkadarBody.virpazarTitle')}</h3>
      <p>{t('lakeSkadarBody.virpazarText')}</p>
      <h3>{t('lakeSkadarBody.rijekaTitle')}</h3>
      <p>{t('lakeSkadarBody.rijekaText')}</p>
      <h2>{t('lakeSkadarBody.wineTitle')}</h2>
      <p>{t('lakeSkadarBody.wineText')}</p>
      <h2>{t('lakeSkadarBody.drivingTitle')}</h2>
      <p>{t('lakeSkadarBody.drivingText')} {t('lakeSkadarBody.cetinjeLinkPre')} <a href={localePath('/cetinje')}>{t('lakeSkadarBody.cetinjeLinkText')}</a> {t('lakeSkadarBody.cetinjeLinkPost')}</p>
    </ContentPage>
  );
}
