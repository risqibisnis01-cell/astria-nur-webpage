import { commodities } from '../../data/commodities';
import { ButtonLink } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function ImportExportHighlight() {
  return (
    <section className="section section--white" aria-labelledby="trade-highlight">
      <div className="container trade-highlight">
        <SectionHeading
          eyebrow="Import-export"
          title="Structured pathways for Indonesian commodities and commercial goods"
          description="From source validation to logistics milestones, Astria positions each inquiry for clear commercial next steps."
        >
          <ButtonLink to="/import-export" variant="primary">Become a Partner</ButtonLink>
        </SectionHeading>
        <div className="grid grid-2">
          {commodities.slice(0, 4).map((commodity) => {
            const Icon = commodity.icon;
            return (
              <article className="commodity-mini" key={commodity.title}>
                <Icon size={28} aria-hidden="true" />
                <div>
                  <h3>{commodity.title}</h3>
                  <p>{commodity.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
