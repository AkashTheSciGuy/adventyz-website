import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, transformOrigin: "0% 50%" }}
      />
    </div>
  );
}

export default ScrollProgress;
