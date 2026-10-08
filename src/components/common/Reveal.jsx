
import { motion, useReducedMotion } from "motion/react";

function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 48,
              scale: 0.985,
              filter: "blur(6px)",
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
