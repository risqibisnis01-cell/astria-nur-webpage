import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { navItems, siteConfig } from '../../data/site';

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/" aria-label={`${siteConfig.name} home`}>
            <img className="brand-logo" src="/logo-astria.png" alt="" aria-hidden="true" loading="lazy" />
            <span>
              <strong>{siteConfig.shortName}</strong>
              <small>Nuriman Saputra</small>
            </span>
          </Link>
          <p>
            Indonesian holding company for property rent and sale services plus import-export trade partnerships.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          <h2>Navigation</h2>
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <address className="footer-contact">
          <h2>Contact</h2>
          <span>
            <MapPin size={18} aria-hidden="true" />
            {siteConfig.address}
          </span>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
            <Phone size={18} aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={18} aria-hidden="true" />
            {siteConfig.email}
          </a>
        </address>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span>SIUP, NPWP, TDP placeholders for client verification.</span>
      </div>
    </footer>
  );
}
