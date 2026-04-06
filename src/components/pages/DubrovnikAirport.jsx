'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function DubrovnikAirport() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("dubrovnik-airport.title")}
      subtitle={t("dubrovnik-airport.subtitle")}
      description={t("dubrovnik-airport.seoDesc")}
      image="/img/podgorica-airport.webp"
    >
      <img src="/img/podgorica-airport.webp" alt="Dubrovnik Airport" loading="lazy" />
      <h2>{t('dubrovnikAirportBody.h1')}</h2>
      <p>{t('dubrovnikAirportBody.p1')}</p>
      <p>{t('dubrovnikAirportBody.p2')}</p>
      <p>{t('dubrovnikAirportBody.p3')}</p>
      <h2>{t('dubrovnikAirportBody.borderTitle')}</h2>
      <p>{t('dubrovnikAirportBody.borderText')} Our <a href={localePath('/border-crossing-guide')}>border crossing documentation guide</a> has everything you need.</p>
      <h2>{t('dubrovnikAirportBody.facilitiesTitle')}</h2>
      <p>{t('dubrovnikAirportBody.facilitiesText1')}</p>
      <p>{t('dubrovnikAirportBody.facilitiesText2')}</p>
      <img src="/img/mountain-road.webp" alt="Montenegro road to Dubrovnik" loading="lazy" />
      <h2>{t('dubrovnikAirportBody.gettingTitle')}</h2>
      <p>{t('dubrovnikAirportBody.gettingText1')}</p>
      <p>{t('dubrovnikAirportBody.gettingText2')}</p>
    </ContentPage>
  );
}
