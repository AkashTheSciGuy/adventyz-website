import { motion, useReducedMotion } from "motion/react";

function TextReveal({
  text,
  children,
  className = "",
  delay = 0,
  stagger = 0.045,
  as: Component = "span",
  inView = true,
}) {
  const reduceMotion = useReducedMotion();

  // If text is provided, split by words
  const content = text || (typeof children === "string" ? children : null);

  if (reduceMotion || !content) {
    return <Component className={className}>{content || children}</Component>;
  }

  const words = content.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "115%",
      opacity: 0,
      rotateZ: 2,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const motionProps = inView
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <motion.span
      className={`text-reveal-container ${className}`.trim()}
      variants={containerVariants}
      {...motionProps}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="text-reveal-word-wrapper">
          <motion.span variants={wordVariants} className="text-reveal-word">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default TextReveal;
