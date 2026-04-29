import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '../../data/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="container nav-shell">
        <Link className="brand" to="/" aria-label={`${siteConfig.name} home`}>
          <img className="brand-logo" src="/logo-astria.png" alt="" aria-hidden="true" />
          <span>
            <strong>{siteConfig.shortName}</strong>
            <small>Nuriman Saputra</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav className={open ? 'primary-nav is-open' : 'primary-nav'} id="primary-navigation" role="navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={item.href === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
