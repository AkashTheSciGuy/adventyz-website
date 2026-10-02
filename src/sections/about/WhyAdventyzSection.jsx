import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

const reasons = [
  "Strategy and creative execution under one direction",
  "Marketing, content and production working together",
  "A modern, digital-first approach",
  "Creative work built around the brand and audience",
];

function WhyAdventyzSection() {
  return (
    <Section className="about-why">
      <div className="about-why__grid">
        <div className="about-why__content">
          <p className="about-why__eyebrow">
            Why Adventyz
          </p>

          <h2>
            One direction.
            <span> Multiple capabilities.</span>
          </h2>

          <p>
            Adventyz is positioned to connect strategy, marketing,
            content creation and professional production rather than
            treating them as separate parts of the brand.
          </p>
        </div>

        <div className="about-why__reasons">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className="about-why__reason"
            >
              <span>0{index + 1}</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <div>
          <p className="about-cta__eyebrow">
            Let's build something meaningful
          </p>

          <h2>
            Ready to talk about your brand?
          </h2>
        </div>

        <Button to="/contact">
          Book a Consultation
        </Button>
      </div>
    </Section>
  );
}

export default WhyAdventyzSection;