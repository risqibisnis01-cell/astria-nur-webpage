import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/site';
import { absoluteUrl, defaultOgImage, type SeoConfig, withOrganizationSchema } from '../../utils/seo';

type SEOHeadProps = SeoConfig;

export function SEOHead({ title, description, path = '/', image = defaultOgImage, jsonLd }: SEOHeadProps) {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = absoluteUrl(path);
  const schemas = withOrganizationSchema(jsonLd);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
