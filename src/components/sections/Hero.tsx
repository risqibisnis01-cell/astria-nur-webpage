import { ArrowRight, Building2, Ship } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ButtonLink } from '../ui/Button';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65 },
      };

  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-media" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div className="hero-copy" {...motionProps}>
          <p className="eyebrow">Indonesian holding company</p>
          <h1 id="home-title">PT Astria Nuriman Saputra</h1>
          <p>
            A formal-modern partner for property rent and sale portfolios plus import-export trade coordination
            across Indonesian and international markets.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/property" variant="primary">
              <Building2 size={18} aria-hidden="true" />
              Our Properties
            </ButtonLink>
            <ButtonLink to="/import-export" variant="secondary">
              <Ship size={18} aria-hidden="true" />
              Trade Partners
            </ButtonLink>
          </div>
        </motion.div>
        <div className="hero-panel" aria-label="Company highlights">
          <div>
            <span className="stat-number">28+</span>
            <span>properties handled</span>
          </div>
          <div>
            <span className="stat-number">12</span>
            <span>trade lanes under review</span>
          </div>
          <div>
            <span className="stat-number">2018</span>
            <span>operating milestone</span>
          </div>
          <ButtonLink to="/contact" variant="ghost">
            Start an inquiry <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
