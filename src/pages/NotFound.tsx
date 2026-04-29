import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ButtonLink } from '../components/ui/Button';

export function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The requested PT Astria Nuriman Saputra website page could not be found."
        path="/404"
      />
      <section className="page-hero not-found" aria-labelledby="not-found-title">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1 id="not-found-title">Page not found</h1>
          <p>The page may have moved, or the URL may be incorrect.</p>
          <ButtonLink to="/" variant="primary">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Home
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
