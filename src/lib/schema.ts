import { SITE } from '../site';

export type Crumb = { name: string; path: string };
export type Faq = { q: string; a: string };

const abs = (path: string) => new URL(path, SITE.url).href;

export const organization = {
  '@type': 'Organization',
  '@id': `${SITE.url}/#org`,
  name: SITE.company,
  url: SITE.companyUrl,
};

export function mobileApp() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Spark: Chore & Reward Chart',
    operatingSystem: 'iOS',
    applicationCategory: 'LifestyleApplication',
    description:
      'A chore and reward chart app for parents of kids ages 2 to 6. Check off routines, your child earns stars toward a reward.',
    url: SITE.url,
    image: abs('/assets/icon-512.png'),
    publisher: organization,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    ...(SITE.appStoreUrl ? { installUrl: SITE.appStoreUrl } : {}),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function article(opts: { headline: string; description: string; path: string; published: Date; updated?: Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: abs(opts.path),
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    author: organization,
    publisher: { ...organization, logo: { '@type': 'ImageObject', url: abs('/assets/icon-512.png') } },
    image: abs('/assets/icon-512.png'),
  };
}
