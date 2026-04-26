'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function CookiePolicy() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("cookie-policy.title")}
      subtitle={t("cookie-policy.subtitle")}
      description={t("cookie-policy.seoDesc")}
      image="/img/podgorica-city.webp"
    >
      <p><strong>{t("cookieBody.lastUpdatedLabel")}</strong> {t("cookieBody.lastUpdated")}</p>

      <h2>{t("cookieBody.whatTitle")}</h2>
      <p>{t("cookieBody.whatText")}</p>

      <h2>{t("cookieBody.weUseTitle")}</h2>

      <h3>{t("cookieBody.essentialTitle")}</h3>
      <p>{t("cookieBody.essentialText")}</p>
      <ul>
        <li><strong>{t("cookieBody.sessionLabel")}</strong> {t("cookieBody.sessionText")}</li>
        <li><strong>{t("cookieBody.prefLabel")}</strong> {t("cookieBody.prefText")}</li>
      </ul>

      <h3>{t("cookieBody.thirdTitle")}</h3>
      <p>{t("cookieBody.thirdIntro")}</p>
      <ul>
        <li>{t("cookieBody.third1")}</li>
        <li>{t("cookieBody.third2")}</li>
        <li>{t("cookieBody.third3")}</li>
      </ul>
      <p>{t("cookieBody.thirdOutro")}</p>

      <h2>{t("cookieBody.manageTitle")}</h2>
      <p>{t("cookieBody.manageIntro")}</p>
      <ul>
        <li>{t("cookieBody.manage1")}</li>
        <li>{t("cookieBody.manage2")}</li>
        <li>{t("cookieBody.manage3")}</li>
        <li>{t("cookieBody.manage4")}</li>
      </ul>
      <p>{t("cookieBody.manageOutro")}</p>

      <h2>{t("cookieBody.contactTitle")}</h2>
      <p>{t("cookieBody.contactText")}</p>
    </ContentPage>
  );
}
