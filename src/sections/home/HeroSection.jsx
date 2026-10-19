import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import HeroParticles from "./HeroParticles";
import heroCardImage from "../../assets/images/hero-card-image4.webp";

const marqueeServices = [
  "Digital Marketing",
  "Meta Ads",
  "Google Ads",
  "Content Creation",
  "Cinematic Video Production",
  "Photography",
];

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="hero">
      <div className="hero__decorations" aria-hidden="true">
        <HeroParticles />
        <span className="hero__shape hero__shape--one" />
        <span className="hero__shape hero__shape--two" />
        <span className="hero__shape hero__shape--three" />
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
      </div>

      <Container className="hero__container">
        <motion.div
          className="hero__content"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="hero__eyebrow"
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__eyebrow-badge">
              <span className="hero__eyebrow-dot" />
              Creative Growth Agency
            </span>
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__title-line">We build brands</span>
            <span className="hero__title-accent hero__title-accent--shimmer">
              {" "}people notice.
            </span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategy, digital marketing, content creation and cinematic
            production for modern brands ready to grow.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button to="/contact" className="button--glow">
              Book a Consultation
            </Button>

            <Button to="/work" variant="secondary">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          ref={cardRef}
          className="hero__visual-wrapper"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          {/* Floating animated metric badges */}
          <div className="hero__floating-badge hero__floating-badge--top" aria-hidden="true">
            <span className="hero__floating-badge-icon">✦</span>
            <div>
              <strong>10x Growth</strong>
              <small>Targeted ROI</small>
            </div>
          </div>

          <div className="hero__floating-badge hero__floating-badge--bottom" aria-hidden="true">
            <span className="hero__floating-badge-icon">✦</span>
            <div>
              <strong>4K Cinematic</strong>
              <small>High Production</small>
            </div>
          </div>

          <motion.div
            className="hero__visual"
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotateX: tilt.x,
                    rotateY: tilt.y,
                    transformPerspective: 1000,
                  }
            }
            transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.5 }}
          >
            <div className="hero__visual-glow" />
            <div className="hero__visual-ring hero__visual-ring--one" />
            <div className="hero__visual-ring hero__visual-ring--two" />

            <div className="hero__image-frame">
              <img
                src={heroCardImage}
                alt=""
                className="hero__image"
              />

              <div className="hero__image-overlay" />

              <div className="hero__image-content">
                <div className="hero__brand-mark">
                  <span className="hero__brand-a">A</span>
                  <span>DVENTYZ</span>
                </div>

                <p className="hero__visual-label">
                  Strategy • Content • Production
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="hero__marquee">
        <div className="hero__marquee-track">
          {[...marqueeServices, ...marqueeServices].map(
            (service, index) => (
              <div
                className="hero__marquee-item"
                key={`${service}-${index}`}
              >
                <span>{service}</span>
                <span className="hero__marquee-star">✦</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
