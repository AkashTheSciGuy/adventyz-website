import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

import { processSteps } from "../data/process";

import "../styles/process.css";





function Process() {
  return (
    <main className="process-page">
      <section className="process-page__hero">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="From idea to impact."
            description="A clear, collaborative process that turns strategy into meaningful creative work and measurable growth."
          />
        </Container>
      </section>

      <section className="process-page__steps">
        <Container>
          <div className="process-page__grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <div className="process-card__number">{step.number}</div>

                <div className="process-card__content">
                  <h2 className="process-card__title">{step.title}</h2>

                  <p className="process-card__description">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="process-page__cta">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Ready to Begin?"
            title="Let's build something worth talking about."
            description="Have an idea, a challenge or a goal in mind? Let's talk about where you want to go next."
          />

          <div className="process-page__cta-action">
            <Button to="/contact">Book a Consultation</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Process;