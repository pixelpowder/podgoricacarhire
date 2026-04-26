'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Privacy() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("privacy.title")}
      subtitle={t("privacy.subtitle")}
      description={t("privacy.seoDesc")}
      image="/img/podgorica-city.webp"
    >
      <p><strong>{t("privacyBody.lastUpdatedLabel")}</strong> {t("privacyBody.lastUpdated")}</p>

      <h2>{t("privacyBody.whoTitle")}</h2>
      <p>{t("privacyBody.whoText")}</p>

      <h2>{t("privacyBody.whatTitle")}</h2>
      <h3>{t("privacyBody.providedTitle")}</h3>
      <p>{t("privacyBody.providedText")}</p>

      <h3>{t("privacyBody.autoTitle")}</h3>
      <ul>
        <li><strong>{t("privacyBody.usageLabel")}</strong> {t("privacyBody.usageText")}</li>
        <li><strong>{t("privacyBody.deviceLabel")}</strong> {t("privacyBody.deviceText")}</li>
        <li><strong>{t("privacyBody.ipLabel")}</strong> {t("privacyBody.ipText")}</li>
      </ul>

      <h2>{t("privacyBody.useTitle")}</h2>
      <ul>
        <li>{t("privacyBody.use1")}</li>
        <li>{t("privacyBody.use2")}</li>
        <li>{t("privacyBody.use3")}</li>
        <li>{t("privacyBody.use4")}</li>
      </ul>

      <h2>{t("privacyBody.thirdTitle")}</h2>
      <p>{t("privacyBody.thirdIntro")}</p>
      <ul>
        <li><strong>{t("privacyBody.partnerLabel")}</strong> {t("privacyBody.partnerText")}</li>
        <li><strong>{t("privacyBody.hostingLabel")}</strong> {t("privacyBody.hostingText")}</li>
        <li><strong>{t("privacyBody.photosLabel")}</strong> {t("privacyBody.photosText")}</li>
      </ul>
      <p>{t("privacyBody.thirdOutro")}</p>

      <h2>{t("privacyBody.cookiesTitle")}</h2>
      <p>{t("privacyBody.cookiesIntro")} <a href={localePath("/cookie-policy")}>{t("privacyBody.cookiesLink")}</a> {t("privacyBody.cookiesOutro")}</p>

      <h2>{t("privacyBody.rightsTitle")}</h2>
      <p>{t("privacyBody.rightsIntro")}</p>
      <ul>
        <li>{t("privacyBody.right1")}</li>
        <li>{t("privacyBody.right2")}</li>
        <li>{t("privacyBody.right3")}</li>
        <li>{t("privacyBody.right4")}</li>
      </ul>

      <h2>{t("privacyBody.contactTitle")}</h2>
      <p>{t("privacyBody.contactText")}</p>
    </ContentPage>
  );
}
