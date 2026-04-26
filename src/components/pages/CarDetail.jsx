'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { carArticles as carArticlesEn } from '../../data/carArticles';
import { carArticles as carArticlesDe } from '../../data/carArticles.de';
import { carArticles as carArticlesRu } from '../../data/carArticles.ru';
import { carArticles as carArticlesIt } from '../../data/carArticles.it';
import { carArticles as carArticlesFr } from '../../data/carArticles.fr';
import { carArticles as carArticlesMe } from '../../data/carArticles.me';
import { carImages } from '../../data/carImages';
import CarGallery from '../CarGallery';

const CAR_ARTICLES_BY_LANG = {
  en: carArticlesEn,
  de: carArticlesDe,
  ru: carArticlesRu,
  it: carArticlesIt,
  fr: carArticlesFr,
  me: carArticlesMe,
};
import {
  Users, Fuel, Settings, Briefcase, CheckCircle, ArrowRight,
  Gauge, Car as CarIcon, Ruler, Zap, Droplet, Compass, Timer, Package,
} from 'lucide-react';

// One UNIQUE inline Montenegro-road photo per car. Podgorica/inland flavour.
// Strings (alt, caption) come from i18n via cars.<slug>.inlineAlt / .inlineCaption
const INLINE_PHOTOS = {
  'vw-polo':        { src: '/img/fleet-inline/village-trees.jpg' },
  'renault-clio':   { src: '/img/fleet-inline/coastal-road.jpg' },
  'peugeot-308':    { src: '/img/fleet-inline/mountain-highway.jpg' },
  'renault-megane': { src: '/img/fleet-inline/sea-road.jpg' },
  'kia-stonic':     { src: '/img/fleet-inline/rocky-road.jpg' },
  'vw-golf':        { src: '/img/fleet-inline/forest-road.jpg' },
  'toyota-yaris':   { src: '/img/fleet-inline/aerial-mountains.jpg' },
  _default:         { src: '/img/fleet-inline/sunset-montenegro.jpg' },
};

// Related image-link cards at the end of each detail page (Podgorica-relevant).
// Card titles are looked up via cars.<slug>.related.<i>.
const RELATED = {
  'vw-polo': [
    { href: '/podgorica',                           img: '/img/podgorica-city.webp' },
    { href: '/lake-skadar',                         img: '/img/lake-skadar.webp' },
    { href: '/blog/podgorica-city-guide',           img: '/img/blog-podgorica-city-guide.webp' },
  ],
  'renault-clio': [
    { href: '/podgorica-airport',                   img: '/img/podgorica-airport.webp' },
    { href: '/blog/podgorica-airport-to-coast',     img: '/img/blog-podgorica-airport-to-coast.webp' },
    { href: '/budva',                               img: '/img/budva-coast.webp' },
  ],
  'peugeot-308': [
    { href: '/durmitor',                            img: '/img/durmitor-mountains.webp' },
    { href: '/blog/podgorica-to-durmitor',          img: '/img/blog-podgorica-to-durmitor.webp' },
    { href: '/blog/podgorica-to-biogradska',        img: '/img/blog-podgorica-to-biogradska.webp' },
  ],
  'renault-megane': [
    { href: '/blog/podgorica-airport-to-coast',     img: '/img/blog-podgorica-airport-to-coast.webp' },
    { href: '/budva',                               img: '/img/budva-coast.webp' },
    { href: '/blog/podgorica-city-guide',           img: '/img/blog-podgorica-city-guide.webp' },
  ],
  'kia-stonic': [
    { href: '/ostrog-monastery',                    img: '/img/ostrog-monastery.webp' },
    { href: '/blog/podgorica-to-ostrog',            img: '/img/blog-podgorica-to-ostrog.webp' },
    { href: '/blog/skadar-lake-from-podgorica',     img: '/img/blog-skadar-lake-from-podgorica.webp' },
  ],
  'vw-golf': [
    { href: '/blog/podgorica-moraca-canyon',        img: '/img/blog-podgorica-moraca-canyon.webp' },
    { href: '/blog/podgorica-to-durmitor',          img: '/img/blog-podgorica-to-durmitor.webp' },
    { href: '/niksic',                              img: '/img/niksic-town.webp' },
  ],
  'toyota-yaris': [
    { href: '/podgorica',                           img: '/img/podgorica-city.webp' },
    { href: '/blog/skadar-lake-from-podgorica',     img: '/img/blog-skadar-lake-from-podgorica.webp' },
    { href: '/lake-skadar',                         img: '/img/lake-skadar.webp' },
  ],
};

