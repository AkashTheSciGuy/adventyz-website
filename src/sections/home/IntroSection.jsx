import Section from "../../components/ui/Section";

function IntroSection() {
  return (
    <Section className="home-intro">
      <div className="home-intro__grid">
        <p className="home-intro__label">
          What we do
        </p>

        <div className="home-intro__content">
          <h2>
            Creative thinking meets
            <span> measurable growth.</span>
          </h2>

          <p>
            Adventyz brings strategy, marketing,
            content creation and professional production
            together under one creative direction.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default IntroSection;