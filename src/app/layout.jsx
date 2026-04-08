import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieBanner from '@/src/CookieBanner';
import { LanguageContext } from '@/src/i18n/LanguageContext';
import { DEFAULT_LANG } from '@/src/i18n/languages';

export const metadata = {
  title: 'Podgorica Car Hire — Budget Flights, Open Roads',
  description:
    'Fly Ryanair or Wizz into TGD, grab a car from \u20AC13/day, and reach Lake Skadar in 30 min or Durmitor in 2.5 hrs. 200+ vehicles, free cancellation, full insurance.',
  metadataBase: new URL('https://www.podgoricacarhire.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Podgorica Car Hire",
            "url": "https://www.podgoricacarhire.com",
            "description": "Rent a car at Podgorica Airport from trusted local providers with free cancellation, full insurance, and meet-and-greet pickup at TGD arrivals.",
            "email": "info@podgoricacarhire.com",
            "image": "https://www.podgoricacarhire.com/img/schema-car.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Podgorica",
              "postalCode": "81000",
              "addressCountry": "ME"
            },
            "areaServed": [
              { "@type": "City", "name": "Podgorica" },
              { "@type": "City", "name": "Nikšić" },
              { "@type": "City", "name": "Kotor" },
              { "@type": "City", "name": "Budva" },
              { "@type": "City", "name": "Žabljak" }
            ],
            "priceRange": "€25–€120",
            "currenciesAccepted": "EUR",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5" }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What documents do I need?",
                "acceptedAnswer": { "@type": "Answer", "text": "A valid driving licence showing Latin-script details, your passport, and a physical credit card issued in the main driver\u2019s name. If your licence was issued outside the EU, an International Driving Permit is strongly recommended alongside your national licence. Photocopies and digital licences stored on a phone are not accepted at pickup." }
              },
              {
                "@type": "Question",
                "name": "Can I drive to Serbia or Albania?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes \u2014 cross-border travel is permitted to Serbia, Albania, Kosovo, Bosnia, and Croatia. The main border crossings near Podgorica are Dra\u010Denovac for Serbia and Hani i Hotit for Albania. Let us know at booking so we can prepare the Green Card and any additional paperwork in advance." }
              },
              {
                "@type": "Question",
                "name": "Is there a minimum age?",
                "acceptedAnswer": { "@type": "Answer", "text": "The minimum rental age is 21, with at least 2 years of driving experience. Drivers aged 21\u201324 pay a young driver supplement; the exact rate depends on the vehicle category and is shown clearly during the search before you confirm anything." }
              },
              {
                "@type": "Question",
                "name": "What\u2019s included in the price?",
                "acceptedAnswer": { "@type": "Answer", "text": "All vehicles include third-party liability insurance, and most include CDW (Collision Damage Waiver) in the base rate. VAT, the mandatory equipment kit (first aid, warning triangle, reflective vest), and a clearly stated fuel policy are all included. Mileage terms vary by vehicle and are shown before booking. Zero-excess upgrades are available as an add-on." }
              },
              {
                "@type": "Question",
                "name": "How does pickup work at TGD?",
                "acceptedAnswer": { "@type": "Answer", "text": "Podgorica Airport (TGD) is a compact single-terminal building \u2014 arrivals are straightforward. Our agent meets you in the arrivals hall holding a board with your name. The car is parked just outside the terminal. From wheels-down to driving away typically takes under 10 minutes." }
              },
              {
                "@type": "Question",
                "name": "Can I drop off at a different location?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes \u2014 one-way rentals are available across 28 destinations in Montenegro. Choose your preferred pickup and dropoff points during booking. One-way fees, where they apply, are shown transparently before you confirm." }
              },
              {
                "@type": "Question",
                "name": "What is the cancellation policy?",
                "acceptedAnswer": { "@type": "Answer", "text": "Standard vehicles: free cancellation up to 7 days before pickup. Luxury cars and convertibles: free cancellation up to 30 days before. A 6% payment processing fee applies to all cancellations regardless of timing." }
              },
              {
                "@type": "Question",
                "name": "Is a deposit required?",
                "acceptedAnswer": { "@type": "Answer", "text": "Deposit requirements at TGD vary between zero and \u20AC300 depending on the vehicle tier. The deposit must be blocked on a physical credit card (not debit or prepaid) in the main driver\u2019s name at the time of pickup, and is fully released once the car is returned undamaged." }
              },
              {
                "@type": "Question",
                "name": "What happens if I exceed the mileage limit?",
                "acceptedAnswer": { "@type": "Answer", "text": "Vehicles with a kilometre cap charge a per-km rate for any distance above the agreed limit. The rate is listed in the vehicle terms before you book." }
              },
              {
                "@type": "Question",
                "name": "Do I need snow chains for mountain roads?",
                "acceptedAnswer": { "@type": "Answer", "text": "From November to March, snow chains or winter tyres are legally required on mountain roads above 1,000 m in Montenegro. This includes the road to \u017dabljak and Durmitor National Park." }
              },
              {
                "@type": "Question",
                "name": "How much do I pay upfront?",
                "acceptedAnswer": { "@type": "Answer", "text": "A deposit of 15\u201320% of the total rental cost is charged at booking to secure your reservation. The remaining balance is settled directly with the rental agent at TGD pickup." }
              },
              {
                "@type": "Question",
                "name": "Can I rent without a credit card?",
                "acceptedAnswer": { "@type": "Answer", "text": "A small number of vehicles in our fleet are available to renters without a credit card \u2014 these are clearly marked in the search results. For most vehicles, however, a physical credit card in the driver\u2019s name is required for the security deposit at pickup." }
              }
            ]
          }) }}
        />
      </head>
      <body>
        <LanguageContext value={DEFAULT_LANG}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LanguageContext>
      </body>
    </html>
  );
}