// Per-car inline link rule. Injected mid-paragraph, not tail-dropped.
const ARTICLE_LINKS = {
  'vw-polo':        { paraIndex: 1, candidates: ['Podgorica', 'Skadar', 'Virpazar'],              href: '/podgorica' },
  'renault-clio':   { paraIndex: 3, candidates: ['Sozina', 'Bar', 'Budva'],                        href: '/blog/podgorica-airport-to-coast' },
  'peugeot-308':    { paraIndex: 3, candidates: ['Durmitor', 'Kolašin', 'Žabljak'],                href: '/blog/podgorica-to-durmitor' },
  'renault-megane': { paraIndex: 3, candidates: ['Ulcinj', 'Bar', 'coastal'],                      href: '/blog/podgorica-airport-to-coast' },
  'kia-stonic':     { paraIndex: 1, candidates: ['Ostrog', 'M9', 'Rijeka Crnojevića', 'Rožaje'],   href: '/ostrog-monastery' },
  'vw-golf':        { paraIndex: 1, candidates: ['Morača', 'Platije', 'Kolašin'],                  href: '/blog/podgorica-moraca-canyon' },
  'toyota-yaris':   { paraIndex: 1, candidates: ['Podgorica', 'Moskovska', 'boulevards'],          href: '/podgorica' },
};

function renderParagraphWithLink(paragraph, rule, localePath, linkLabel) {
  if (!rule) return paragraph;
  for (const phrase of rule.candidates) {
    const idx = paragraph.indexOf(phrase);
    if (idx === -1) continue;
    const before = paragraph.slice(0, idx);
    const linkText = paragraph.slice(idx, idx + phrase.length);
    const after = paragraph.slice(idx + phrase.length);
    return (
      <>
        {before}
        <a href={localePath(rule.href)} title={linkLabel}>{linkText}</a>
        {after}
      </>
    );
  }
  return paragraph;
}

