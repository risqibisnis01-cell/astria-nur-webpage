import { Quote } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const testimonials = [
  {
    quote:
      'Astria gave our leasing search a clear shortlist and practical comparison of location, fit-out, and timeline.',
    name: 'Rendra Prakoso',
    role: 'Operations Director, Jakarta',
  },
  {
    quote:
      'The trade desk helped us structure supplier conversations with better documentation discipline from the first call.',
    name: 'Maya Tan',
    role: 'Regional Buyer, Singapore',
  },
  {
    quote:
      'Their team communicates with a calm corporate cadence, which matters when property and investment decisions overlap.',
    name: 'Dewi Anggraini',
    role: 'Private Investor',
  },
];

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What partners expect from the Astria desk"
          description="Sample testimonials for development; final quotes require client approval."
        />
        <div className="grid grid-3">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <Quote size={28} aria-hidden="true" />
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
