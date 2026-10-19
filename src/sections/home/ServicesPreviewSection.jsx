import { motion, useReducedMotion } from "motion/react";
import { services } from "../../data/services";

import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import SpotlightCard from "../../components/common/SpotlightCard";

function ServicesPreviewSection() {
  const reduceMotion = useReducedMotion();
  const featuredServices = services.slice(0, 6);

  return (
    <Section className="services-preview">
      <div className="services-preview__header">
        <SectionHeading
          eyebrow="What We Do"
          title="Creative and digital capabilities built around growth."
          description="From strategy and performance marketing to content, production and digital experiences."
        />

        <Button to="/services" variant="secondary">
          Explore All Services
        </Button>
      </div>

      <div className="services-preview__grid">
        {featuredServices.map((service, index) => (
          <motion.div
            key={service.id}
            className="services-preview__item"
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SpotlightCard
              className="services-preview__card hover-lift"
              tilt={true}
              spotlightColor="rgba(233, 149, 26, 0.16)"
            >
              <div className="services-preview__card-top">
                <span className="services-preview__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="services-preview__category">
                  {service.category}
                </span>
              </div>

              <h3>{service.title}</h3>

              <div className="services-preview__card-bottom">
                <span className="services-preview__arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <div className="services-preview__mobile-action">
        <Button to="/services" variant="secondary">
          Explore All Services
        </Button>
      </div>
    </Section>
  );
}

export default ServicesPreviewSection;