import Section from "../../components/ui/Section";

function WhoWeAreSection() {
  return (
    <Section className="about-who">
      <div className="about-split">
        <div className="about-split__label">
          <span>01</span>
          <p>Who We Are</p>
        </div>

        <div className="about-split__content">
          <h2>
            Strategy and creativity,
            <span> working together.</span>
          </h2>

          <p>
            Adventyz brings together digital marketing, content creation,
            branding, photography, website development and cinematic video
            production for businesses that want a stronger and more
            professional digital presence.
          </p>

          <p>
            Instead of treating each service as an isolated task, the focus is
            on creating a connected brand experience across strategy, content
            and execution.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default WhoWeAreSection;