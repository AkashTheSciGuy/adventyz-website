import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

function HeroSection() {
  return (
    <section className="hero">
      <Container className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Creative Growth Agency
          </p>

          <h1 className="hero__title">
            We build brands
            <span className="hero__title-accent">
              {" "}
              people notice.
            </span>
          </h1>

          <p className="hero__description">
            Strategy, digital marketing, content creation
            and cinematic production for modern brands
            ready to grow.
          </p>

          <div className="hero__actions">
            <Button to="/contact">
              Book a Consultation
            </Button>

            <Button to="/work" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>

        <div
          className="hero__visual"
          aria-hidden="true"
        >
          <div className="hero__visual-glow" />

          <div className="hero__brand-mark">
            <span className="hero__brand-a">A</span>
            <span>DVENTYZ</span>
          </div>

          <p className="hero__visual-label">
            Strategy • Content • Production
          </p>
        </div>
      </Container>

      <div
        className="hero__scroll-indicator"
        aria-hidden="true"
      >
        <span />
        Scroll
      </div>
    </section>
  );
}

export default HeroSection;