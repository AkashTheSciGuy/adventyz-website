import { motion, useReducedMotion } from "motion/react";
import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";

function FinalCtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="final-cta">
      <div className="final-cta__aura" aria-hidden="true" />
      <div className="final-cta__decorations" aria-hidden="true">
        <span className="final-cta__ring final-cta__ring--one" />
        <span className="final-cta__ring final-cta__ring--two" />
      </div>

      <motion.div
        className="final-cta__content"
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="final-cta__eyebrow">
          <span className="final-cta__eyebrow-dot" />
          Ready when you are
        </p>

        <h2>
          Let’s build something
          <span className="final-cta__accent-text"> worth noticing.</span>
        </h2>

        <p className="final-cta__description">
          Tell us what you’re building, where you want to go,
          and what needs to change. We’ll take it from there.
        </p>

        <div className="final-cta__actions">
          <Button to="/contact" className="button--glow">
            Book a Consultation
          </Button>

          <Button to="/work" variant="secondary">
            View Our Work
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}

export default FinalCtaSection;