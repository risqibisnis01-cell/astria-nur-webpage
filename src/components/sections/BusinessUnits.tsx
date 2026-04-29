import { Building2, Ship } from 'lucide-react';
import { Card } from '../ui/Card';
import { ButtonLink } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function BusinessUnits() {
  return (
    <section className="section section--white" aria-labelledby="business-units">
      <div className="container">
        <SectionHeading
          eyebrow="Business units"
          title="Two focused divisions, one accountable corporate desk"
          description="Astria combines local property knowledge with structured import-export partner coordination."
        />
        <div className="grid grid-2 business-grid">
          <Card>
            <Building2 size={34} aria-hidden="true" />
            <h3>Property Rent & Sale</h3>
            <p>
              Curated residential, commercial, and logistics listings supported by responsive inquiry handling and
              practical buyer or tenant guidance.
            </p>
            <ButtonLink to="/property" variant="ghost">Explore Property</ButtonLink>
          </Card>
          <Card>
            <Ship size={34} aria-hidden="true" />
            <h3>Import-Export Trade</h3>
            <p>
              Commodity sourcing, partner screening, and shipment coordination for companies seeking Indonesian trade
              lanes with clear documentation discipline.
            </p>
            <ButtonLink to="/import-export" variant="ghost">Explore Trade</ButtonLink>
          </Card>
        </div>
      </div>
    </section>
  );
}
