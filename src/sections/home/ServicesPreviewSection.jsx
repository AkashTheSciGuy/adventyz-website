import { services } from "../../data/services";

import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";

function ServicesPreviewSection() {
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
          <article
            key={service.id}
            className="services-preview__card hover-lift"
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
          </article>
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