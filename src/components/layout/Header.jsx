import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";
import MobileMenu from "./MobileMenu";

import { navigationLinks } from "../../data/navigation";

import logo from "../../assets/images/adventyz-symbol-optimized.webp";

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

          {/* Brand */}
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
            </span>

            <span className="site-logo__wordmark">
              ADVENTYZ
            </span>
          </Link>

          {/* Desktop Navigation */}
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
                    isActive
                      ? "desktop-nav__link--active"
                      : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Actions */}
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
                menuOpen
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