import { Award, Compass, FileCheck2, Scale, ShieldCheck, Users } from 'lucide-react';
import { CTABanner } from '../components/sections/CTABanner';
import { SEOHead } from '../components/seo/SEOHead';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';

const milestones = [
  ['2018', 'Company operating milestone and early property portfolio coordination.'],
  ['2020', 'Expanded corporate relationships across commercial leasing and investor inquiries.'],
  ['2023', 'Introduced import-export partnership desk for Indonesian commodity opportunities.'],
  ['2026', 'Corporate website initiative prepared for stronger visibility and qualified lead generation.'],
];

const values = [
  { title: 'Trust / Amanah', icon: ShieldCheck, text: 'Clear communication and responsible handling of partner information.' },
  { title: 'Precision', icon: Compass, text: 'Structured inquiry flows, practical due diligence, and disciplined documentation.' },
  { title: 'Long-term Partnership', icon: Users, text: 'Relationships designed for continuity, not one-time transactions.' },
];

export function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Company profile, milestones, vision, mission, values, leadership, and legal standing for PT Astria Nuriman Saputra."
        path="/about"
      />
      <section className="page-hero" aria-labelledby="about-title">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About us</p>
            <h1 id="about-title">A modern Indonesian holding company with practical market reach</h1>
          </div>
          <p>
            PT Astria Nuriman Saputra operates across property and import-export trade with a formal, responsive,
            and accountable client experience. Kami membangun kepercayaan melalui clarity, discipline, and focused
            execution.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container about-profile">
          <SectionHeading
            eyebrow="Company profile"
            title="Built for credible inquiries and durable relationships"
            description="Astria supports property seekers, investors, and trade partners by organizing opportunities into clear commercial next steps."
          />
          <div className="grid grid-3">
            <Card>
              <Scale size={30} aria-hidden="true" />
              <h3>Vision</h3>
              <p>To become a trusted Indonesian partner for property and trade opportunities with regional relevance.</p>
            </Card>
            <Card>
              <Compass size={30} aria-hidden="true" />
              <h3>Mission</h3>
              <p>To connect clients with reliable assets, suppliers, and partners through structured service and transparent inquiry handling.</p>
            </Card>
            <Card>
              <Award size={30} aria-hidden="true" />
              <h3>Positioning</h3>
              <p>Formal-modern corporate desk for high-intent property and B2B import-export conversations.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container timeline-layout">
          <SectionHeading eyebrow="Milestones" title="Company history and growth markers" />
          <ol className="timeline">
            {milestones.map(([year, text]) => (
              <li key={year}>
                <span>{year}</span>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="The operating principles behind every inquiry"
            description="A concise working culture for client-facing property and trade activities."
          />
          <div className="grid grid-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="dark-card">
                  <Icon size={30} aria-hidden="true" />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership and legal standing"
            title="Prepared for client verification"
            description="Leadership names, photographs, and certificate numbers are placeholders until the client provides final data."
          />
          <div className="grid grid-4">
            {['President Director', 'Property Division Lead', 'Trade Partnership Lead', 'Compliance Liaison'].map((role) => (
              <Card key={role} className="leader-card">
                <div className="avatar-placeholder" aria-hidden="true" />
                <h3>{role}</h3>
                <p>Nama Lengkap Placeholder</p>
              </Card>
            ))}
          </div>
          <div className="cert-row" aria-label="Certification placeholders">
            {['SIUP', 'NPWP', 'TDP', 'NIB'].map((cert) => (
              <span key={cert}>
                <FileCheck2 size={18} aria-hidden="true" />
                {cert} verified placeholder
              </span>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
