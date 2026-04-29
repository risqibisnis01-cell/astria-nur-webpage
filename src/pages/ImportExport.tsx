import { Globe2, Handshake, MapPinned } from 'lucide-react';
import { CTABanner } from '../components/sections/CTABanner';
import { SEOHead } from '../components/seo/SEOHead';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { commodities, processSteps, tradeStrengths } from '../data/commodities';

export function ImportExport() {
  return (
    <>
      <SEOHead
        title="Import-Export Division"
        description="Import-export commodity, sourcing, documentation, and trade partner coordination by PT Astria Nuriman Saputra."
        path="/import-export"
      />
      <section className="page-hero" aria-labelledby="trade-title">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Import-export division</p>
            <h1 id="trade-title">Indonesian trade coordination for serious B2B partners</h1>
          </div>
          <p>
            Astria supports partner discovery, sourcing validation, documentation readiness, and shipment coordination
            for selected Indonesian commodity and manufactured goods opportunities.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container trade-overview">
          <SectionHeading
            eyebrow="Company strengths"
            title="Clear commercial discipline from inquiry to delivery support"
            description="The division is designed for companies that need a responsive Indonesian desk with practical supplier and documentation coordination."
          />
          <div className="grid grid-3">
            {tradeStrengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <Card key={strength.label}>
                  <Icon size={30} aria-hidden="true" />
                  <h2>{strength.label}</h2>
                  <p>Structured partner handling with milestone visibility and follow-up cadence.</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Commodities"
            title="Product categories and coordination support"
            description="Representative categories for development; final product coverage depends on supplier validation and client direction."
          />
          <div className="grid grid-4">
            {commodities.map((commodity) => {
              const Icon = commodity.icon;
              return (
                <Card key={commodity.title} className="commodity-card">
                  <Icon size={32} aria-hidden="true" />
                  <span>{commodity.titleId}</span>
                  <h2>{commodity.title}</h2>
                  <p>{commodity.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container process-layout">
          <SectionHeading
            eyebrow="Trade process"
            title="A disciplined pathway for partner conversations"
            description="Each stage keeps responsibilities visible so both buyer-side and supplier-side teams can make informed decisions."
          />
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
        <div className="container partner-map">
          <SectionHeading
            eyebrow="Partner network"
            title="Placeholder partner lanes and countries served"
            description="Final country coverage and partner logos should be replaced with verified data before public launch."
          />
          <div className="grid grid-3">
            {[
              ['Indonesia', 'Origin market and supplier coordination'],
              ['Singapore', 'Regional buyer and logistics conversations'],
              ['Malaysia', 'Cross-border commodity partner lane'],
            ].map(([country, detail]) => (
              <article className="country-card" key={country}>
                <MapPinned size={28} aria-hidden="true" />
                <h2>{country}</h2>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="partner-logos" aria-label="Partner logo placeholders">
            {[Globe2, Handshake, MapPinned].map((Icon, index) => (
              <span key={index}>
                <Icon size={22} aria-hidden="true" />
                Partner logo placeholder
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Discuss a commodity lane or B2B partnership"
        description="Start with a clear trade inquiry so the Astria desk can route supplier, documentation, and logistics questions properly."
        buttonLabel="Become a Partner"
        to="/contact?subject=Trade%20Inquiry"
      />
    </>
  );
}
