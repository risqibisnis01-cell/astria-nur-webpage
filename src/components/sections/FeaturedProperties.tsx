import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties } from '../../data/properties';
import { Badge } from '../ui/Badge';
import { SectionHeading } from '../ui/SectionHeading';

export function FeaturedProperties() {
  return (
    <section className="section" aria-labelledby="featured-properties">
      <div className="container">
        <SectionHeading
          eyebrow="Featured properties"
          title="Selected portfolio opportunities"
          description="Representative listings for development. Final pricing, addresses, and availability require client confirmation."
        />
        <div className="grid grid-3 property-grid">
          {properties.slice(0, 3).map((property) => (
            <article className="property-card" key={property.id}>
              <img src={property.image} alt={property.alt} loading="lazy" />
              <div className="property-card-body">
                <div className="property-meta">
                  <Badge>{property.purpose === 'rent' ? 'Rent / Sewa' : 'Sale / Jual'}</Badge>
                  <Badge className="badge--muted">{property.status}</Badge>
                </div>
                <h3>{property.name}</h3>
                <p className="property-location">
                  <MapPin size={17} aria-hidden="true" />
                  {property.location}
                </p>
                <strong>{property.price}</strong>
                <Link to={`/property?listing=${property.id}`} className="text-link">
                  View listing <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
