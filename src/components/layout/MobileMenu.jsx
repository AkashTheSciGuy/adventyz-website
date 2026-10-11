import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import Button from "../ui/Button";
import { navigationLinks } from "../../data/navigation";

function MobileMenu({ open, onClose }) {
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previouslyFocusedElement = document.activeElement;
    const background = [...document.querySelectorAll("#main-content, .site-footer, .floating-enquiry")];
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });

    firstLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      previouslyFocusedElement?.focus();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button type="button" className="mobile-menu__close" onClick={onClose}>
        Close navigation
      </button>
      <nav
        className="mobile-menu__nav"
        aria-label="Mobile navigation"
      >
        {navigationLinks.map((item, index) => (
          <NavLink
            key={item.path}
            ref={index === 0 ? firstLinkRef : undefined}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `mobile-menu__link ${
                isActive ? "mobile-menu__link--active" : ""
              }`
            }
            onClick={onClose}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mobile-menu__footer">
        <Button to="/contact" onClick={onClose}>
          Book a Consultation
        </Button>

        <a
          href="mailto:infoadventyz@gmail.com"
          className="mobile-menu__email"
        >
          infoadventyz@gmail.com
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
