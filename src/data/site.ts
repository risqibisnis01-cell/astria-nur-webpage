export const siteConfig = {
  name: 'PT Astria Nuriman Saputra',
  shortName: 'Astria',
  baseUrl: 'https://www.astrianuriman.co.id',
  tagline: 'Property confidence, global trade reach',
  description:
    'PT Astria Nuriman Saputra is an Indonesian holding company operating in property rent and sale services and import-export trade partnerships.',
  phone: '+62 21 5550 1926',
  email: 'hello@astrianuriman.co.id',
  address: 'Jl. Sudirman Kav. 52-53, Jakarta Selatan, Indonesia',
  hours: 'Senin-Jumat, 09.00-17.00 WIB',
  social: {
    linkedin: 'https://www.linkedin.com/company/astria-nuriman-saputra',
    instagram: 'https://www.instagram.com/astrianuriman',
  },
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Property', href: '/property' },
  { label: 'Import-Export', href: '/import-export' },
  { label: 'Contact', href: '/contact' },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  logo: `${siteConfig.baseUrl}/logo-astria.png`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressCountry: 'ID',
  },
  sameAs: Object.values(siteConfig.social),
};
