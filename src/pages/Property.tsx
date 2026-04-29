import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Building2, MapPin, Ruler, X } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Badge } from '../components/ui/Badge';
import { Button, ButtonLink } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { properties, propertyLocations, propertyTypes, type Property, type PropertyPurpose } from '../data/properties';
import { createRealEstateListingSchema } from '../utils/seo';

type PropertyPageProps = {
  purpose?: PropertyPurpose;
};

function getInitialListing(search: string) {
  return new URLSearchParams(search).get('listing');
}

export function PropertyPage({ purpose }: PropertyPageProps) {
  const location = useLocation();
  const [selectedPurpose, setSelectedPurpose] = useState<PropertyPurpose | 'all'>(purpose ?? 'all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [activeListing, setActiveListing] = useState<string | null>(() => getInitialListing(location.search));

  useEffect(() => {
    setSelectedPurpose(purpose ?? 'all');
  }, [purpose]);

  useEffect(() => {
    const listingId = getInitialListing(location.search);
    if (listingId) setActiveListing(listingId);
  }, [location.search]);

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        return (
          (selectedPurpose === 'all' || property.purpose === selectedPurpose) &&
          (selectedLocation === 'all' || property.location === selectedLocation) &&
          (selectedType === 'all' || property.type === selectedType)
        );
      }),
    [selectedLocation, selectedPurpose, selectedType],
  );

  const listing = properties.find((property) => property.id === activeListing) ?? null;
  const title = purpose === 'rent' ? 'Rental Properties' : purpose === 'sale' ? 'Properties for Sale' : 'Property Division';
  const path = purpose ? `/property/${purpose}` : '/property';

  return (
    <>
      <SEOHead
        title={title}
        description="Explore representative rent and sale property listings handled by PT Astria Nuriman Saputra across Indonesian cities."
        path={path}
        jsonLd={filteredProperties.slice(0, 4).map(createRealEstateListingSchema)}
      />
      <section className="page-hero" aria-labelledby="property-title">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Property division</p>
            <h1 id="property-title">{title}</h1>
          </div>
          <p>
            Residential, commercial, and logistics opportunities for sewa and jual inquiries. Listings use realistic
            placeholder data until client-provided inventory is approved.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Filter portfolio"
            title="Find a suitable property conversation"
            description="Use the filters to narrow the representative portfolio by transaction type, location, and asset category."
          />
          <form className="filter-bar" aria-label="Property filters">
            <label>
              Type
              <select value={selectedPurpose} onChange={(event) => setSelectedPurpose(event.target.value as PropertyPurpose | 'all')}>
                <option value="all">All</option>
                <option value="rent">Rent / Sewa</option>
                <option value="sale">Sale / Jual</option>
              </select>
            </label>
            <label>
              Location
              <select value={selectedLocation} onChange={(event) => setSelectedLocation(event.target.value)}>
                <option value="all">All locations</option>
                {propertyLocations.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              Property Type
              <select value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
                <option value="all">All types</option>
                {propertyTypes.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
          </form>

          <div className="grid grid-3 property-grid" aria-live="polite">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onDetails={() => setActiveListing(property.id)} />
            ))}
          </div>
          {filteredProperties.length === 0 ? (
            <p className="empty-state">No matching listings. Adjust filters or contact Astria for a custom search.</p>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container value-grid grid grid-3">
          {[
            ['Curated shortlist', 'Representative options are organized by use case, budget indicator, and availability.'],
            ['Clear inquiry routing', 'Every request can be directed to property, trade, or general corporate follow-up.'],
            ['Practical due diligence', 'Astria supports next-step review with documentation and owner-side coordination.'],
          ].map(([heading, text]) => (
            <article key={heading}>
              <Building2 size={28} aria-hidden="true" />
              <h2>{heading}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {listing ? <PropertyDetail property={listing} onClose={() => setActiveListing(null)} /> : null}
    </>
  );
}

function PropertyCard({ property, onDetails }: { property: Property; onDetails: () => void }) {
  const inquiryParams = new URLSearchParams({
    subject: 'Property Inquiry',
    message: `I would like more information about ${property.name} in ${property.location}.`,
  });

  return (
    <article className="property-card">
      <img src={property.image} alt={property.alt} loading="lazy" />
      <div className="property-card-body">
        <div className="property-meta">
          <Badge>{property.purpose === 'rent' ? 'Rent / Sewa' : 'Sale / Jual'}</Badge>
          <Badge className="badge--muted">{property.status}</Badge>
        </div>
        <h2>{property.name}</h2>
        <p className="property-location">
          <MapPin size={17} aria-hidden="true" />
          {property.location}
        </p>
        <p>{property.description}</p>
        <div className="property-facts">
          <span><Ruler size={16} aria-hidden="true" /> {property.size}</span>
          <span>{property.type}</span>
        </div>
        <strong>{property.price}</strong>
        <div className="card-actions">
          <Button type="button" variant="ghost" onClick={onDetails}>Details</Button>
          <Link className="text-link" to={`/contact?${inquiryParams.toString()}`}>
            Request Info <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function PropertyDetail({ property, onClose }: { property: Property; onClose: () => void }) {
  const inquiryParams = new URLSearchParams({
    subject: 'Property Inquiry',
    message: `Please contact me about ${property.name} (${property.price}) in ${property.location}.`,
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="property-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close property details" onClick={onClose}>
          <X size={22} aria-hidden="true" />
        </button>
        <img src={property.image} alt={property.alt} />
        <div className="property-modal-body">
          <Badge>{property.status}</Badge>
          <h2 id="property-modal-title">{property.name}</h2>
          <p className="property-location">
            <MapPin size={17} aria-hidden="true" />
            {property.location}
          </p>
          <p>{property.description}</p>
          <ul>
            {property.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <strong>{property.price}</strong>
          <ButtonLink to={`/contact?${inquiryParams.toString()}`} variant="primary">
            Request Info
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
