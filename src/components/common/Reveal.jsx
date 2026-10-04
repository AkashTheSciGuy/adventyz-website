import { useEffect, useRef, useState } from "react";

function getInitialVisibility() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
}

function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}) {
  const elementRef = useRef(null);

  const [visible, setVisible] = useState(
    getInitialVisibility,
  );

  useEffect(() => {
    const element = elementRef.current;

    if (!element || visible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, visible]);

  return (
    <div
      ref={elementRef}
      className={`reveal ${
        visible ? "reveal--visible" : ""
      } ${className}`.trim()}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;