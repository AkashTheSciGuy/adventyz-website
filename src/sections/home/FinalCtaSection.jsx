import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";

function FinalCtaSection() {
  return (
    <Section className="final-cta">
      <div className="final-cta__content">
        <p className="final-cta__eyebrow">
          Ready when you are
        </p>

        <h2>
          Let’s build something
          <span> worth noticing.</span>
        </h2>

        <p className="final-cta__description">
          Tell us what you’re building, where you want to go,
          and what needs to change. We’ll take it from there.
        </p>

        <div className="final-cta__actions">
          <Button to="/contact">
            Book a Consultation
          </Button>

          <Button to="/work" variant="secondary">
            View Our Work
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default FinalCtaSection;