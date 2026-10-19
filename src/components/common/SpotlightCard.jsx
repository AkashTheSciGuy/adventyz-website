import { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";

function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(233, 149, 26, 0.14)",
  borderColor = "rgba(233, 149, 26, 0.45)",
  tilt = false,
  as: Component = "article",
  ...props
}) {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);

    if (tilt && !reduceMotion) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Gentle 3D tilt max 4 degrees
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      setTiltStyle({ rotateX, rotateY });
    }
  }, [tilt, reduceMotion]);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    if (tilt) {
      setTiltStyle({ rotateX: 0, rotateY: 0 });
    }
  }, [tilt]);

  const MotionComponent = motion[Component] || motion.article;

  return (
    <MotionComponent
      ref={cardRef}
      className={`spotlight-card ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={
        tilt && !reduceMotion
          ? {
              rotateX: tiltStyle.rotateX,
              rotateY: tiltStyle.rotateY,
              transformPerspective: 1000,
            }
          : undefined
      }
      transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.4 }}
      {...props}
    >
      {/* Dynamic ambient radial spotlight glow on hover */}
      <div
        className="spotlight-card__glow"
        aria-hidden="true"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Dynamic border highlight beam */}
      <div
        className="spotlight-card__border"
        aria-hidden="true"
        style={{
          opacity,
          background: `radial-gradient(280px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 70%)`,
        }}
      />

      <div className="spotlight-card__content">
        {children}
      </div>
    </MotionComponent>
  );
}

export default SpotlightCard;
