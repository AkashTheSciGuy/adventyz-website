import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "../components/common/Reveal";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import SpotlightCard from "../components/common/SpotlightCard";

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
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");

  const verifiedProjects = projects.filter(
    (project) => project.verified === true,
  );

  const filteredProjects =
    activeCategory === "All"
      ? verifiedProjects
      : verifiedProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="work-page">
      <Reveal>
        <Section className="work-page__intro">
          <SectionHeading
            titleTag="h1"
            eyebrow="Our Work"
            title={<>Work that brings ideas <span>to life.</span></>}
            description="Our portfolio spans social media, production, photography, branding, web and performance marketing."
          />

          {verifiedProjects.length > 0 ? (
            <>
              <Reveal delay={60}>
                <div
                  className="work-page__filters"
                  aria-label="Project categories"
                >
                  <button
                    type="button"
                    onClick={() => setActiveCategory("All")}
                    className={`work-page__filter ${
                      activeCategory === "All" ? "work-page__filter--active" : ""
                    }`}
                  >
                    All
                  </button>

                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`work-page__filter ${
                        activeCategory === category ? "work-page__filter--active" : ""
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </Reveal>

              <div className="work-page__grid">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <SpotlightCard
                      className="work-card hover-lift"
                      spotlightColor="rgba(233, 149, 26, 0.16)"
                      tilt={true}
                    >
                      <div className="work-card__media media-reveal">
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
                            <span key={service}>
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <Reveal delay={80}>
              <SpotlightCard
                className="work-page__empty"
                spotlightColor="rgba(233, 149, 26, 0.14)"
                tilt={false}
              >
                <span className="work-page__empty-label">
                  Portfolio in progress
                </span>

                <h2>
                  Selected client work is <span>being prepared.</span>
                </h2>

                <p>
                  Verified project details, case studies and media
                  will appear here once they are approved for
                  publication.
                </p>

                <div className="work-page__capabilities">
                  {categories.map((category, index) => (
                    <motion.span
                      key={category}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="hover-lift"
                    >
                      {category}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          )}
        </Section>
      </Reveal>

      <Reveal delay={100}>
        <Section className="work-page__cta">
          <SectionHeading
            eyebrow="Start a Project"
            title={<>Have something <span>worth creating?</span></>}
            description="Tell us what you're building and where you want to take it."
            align="center"
          />

          <div className="work-page__cta-action">
            <Button to="/contact" className="button--glow">
              Book a Consultation
            </Button>
          </div>
        </Section>
      </Reveal>
    </main>
  );
}

export default Work;
