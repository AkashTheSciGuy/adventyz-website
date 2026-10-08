
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "../../data/navigation";
import logo from "../../assets/images/adventyz-symbol-optimized.webp";

const brandLetters = ["A", "D", "V", "E", "N", "T", "Y", "Z"];

const CYCLE_DURATION = 12;
const EASE = [0.22, 1, 0.36, 1];

function getLetterMotion(index) {
  const start = 3.4 + index * 0.105;
  const peak = start + 0.19;
  const finish = start + 0.56;

  return {
    y: [0, 0, -5, 0, 0],
    opacity: [1, 1, 0.86, 1, 1],
    transition: {
      duration: CYCLE_DURATION,
      times: [
        0,
        start / CYCLE_DURATION,
        peak / CYCLE_DURATION,
        finish / CYCLE_DURATION,
        1,
      ],
      ease: EASE,
      repeat: Infinity,
      repeatType: "loop",
    },
  };
}

const underlineAnimation = {
  scaleX: [0, 0, 1, 1, 0, 0],
  opacity: [0, 0, 1, 1, 0, 0],
  transition: {
    duration: CYCLE_DURATION,
    times: [
      0,
      5.35 / CYCLE_DURATION,
      6.15 / CYCLE_DURATION,
      7.05 / CYCLE_DURATION,
      7.85 / CYCLE_DURATION,
      1,
    ],
    ease: EASE,
    repeat: Infinity,
    repeatType: "loop",
  },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <Container className="site-header__inner">
          <Link
            to="/"
            className="site-logo site-logo--animated site-logo--kinetic"
            aria-label="Adventyz home"
            onClick={closeMenu}
          >
            <span
              className="site-logo__mark"
              aria-hidden="true"
            >
              <img
                src={logo}
                alt=""
                className="site-logo__image"
              />
            </span>

            <span
              className="site-logo__wordmark"
              aria-hidden="true"
            >
              {brandLetters.map((letter, index) => {
                const animation = getLetterMotion(index);

                return (
                  <motion.span
                    key={`${letter}-${index}`}
                    className={`site-logo__letter ${
                      index === 0
                        ? "site-logo__letter--accent"
                        : ""
                    }`}
                    initial={false}
                    animate={
                      reduceMotion
                        ? { y: 0, opacity: 1 }
                        : {
                            y: animation.y,
                            opacity: animation.opacity,
                          }
                    }
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : animation.transition
                    }
                  >
                    {letter}
                  </motion.span>
                );
              })}

              <motion.span
                className="site-logo__kinetic-line"
                aria-hidden="true"
                initial={false}
                animate={
                  reduceMotion
                    ? { scaleX: 0, opacity: 0 }
                    : {
                        scaleX: underlineAnimation.scaleX,
                        opacity: underlineAnimation.opacity,
                      }
                }
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : underlineAnimation.transition
                }
              />
            </span>
          </Link>

          <nav
            className="desktop-nav"
            aria-label="Primary navigation"
          >
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `desktop-nav__link ${
                    isActive ? "desktop-nav__link--active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <Button
              to="/contact"
              className="site-header__cta"
            >
              Let's Talk
            </Button>

            <button
              type="button"
              className={`menu-toggle ${
                menuOpen ? "menu-toggle--open" : ""
              }`}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
      />
    </>
  );
}

export default Header;
