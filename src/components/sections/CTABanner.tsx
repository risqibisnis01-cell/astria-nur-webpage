import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '../ui/Button';

type CTABannerProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  to?: string;
};

export function CTABanner({
  title = 'Ready to discuss a property or trade opportunity?',
  description = 'Hubungi kami untuk memulai conversation with a focused corporate inquiry desk.',
  buttonLabel = 'Get in Touch',
  to = '/contact',
}: CTABannerProps) {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="container cta-banner">
        <div>
          <p className="eyebrow">Contact Astria</p>
          <h2 id="cta-title">{title}</h2>
          <p>{description}</p>
        </div>
        <ButtonLink to={to} variant="secondary">
          {buttonLabel} <ArrowRight size={18} aria-hidden="true" />
        </ButtonLink>
      </div>
    </section>
  );
}
