import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

import { projects } from "../data/projects";

import "../styles/work.css";

function Work() {
  return (
    <main className="work-page">
      <Section className="work-page__intro">
        <SectionHeading
          eyebrow="Our Work"
          title="Work that brings ideas to life."
          description="Explore selected work across social media, video production, photography, branding, web development and performance marketing."
        />

        <div className="work-page__filters" aria-label="Project categories">
          <span className="work-page__filter work-page__filter--active">
            All
          </span>

          <span className="work-page__filter">Social Media</span>
          <span className="work-page__filter">Video Production</span>
          <span className="work-page__filter">Photography</span>
          <span className="work-page__filter">Branding</span>
          <span className="work-page__filter">Web</span>
          <span className="work-page__filter">
            Performance Marketing
          </span>
        </div>

        <div className="work-page__grid">
          {projects.map((project) => (
            <article className="work-card" key={project.id}>
              <div className="work-card__media">
                <span className="work-card__media-label">
                  Project Media
                </span>
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

                <div className="work-card__details">
                  <div>
                    <h3>Challenge</h3>
                    <p>{project.challenge}</p>
                  </div>

                  <div>
                    <h3>Approach</h3>
                    <p>{project.strategy}</p>
                  </div>

                  <div>
                    <h3>Execution</h3>
                    <p>{project.execution}</p>
                  </div>

                  <div>
                    <h3>Results</h3>
                    <p>{project.results}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="work-page__cta">
        <SectionHeading
          eyebrow="Start Something New"
          title="Have a project worth building?"
          description="Let's talk about your next idea and explore what we can create together."
          align="center"
        />

        <div className="work-page__cta-action">
          <Button to="/contact">Let's Talk</Button>
        </div>
      </Section>
    </main>
  );
}

export default Work;