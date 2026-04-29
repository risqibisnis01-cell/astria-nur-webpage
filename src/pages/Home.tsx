import { BusinessUnits } from '../components/sections/BusinessUnits';
import { CTABanner } from '../components/sections/CTABanner';
import { FeaturedProperties } from '../components/sections/FeaturedProperties';
import { Hero } from '../components/sections/Hero';
import { ImportExportHighlight } from '../components/sections/ImportExportHighlight';
import { StatsCounter } from '../components/sections/StatsCounter';
import { Testimonials } from '../components/sections/Testimonials';
import { SEOHead } from '../components/seo/SEOHead';
import { siteConfig } from '../data/site';

export function Home() {
  return (
    <>
      <SEOHead title="Corporate Property and Trade Partner" description={siteConfig.description} path="/" />
      <Hero />
      <BusinessUnits />
      <StatsCounter />
      <FeaturedProperties />
      <ImportExportHighlight />
      <Testimonials />
      <CTABanner />
    </>
  );
}
