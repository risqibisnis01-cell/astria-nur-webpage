import { ArrowRight, Building2, Home, Landmark, MessagesSquare } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { CTABanner } from '../components/sections/CTABanner';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';

type PropertyPurpose = 'rent' | 'sale';

type PropertyPageProps = {
  purpose?: PropertyPurpose;
};

const serviceConfig = {
  all: {
    title: 'Property Services',
    heading: 'Private rent and sell property support',
    description:
      'Astria supports property rent and sale inquiries through a private consultation flow. The website explains services only and does not publish property inventory.',
    ctaMessage: 'I need help with a property rent or sale inquiry.',
  },
  rent: {
    title: 'Rental Property Services',
    heading: 'Support for property rental inquiries',
    description:
      'For tenants, landlords, and businesses seeking rental support, Astria helps clarify requirements, timeline, and next commercial steps.',
    ctaMessage: 'I need help with a property rental inquiry.',
  },
  sale: {
    title: 'Property Sale Services',
    heading: 'Support for selling or buying property',
    description:
      'For owners, buyers, and investors, Astria provides structured inquiry handling for sale-related property conversations.',
    ctaMessage: 'I need help selling or buying a property.',
  },
};

const serviceCards = [
  {
    title: 'Rent Requirement Review',
    text: 'Clarify area, usage, asset type, budget range, timing, and document readiness for rental inquiries.',
    icon: Home,
    path: '/property/rent',
  },
  {
    title: 'Sell Inquiry Handling',
    text: 'Structure buyer or owner conversations before moving into private property review and verification.',
    icon: Landmark,
    path: '/property/sale',
  },
  {
    title: 'Private Follow-up',
    text: 'Route each request to the right desk without publishing sensitive property, owner, or price information.',
    icon: MessagesSquare,
    path: '/contact?subject=Property%20Inquiry',
  },
];

const processSteps = [
  ['Inquiry Intake', 'Receive purpose, asset category, timing, and preferred communication channel.'],
  ['Requirement Clarification', 'Confirm rent or sale goals, location preference, documents, and commercial fit.'],
  ['Private Coordination', 'Move suitable discussions into direct follow-up without public listing exposure.'],
  ['Next-Step Support', 'Prepare practical owner, tenant, buyer, or seller communication for decision making.'],
];

export function PropertyPage({ purpose }: PropertyPageProps) {
  const config = serviceConfig[purpose ?? 'all'];
  const path = purpose ? `/property/${purpose}` : '/property';
  const inquiryParams = new URLSearchParams({
    subject: 'Property Inquiry',
    message: config.ctaMessage,
  });

  return (
    <>
      <SEOHead
        title={config.title}
        description="Property rent and sell service support from PT Astria Nuriman Saputra without public property listings."
        path={path}
      />
      <section className="page-hero" aria-labelledby="property-title">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Property services</p>
            <h1 id="property-title">{config.heading}</h1>
          </div>
          <p>{config.description}</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Service scope"
            title="Property support based on inquiry type"
            description="The company does not show property assets, prices, or availability online. Each request starts with a private intake."
          />
          <div className="grid grid-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title}>
                  <Icon size={32} aria-hidden="true" />
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                  <ButtonLink to={service.path} variant="ghost">
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </ButtonLink>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container value-grid grid grid-3">
          {[
            ['Private by default', 'Property details are handled in direct communication instead of being displayed publicly.'],
            ['Rent or sell routing', 'Each inquiry is directed by purpose, whether sewa, jual, tenant-side, owner-side, or buyer-side.'],
            ['Practical documentation', 'Astria helps organize the information needed before the next commercial conversation.'],
          ].map(([heading, text]) => (
            <article key={heading}>
              <Building2 size={28} aria-hidden="true" />
              <h2>{heading}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--white">
        <div className="container process-layout">
          <SectionHeading
            eyebrow="Process"
            title="How a property inquiry is handled"
            description="A simple service flow keeps sensitive information private while still giving clients a clear next step."
          />
          <ol className="process-list process-list--light">
            {processSteps.map(([title, text], index) => (
              <li key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABanner
        title="Start a private property inquiry"
        description="Share your rent or sell requirement and Astria will route the request without displaying property details publicly."
        buttonLabel="Contact Property Desk"
        to={`/contact?${inquiryParams.toString()}`}
      />
    </>
  );
}
