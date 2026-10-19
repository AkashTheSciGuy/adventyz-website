import { motion, useReducedMotion } from "motion/react";
import Section from "../../components/ui/Section";
import SpotlightCard from "../../components/common/SpotlightCard";

const beliefs = [
  {
    title: "Clarity before complexity",
    description:
      "Creative work should communicate clearly instead of adding complexity for its own sake.",
  },
  {
    title: "Consistency matters",
    description:
      "Strong brands feel connected across marketing, content, design and production.",
  },
  {
    title: "Quality with purpose",
    description:
      "High-quality visuals and production should support the message, audience and business objective.",
  },
];

function BeliefsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="about-beliefs">
      <div className="about-beliefs__header">
        <p className="about-beliefs__eyebrow">
          What We Believe
        </p>

        <h2>
          Good creative should do
          <span className="hero__title-accent--shimmer"> more than look good.</span>
        </h2>
      </div>

      <div className="about-beliefs__list">
        {beliefs.map((belief, index) => (
          <motion.div
            key={belief.title}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SpotlightCard
              className="about-beliefs__item hover-lift"
              spotlightColor="rgba(233, 149, 26, 0.16)"
              tilt={true}
            >
              <span className="about-beliefs__number">
                0{index + 1}
              </span>

              <div>
                <h3>{belief.title}</h3>
                <p>{belief.description}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default BeliefsSection;