import { motion, useReducedMotion } from "motion/react";

import Section from "../../components/ui/Section";
import LightCardImage from "../../components/common/LightCardImage";
import { lightCardImages } from "../../data/lightCardImages";
import SectionHeading from "../../components/ui/SectionHeading";
import SpotlightCard from "../../components/common/SpotlightCard";

const principles = [
  {
    number: "01",
    title: "Strategy First",
    image: lightCardImages["strategy-first"],
    description:
      "Creative decisions begin with the business, audience and objective rather than content for content's sake.",
  },
  {
    number: "02",
    title: "One Creative Direction",
    image: lightCardImages["creative-direction"],
    description:
      "Marketing, branding, content and production are approached as connected parts of the same brand experience.",
  },
  {
    number: "03",
    title: "Built for Modern Brands",
    image: lightCardImages["modern-brands"],
    description:
      "Digital-first creative work designed for businesses competing for attention across today's online platforms.",
  },
];

function WhyAdventyzSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="why-adventyz">
      <SectionHeading
        eyebrow="Why Adventyz"
        title={<>Creative work with a <span>reason behind it.</span></>}
        description="A connected approach to strategy, marketing, content and production."
      />

      <div className="why-adventyz__grid">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.number}
            className="why-adventyz__item"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SpotlightCard
              className="why-adventyz__card hover-lift light-card"
              tilt={true}
              spotlightColor="rgba(233, 149, 26, 0.15)"
            >
              <LightCardImage image={principle.image} />
              <div className="why-adventyz__number-wrap">
                <span className="why-adventyz__number">
                  {principle.number}
                </span>
                <span className="why-adventyz__number-badge" aria-hidden="true" />
              </div>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default WhyAdventyzSection;
