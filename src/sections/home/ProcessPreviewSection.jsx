import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";

import { processSteps } from "../../data/process";

function ProcessPreviewSection() {
  const previewSteps = processSteps.slice(0, 4);

  return (
    <Section className="process-preview">
      <div className="process-preview__header">
        <SectionHeading
          eyebrow="Our Process"
          title="From idea to impact."
          description="A structured approach that connects strategy, creative execution and growth."
        />

        <Button to="/process" variant="secondary">
          Explore Our Process
        </Button>
      </div>

      <div className="process-preview__grid">
        {previewSteps.map((step) => (
          <article
            key={step.number}
            className="process-preview__card hover-lift"
          >
            <span className="process-preview__number">
              {step.number}
            </span>

            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="process-preview__mobile-action">
        <Button to="/process" variant="secondary">
          Explore Our Process
        </Button>
      </div>
    </Section>
  );
}

export default ProcessPreviewSection;