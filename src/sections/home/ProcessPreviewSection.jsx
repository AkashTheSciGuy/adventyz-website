import { motion, useReducedMotion } from "motion/react";

import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import SpotlightCard from "../../components/common/SpotlightCard";

import { processSteps } from "../../data/process";

function ProcessPreviewSection() {
  const reduceMotion = useReducedMotion();
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
        {previewSteps.map((step, index) => (
          <motion.div
            key={step.number}
            className="process-preview__item"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SpotlightCard
              className="process-preview__card hover-lift"
              tilt={true}
              spotlightColor="rgba(233, 149, 26, 0.16)"
            >
              <div className="process-preview__card-head">
                <span className="process-preview__number">
                  {step.number}
                </span>
                <span className="process-preview__pulse-indicator" aria-hidden="true" />
              </div>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </SpotlightCard>
          </motion.div>
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