export default function CarDetail({ slug }) {
  const { t, lang, localePath } = useTranslation();
  const localisedArticles = CAR_ARTICLES_BY_LANG[lang] || CAR_ARTICLES_BY_LANG.en;
  const carArticles = localisedArticles[slug] ? localisedArticles : CAR_ARTICLES_BY_LANG.en;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return null;

  const k = (sub) => `cars.${slug}.${sub}`;
  const tk = (sub, fallback) => {
    const val = t(k(sub));
    return val && val !== k(sub) ? val : fallback;
  };
  const tf = (key, fallback) => {
    const val = t(key);
    return val && val !== key ? val : fallback;
  };

  const name = tk('name', car.name);
  const tagline = tk('tagline', car.tagline);
  const lede = tk('lede', car.lede);
  const suitability = tk('suitability', car.suitability);
  const regional = tk('regional', car.regional);
  const category = tk('category', car.category);
  const details = car.details || {};

  // Cross-link: next car in the fleet
  const idx = config.cars.findIndex(c => c.slug === slug);
  const next = config.cars[(idx + 1) % config.cars.length];

  const toMpg = (consumption) => {
    if (!consumption) return null;
    const m = consumption.match(/([\d.]+)\s*L\/100/);
    if (!m) return null;
    const l100 = parseFloat(m[1]);
    if (!l100) return null;
    return `${Math.round(282.48 / l100)} mpg`;
  };
  const mpg = toMpg(details.consumption);

  const quickRow = [
    { icon: <Users size={16} />,     label: tf('carSpecs.seats', 'Seats'),         value: car.seats },
    { icon: <Settings size={16} />,  label: tf('carSpecs.transmission', 'Gearbox'), value: car.transmission },
    { icon: <Fuel size={16} />,      label: tf('carSpecs.fuel', 'Fuel'),           value: car.fuel },
    { icon: <Briefcase size={16} />, label: tf('carSpecs.luggage', 'Luggage'),     value: `${car.luggage} bags` },
    { icon: <Package size={16} />,   label: tf('carSpecs.bootSize', 'Boot'),       value: details.bootSize },
    { icon: <Droplet size={16} />,   label: tf('carSpecs.mpg', 'Economy'),         value: mpg || details.consumption },
  ].filter(r => r.value);
  const detailRow = [];

  return (
    <ContentPage
      title={name}
      subtitle={tagline}
      description={suitability}
      image={car.image}
      heroPosition="center"
    >
      <div className="car-detail-hero-card">
        <div className="car-detail-category-tag">{category}</div>
        <p className="car-detail-lede">{lede}</p>
      </div>

      <CarGallery images={carImages[slug] || [car.image]} alt={name} />

      <h2>{t('cars.overviewTitle')}</h2>
      <div className="car-detail-specs car-detail-specs--quick">
        {quickRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      {detailRow.length > 0 && (
        <>
          <h3 className="car-detail-specs__subhead">{t('cars.specsTitle')}</h3>
          <div className="car-detail-specs car-detail-specs--full">
            {detailRow.map((s) => (
              <div key={s.label} className="car-detail-spec">
                <div className="car-detail-spec__icon">{s.icon}</div>
                <div className="car-detail-spec__label">{s.label}</div>
                <div className="car-detail-spec__value">{s.value}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2>{t('cars.whoForTitle')}</h2>
      <p>{suitability}</p>
      {Array.isArray(car.bestFor) && (
        <ul className="car-detail-bestfor">
          {car.bestFor.map((b, i) => (
            <li key={i}><CheckCircle size={14} /> {tk(`bestFor.${i}`, b)}</li>
          ))}
        </ul>
      )}

      <div className="car-detail-regional">
        <h2>{t('cars.regionalTitle')}</h2>
        <p>{regional}</p>
      </div>

      {carArticles[slug] && (
        <div className="car-detail-article">
          <h2>{(t('cars.articleTitle') || `The {name} around Podgorica`).replace('{name}', car.name)}</h2>
          {carArticles[slug].paragraphs.map((para, i) => {
            const rule = ARTICLE_LINKS[slug];
            const applyRuleHere = rule && rule.paraIndex === i;
            const sectionKeys = [
              'behindWheel', 'onRoads', 'spaceLoad', 'bestFor', 'practical', 'verdict',
            ];
            const sectionFallbacks = [
              'Behind the wheel',
              'On Podgorica roads',
              'Space and load',
              'Best journeys for this car',
              'Practical notes',
              'The verdict',
            ];
            return (
              <>
                <section key={i} className="car-detail-article__section">
                  <h3>{tf(`cars.sections.${sectionKeys[i]}`, sectionFallbacks[i])}</h3>
                  <p>{applyRuleHere ? renderParagraphWithLink(para, rule, localePath, car.name) : para}</p>
                </section>
                {i === 2 && (() => {
                  const inline = INLINE_PHOTOS[slug] || INLINE_PHOTOS._default;
                  const inlineAlt = INLINE_PHOTOS[slug]
                    ? tk('inlineAlt', t('cars.defaultInline.alt'))
                    : t('cars.defaultInline.alt');
                  const inlineCaption = INLINE_PHOTOS[slug]
                    ? tk('inlineCaption', t('cars.defaultInline.caption'))
                    : t('cars.defaultInline.caption');
                  return (
                    <figure key={`inline-${i}`} className="car-detail-article__figure">
                      <img src={inline.src} alt={inlineAlt} loading="lazy" />
                      <figcaption>{inlineCaption}</figcaption>
                    </figure>
                  );
                })()}
              </>
            );
          })}
        </div>
      )}

      <h2>{t('cars.specsTitle')}</h2>
      <div className="car-detail-specs car-detail-specs--full">
        {detailRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      <h2>{t('cars.featuresTitle')}</h2>
      <ul className="car-detail-feature-list">
        {car.features.map((f, i) => {
          const translated = tk(`features.${i}`, f);
          return <li key={i}><CheckCircle size={14} /> {translated}</li>;
        })}
      </ul>

      {RELATED[slug] && (
        <div className="car-detail-related">
          <h2>{t('cars.relatedTitle')}</h2>
          <div className="car-detail-related__grid">
            {RELATED[slug].map((card, i) => (
              <a key={card.href} href={localePath(card.href)} className="car-detail-related__card">
                <div className="car-detail-related__img" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="car-detail-related__body">
                  <span className="car-detail-related__title">{tk(`related.${i}`, '')}</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="car-detail-cta">
        <a href={localePath('/book')} className="car-detail-cta__btn">
          {t('cars.checkAvailability')} <ArrowRight size={16} />
        </a>
        <a href={localePath(`/cars/${next.slug}`)} className="car-detail-cta__next">
          {(t('cars.nextBtn') || `Next in fleet: {name}`).replace('{name}', next.name)} →
        </a>
      </div>
    </ContentPage>
  );
}
