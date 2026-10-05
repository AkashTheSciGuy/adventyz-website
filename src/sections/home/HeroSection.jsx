import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { services } from "../../data/services";

function HeroSection() {
  const marqueeItems = [...services, ...services];

  return (
    <section className="hero">
      <div
        className="hero__decorations"
        aria-hidden="true"
      >
        <span className="hero__shape hero__shape--one" />
        <span className="hero__shape hero__shape--two" />
        <span className="hero__shape hero__shape--three" />
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
      </div>

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

          <div className="hero__visual-ring hero__visual-ring--one" />
          <div className="hero__visual-ring hero__visual-ring--two" />

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
        className="hero__marquee"
        aria-label="Adventyz services"
      >
        <div className="hero__marquee-track">
          {marqueeItems.map((service, index) => (
            <div
              className="hero__marquee-item"
              key={`${service.id}-${index}`}
              aria-hidden={index >= services.length}
            >
              <span>{service.title}</span>

              <span
                className="hero__marquee-star"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;