import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";
import MobileMenu from "./MobileMenu";

import { navigationLinks } from "../../data/navigation";

import logo from "../../assets/images/adventyz-symbol-optimized.webp";

const brandLetters = [
  "A",
  "D",
  "V",
  "E",
  "N",
  "T",
  "Y",
  "Z",
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

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
            className="site-logo site-logo--animated"
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

              <span className="site-logo__particle site-logo__particle--1" />
              <span className="site-logo__particle site-logo__particle--2" />
              <span className="site-logo__particle site-logo__particle--3" />
              <span className="site-logo__particle site-logo__particle--4" />
            </span>

            <span
              className="site-logo__wordmark"
              aria-hidden="true"
            >
              {brandLetters.map((letter, index) => (
                <span
                  className={`site-logo__letter ${index === 0 ? "site-logo__letter--accent" : ""
                    }`}
                  style={{
                    "--letter-index": index,
                    "--reverse-index":
                      brandLetters.length - 1 - index,
                  }}
                  key={`${letter}-${index}`}
                >
                  {letter}
                </span>
              ))}
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
                  `desktop-nav__link ${isActive
                    ? "desktop-nav__link--active"
                    : ""
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
              className={`menu-toggle ${menuOpen
                  ? "menu-toggle--open"
                  : ""
                }`}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                setMenuOpen(
                  (current) => !current,
                )
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