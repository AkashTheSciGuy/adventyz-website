import { projects } from "../../data/projects";

import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";

function SelectedWorkSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section className="selected-work">
      <div className="selected-work__header">
        <SectionHeading
          eyebrow="Selected Work"
          title="Work designed to move brands forward."
          description="A selection of creative, digital and production work. Verified project material will be added as it becomes available."
        />

        <Button to="/work" variant="secondary">
          View All Work
        </Button>
      </div>

      <div className="selected-work__grid">
        {featuredProjects.map((project) => {
          const hasMedia = Boolean(project.coverMedia?.src);

          return (
            <article
              key={project.id}
              className="selected-work__card"
            >
              <div className="selected-work__media media-reveal">
                {hasMedia ? (
                  <img
                    src={project.coverMedia.src}
                    alt={project.coverMedia.alt || project.title}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="selected-work__placeholder">
                    <span>Project media coming soon</span>

                    <strong>
                      {project.category}
                    </strong>
                  </div>
                )}
              </div>

              <div className="selected-work__content">
                <div>
                  <p className="selected-work__category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>
                </div>

                <span className="selected-work__status">
                  Preview
                </span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="selected-work__mobile-action">
        <Button to="/work" variant="secondary">
          View All Work
        </Button>
      </div>
    </Section>
  );
}

export default SelectedWorkSection;