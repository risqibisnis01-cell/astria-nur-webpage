import { ArrowRight, ClipboardCheck, Home, Landmark } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { Card } from '../ui/Card';
import { SectionHeading } from '../ui/SectionHeading';

export function FeaturedProperties() {
  const rentParams = new URLSearchParams({
    subject: 'Property Inquiry',
    message: 'I need help with a property rental inquiry.',
  });
  const saleParams = new URLSearchParams({
    subject: 'Property Inquiry',
    message: 'I need help selling or buying a property.',
  });

  return (
    <section className="section" aria-labelledby="property-services">
      <div className="container">
        <SectionHeading
          eyebrow="Property services"
          title="Rent and sell property support without public listings"
          description="Astria does not publish property inventory on the website. The team handles qualified sewa and jual inquiries through a private consultation flow."
        />
        <div className="grid grid-3">
          <Card>
            <Home size={32} aria-hidden="true" />
            <h3>Rent Assistance / Sewa</h3>
            <p>
              Support for tenants, landlords, and corporate teams that need a clear rental requirement review and
              private follow-up.
            </p>
            <ButtonLink to={`/contact?${rentParams.toString()}`} variant="ghost">
              Ask About Rent <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </Card>
          <Card>
            <Landmark size={32} aria-hidden="true" />
            <h3>Sell Assistance / Jual</h3>
            <p>
              Inquiry handling for owners and buyers who need a structured property sale conversation without exposing
              public inventory.
            </p>
            <ButtonLink to={`/contact?${saleParams.toString()}`} variant="ghost">
              Ask About Sale <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </Card>
          <Card>
            <ClipboardCheck size={32} aria-hidden="true" />
            <h3>Private Consultation</h3>
            <p>
              Astria routes each property request by purpose, asset type, timeline, and preferred commercial next step.
            </p>
            <ButtonLink to="/property" variant="ghost">
              View Services <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </Card>
        </div>
      </div>
    </section>
  );
}
