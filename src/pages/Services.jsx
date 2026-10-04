import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

import { services } from "../data/services";

import "../styles/services.css";

function Services() {
  const categories = [
    "Growth / Performance",
    "Content / Production",
    "Digital / Brand",
  ];

  return (
    <main>
      <Section className="services-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built to move your brand forward."
          description="From growth and performance to content, production, digital experiences and brand design, Adventyz brings the pieces together under one roof."
        />

        <div className="services-page__groups">
          {categories.map((category) => {
            const categoryServices = services.filter(
              (service) => service.category === category
            );

            return (
              <section
                className="services-page__group"
                key={category}
              >
                <h3 className="services-page__category">
                  {category}
                </h3>

                <div className="services-page__grid">
                  {categoryServices.map((service, index) => (
                    <article
                      className="services-page__card"
                      key={service.id}
                    >
                      <span className="services-page__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h4 className="services-page__title">
                        {service.title}
                      </h4>

                      <p className="services-page__description">
                        We create focused strategies and executions around{" "}
                        {service.title.toLowerCase()} to help brands build,
                        communicate and grow.
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <Section className="services-page__cta">
        <SectionHeading
          eyebrow="Let's Work Together"
          title="Have a project in mind?"
          description="Tell us what you're building, what you're trying to solve, and where you want to go next."
          align="center"
        />

        <div className="services-page__cta-action">
          <Button to="/contact">Book a Consultation</Button>
        </div>
      </Section>
    </main>
  );
}

export default Services;