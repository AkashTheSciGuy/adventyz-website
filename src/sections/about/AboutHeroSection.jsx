import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

function AboutHeroSection() {
  return (
    <section className="about-hero">
      <Container>
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">
            <span className="hero__eyebrow-dot" style={{ display: "inline-block", marginRight: "8px" }} />
            About Adventyz
          </p>

          <h1 className="about-hero__title">
            Creative thinking.
            <span className="hero__title-accent--shimmer"> Built for growth.</span>
          </h1>

          <p className="about-hero__description">
            Adventyz is a creative growth and digital marketing agency
            combining strategy, marketing, content creation and professional
            production under one creative direction.
          </p>

          <div className="about-hero__actions">
            <Button to="/contact" className="button--glow">
              Book a Consultation
            </Button>

            <Button to="/work" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutHeroSection;