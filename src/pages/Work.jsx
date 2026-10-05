import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

import { projects } from "../data/projects";

import "../styles/work.css";

const categories = [
  "Social Media",
  "Video Production",
  "Photography",
  "Branding",
  "Web",
  "Performance Marketing",
];

function Work() {
  const verifiedProjects = projects.filter(
    (project) => project.verified === true,
  );

  return (
    <main className="work-page">
      <Section className="work-page__intro">
        <SectionHeading
          eyebrow="Our Work"
          title="Work that brings ideas to life."
          description="Our portfolio spans social media, production, photography, branding, web and performance marketing."
        />

        {verifiedProjects.length > 0 ? (
          <>
            <div
              className="work-page__filters"
              aria-label="Project categories"
            >
              <span className="work-page__filter work-page__filter--active">
                All
              </span>

              {categories.map((category) => (
                <span
                  key={category}
                  className="work-page__filter"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="work-page__grid">
              {verifiedProjects.map((project) => (
                <article
                  className="work-card"
                  key={project.id}
                >
                  <div className="work-card__media">
                    {project.coverMedia?.src ? (
                      <img
                        src={project.coverMedia.src}
                        alt={
                          project.coverMedia.alt ||
                          `${project.title} project`
                        }
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="work-card__media-label">
                        Media coming soon
                      </span>
                    )}
                  </div>

                  <div className="work-card__content">
                    <div className="work-card__meta">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <p className="work-card__client">
                      {project.client}
                    </p>

                    <h2 className="work-card__title">
                      {project.title}
                    </h2>

                    <p className="work-card__industry">
                      {project.industry}
                    </p>

                    <div className="work-card__services">
                      {project.services.map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="work-page__empty">
            <span className="work-page__empty-label">
              Portfolio in progress
            </span>

            <h2>
              Selected client work is being prepared.
            </h2>

            <p>
              Verified project details, case studies and media will
              appear here once they are approved for publication.
            </p>

            <div className="work-page__capabilities">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section className="work-page__cta">
        <SectionHeading
          eyebrow="Start a Project"
          title="Have something worth creating?"
          description="Tell us what you're building and where you want to take it."
          align="center"
        />

        <div className="work-page__cta-action">
          <Button to="/contact">
            Book a Consultation
          </Button>
        </div>
      </Section>
    </main>
  );
}

export default Work;