import { motion, useReducedMotion } from "motion/react";
import { projects } from "../../data/projects";

import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import SpotlightCard from "../../components/common/SpotlightCard";

function SelectedWorkSection() {
  const reduceMotion = useReducedMotion();
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
        {featuredProjects.map((project, index) => {
          const hasMedia = Boolean(project.coverMedia?.src);

          return (
            <motion.div
              key={project.id}
              className="selected-work__item"
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard
                className="selected-work__card hover-lift"
                tilt={true}
                spotlightColor="rgba(233, 149, 26, 0.16)"
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

                  <div className="selected-work__media-overlay">
                    <span className="selected-work__media-action">
                      View Project ↗
                    </span>
                  </div>
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
              </SpotlightCard>
            </motion.div>
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