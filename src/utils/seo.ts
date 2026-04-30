import { siteConfig, organizationSchema } from '../data/site';

export type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export const defaultOgImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

export function absoluteUrl(path = '/') {
  return `${siteConfig.baseUrl}${path === '/' ? '' : path}`;
}

export function withOrganizationSchema(jsonLd?: SeoConfig['jsonLd']) {
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return [organizationSchema, ...schemas];
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressCountry: 'ID',
  },
  openingHours: 'Mo-Fr 09:00-17:00',
};
