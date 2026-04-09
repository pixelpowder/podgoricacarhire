'use client';
import Nav from '../../../Nav';
import Footer from '../../../Footer';
import useTranslation from '../../../i18n/useTranslation';
import '../../../ContentPage.css';

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid var(--gray-200, #e9ecef)',
  boxShadow: 'var(--shadow-sm)',
  transition: 'box-shadow 0.2s, transform 0.2s',
  display: 'flex',
  flexDirection: 'column',
};

const cardImageStyle = {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
  display: 'block',
};

const cardBodyStyle = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

const cardTitleStyle = {
  fontSize: '18px',
  fontWeight: 800,
  color: 'var(--navy, #05203c)',
  lineHeight: 1.3,
  marginBottom: '10px',
};

const cardExcerptStyle = {
  fontSize: '15px',
  color: 'var(--gray-600, #6c757d)',
  lineHeight: 1.65,
  marginBottom: '20px',
  flex: 1,
};

const cardLinkStyle = {
  fontSize: '14px',
  fontWeight: 700,
  color: 'var(--blue, #0770e3)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const articles = [
  { key: 'cityGuide', image: '/img/blog-podgorica-city-guide.webp', href: '/blog/podgorica-city-guide' },
  { key: 'ostrog', image: '/img/blog-podgorica-to-ostrog.webp', href: '/blog/podgorica-to-ostrog' },
  { key: 'durmitor', image: '/img/blog-podgorica-to-durmitor.webp', href: '/blog/podgorica-to-durmitor' },
  { key: 'cetinje', image: '/img/blog-cetinje-royal-capital.webp', href: '/blog/cetinje-royal-capital' },
  { key: 'skadar', image: '/img/blog-skadar-lake-from-podgorica.webp', href: '/blog/skadar-lake-from-podgorica' },
  { key: 'niksic', image: '/img/blog-niksic-brewery-waterfalls.webp', href: '/blog/niksic-brewery-waterfalls' },
  { key: 'moraca', image: '/img/blog-podgorica-moraca-canyon.webp', href: '/blog/podgorica-moraca-canyon' },
  { key: 'biogradska', image: '/img/blog-podgorica-to-biogradska.webp', href: '/blog/podgorica-to-biogradska' },
  { key: 'airport', image: '/img/blog-podgorica-airport-to-coast.webp', href: '/blog/podgorica-airport-to-coast' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();

  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-podgorica-city-guide.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{t('blogIndex.breadcrumbBlog')}</span>
          </nav>
          <h1 className="content-hero__title">{t('blogIndex.heroTitle')}</h1>
          <p className="content-hero__subtitle">{t('blogIndex.heroSubtitle')}</p>
        </div>
      </div>

      <div style={{
        maxWidth: '1220px',
        margin: '0 auto',
        padding: '48px 24px 80px',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {articles.map((article) => {
            const title = t(`blogIndex.card_${article.key}_title`);
            const excerpt = t(`blogIndex.card_${article.key}_excerpt`);
            return (
              <a
                key={article.href}
                href={localePath(article.href)}
                style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={article.image}
                  alt={title}
                  style={cardImageStyle}
                  loading="lazy"
                />
                <div style={cardBodyStyle}>
                  <h2 style={cardTitleStyle}>{title}</h2>
                  <p style={cardExcerptStyle}>{excerpt}</p>
                  <span style={cardLinkStyle}>
                    {t('blogIndex.readGuide')} &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
