'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Terms() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("terms.title")}
      subtitle={t("terms.subtitle")}
      description={t("terms.seoDesc")}
      image="/img/podgorica-city.webp"
    >
      <p><strong>{t("termsBody.lastUpdatedLabel")}</strong> {t("termsBody.lastUpdated")}</p>

      <h2>{t("termsBody.aboutTitle")}</h2>
      <p>{t("termsBody.aboutText")}</p>

      <h2>{t("termsBody.bookingTitle")}</h2>
      <p>{t("termsBody.bookingText1")}</p>
      <p>{t("termsBody.bookingText2")}</p>

      <h2>{t("termsBody.roleTitle")}</h2>
      <p>{t("termsBody.weProvide")}</p>
      <ul>
        <li>{t("termsBody.provide1")}</li>
        <li>{t("termsBody.provide2")}</li>
        <li>{t("termsBody.provide3")}</li>
      </ul>
      <p>{t("termsBody.weDont")}</p>
      <ul>
        <li>{t("termsBody.dont1")}</li>
        <li>{t("termsBody.dont2")}</li>
        <li>{t("termsBody.dont3")}</li>
      </ul>

      <h2>{t("termsBody.pricingTitle")}</h2>
      <p>{t("termsBody.pricingText")}</p>

      <h2>{t("termsBody.contentTitle")}</h2>
      <p>{t("termsBody.contentText")}</p>

      <h2>{t("termsBody.liabilityTitle")}</h2>
      <p>{t("termsBody.liabilityIntro")}</p>
      <ul>
        <li>{t("termsBody.liab1")}</li>
        <li>{t("termsBody.liab2")}</li>
        <li>{t("termsBody.liab3")}</li>
        <li>{t("termsBody.liab4")}</li>
      </ul>

      <h2>{t("termsBody.ipTitle")}</h2>
      <p>{t("termsBody.ipText")}</p>

      <h2>{t("termsBody.contactTitle")}</h2>
      <p>{t("termsBody.contactText")}</p>
    </ContentPage>
  );
}
