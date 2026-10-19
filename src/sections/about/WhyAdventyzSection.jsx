import { motion, useReducedMotion } from "motion/react";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import SpotlightCard from "../../components/common/SpotlightCard";

const reasons = [
  "Strategy and creative execution under one direction",
  "Marketing, content and production working together",
  "A modern, digital-first approach",
  "Creative work built around the brand and audience",
];

function WhyAdventyzSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="about-why">
      <div className="about-why__grid">
        <div className="about-why__content">
          <p className="about-why__eyebrow">
            Why Adventyz
          </p>

          <h2>
            One direction.
            <span className="hero__title-accent--shimmer"> Multiple capabilities.</span>
          </h2>

          <p>
            Adventyz is positioned to connect strategy, marketing,
            content creation and professional production rather than
            treating them as separate parts of the brand.
          </p>
        </div>

        <div className="about-why__reasons">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard
                className="about-why__reason hover-lift"
                spotlightColor="rgba(233, 149, 26, 0.15)"
                tilt={true}
              >
                <span>0{index + 1}</span>
                <p>{reason}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <div>
          <p className="about-cta__eyebrow">
            Let's build something meaningful
          </p>

          <h2>
            Ready to talk about your brand?
          </h2>
        </div>

        <Button to="/contact" className="button--glow">
          Book a Consultation
        </Button>
      </div>
    </Section>
  );
}

export default WhyAdventyzSection;