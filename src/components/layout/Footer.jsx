import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { navigationLinks } from "../../data/navigation";
import logo from "../../assets/images/adventyz-logo.png";

const currentYear = new Date().getFullYear();

function Footer() {

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
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

          <div className="site-footer__column">
            <h2 className="site-footer__heading">
              Navigate
            </h2>

            <nav
              className="site-footer__links"
              aria-label="Footer navigation"
            >
              {navigationLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">
              Contact
            </h2>

            <div className="site-footer__links">
              <a href="mailto:infoadventyz@gmail.com">
                infoadventyz@gmail.com
              </a>

              <a
                href="https://www.instagram.com/adventyz.in7/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.adventyz.com/"
                target="_blank"
                rel="noreferrer"
              >
                adventyz.com
              </a>
            </div>
          </div>
        </div>

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