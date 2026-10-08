import { Link } from "react-router-dom";

import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { navigationLinks } from "../../data/navigation";

import logo from "../../assets/images/adventyz-symbol-optimized.webp";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">

          {/* Brand and description */}
          <div className="site-footer__intro">
            <Link
              to="/"
              className="site-logo site-logo--footer"
              aria-label="Adventyz home"
            >
              <img
                src={logo}
                alt="Adventyz"
                className="site-logo__image site-logo__image--footer"
              />
            </Link>

            <p className="site-footer__description">
              Strategy, marketing, content and production
              for modern brands.
            </p>

            <Button to="/contact">Let's Talk</Button>
          </div>

          {/* Navigation */}
          <div className="site-footer__column">
            <h2 className="site-footer__heading">
              Navigate
            </h2>

            <nav
              className="site-footer__links"
              aria-label="Footer navigation"
            >
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact and social links */}
          <div className="site-footer__column">
            <h2 className="site-footer__heading">
              Contact
            </h2>

            <div className="site-footer__links site-footer__contact-links">
              <a href="mailto:infoadventyz@gmail.com">
              <MdOutlineEmail size={18} aria-hidden="true" />
                <span>infoadventyz@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/adventyz.in7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} aria-hidden="true" />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adventyz-marketing-agency-1760013bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaLinkedinIn size={18} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="site-footer__bottom">
          <p>
            © {currentYear} Adventyz. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
