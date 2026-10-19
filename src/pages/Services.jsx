import Reveal from "../components/common/Reveal";
import ServiceCardImage from "../components/common/ServiceCardImage";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import SpotlightCard from "../components/common/SpotlightCard";

import { services } from "../data/services";

import "../styles/services.css";

function Services() {
  const categories = [
    "Growth / Performance",
    "Content / Production",
    "Digital / Brand",
  ];

  return (
    <main className="services-page">
      <Reveal>
        <Section className="services-page__intro">
          <SectionHeading
            titleTag="h1"
            eyebrow="What We Do"
            title="Services built to move your brand forward."
            description="From growth and performance to content, production, digital experiences and brand design, Adventyz brings the pieces together under one roof."
          />

          <div className="services-page__groups">
            {categories.map((category, categoryIndex) => {
              const categoryServices = services.filter(
                (service) => service.category === category,
              );

              return (
                <Reveal
                  key={category}
                  delay={categoryIndex * 80}
                >
                  <section className="services-page__group">
                    <h2 className="services-page__category">
                      {category}
                    </h2>

                    <div className="services-page__grid">
                      {categoryServices.map((service, index) => (
                        <Reveal
                          key={service.id}
                          delay={index * 70}
                        >
                          <SpotlightCard
                            className="services-page__card service-card--illustrated hover-lift"
                            spotlightColor="rgba(233, 149, 26, 0.16)"
                            tilt={true}
                          >
                            <ServiceCardImage service={service} />

                            <span className="services-page__number">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="services-page__title">
                              {service.title}
                            </h3>

                            <div className="services-page__content">
                              <div>
                                <span className="services-page__content-label">
                                  The problem
                                </span>

                                <p className="services-page__description">
                                  {service.problem}
                                </p>
                              </div>

                              <div>
                                <span className="services-page__content-label">
                                  Our approach
                                </span>

                                <p className="services-page__description">
                                  {service.approach}
                                </p>
                              </div>

                              <div>
                                <span className="services-page__content-label">
                                  Typical deliverables
                                </span>

                                <ul className="services-page__deliverables">
                                  {service.deliverables.map(
                                    (deliverable) => (
                                      <li key={deliverable}>
                                        {deliverable}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            </div>
                          </SpotlightCard>
                        </Reveal>
                      ))}
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </Section>
      </Reveal>

      <Reveal delay={100}>
        <Section className="services-page__cta">
          <SectionHeading
            eyebrow="Let's Work Together"
            title="Have a project in mind?"
            description="Tell us what you're building, what you're trying to solve, and where you want to go next."
            align="center"
          />

          <div className="services-page__cta-action">
            <Button to="/contact" className="button--glow">
              Book a Consultation
            </Button>
          </div>
        </Section>
      </Reveal>
    </main>
  );
}

export default Services;
