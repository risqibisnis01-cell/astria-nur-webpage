import { SectionHeading } from '../ui/SectionHeading';

const stats = [
  { value: '28+', label: 'Properties handled' },
  { value: '6', label: 'Indonesian cities represented' },
  { value: '12', label: 'Trade partner lanes' },
  { value: '100%', label: 'Client-first inquiry handling' },
];

export function StatsCounter() {
  return (
    <section className="section section--navy" aria-labelledby="company-snapshot">
      <div className="container stats-layout">
        <SectionHeading
          eyebrow="About snapshot"
          title="A credible operating desk for property and trade inquiries"
          description="Placeholder figures are included for development and should be replaced with audited company metrics before launch."
        />
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-number">{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
