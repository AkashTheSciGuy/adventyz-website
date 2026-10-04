import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://www.adventyz.com";

const metadata = {
  "/": {
    title: "Adventyz — Creative Growth Agency",
    description:
      "Adventyz combines strategy, digital marketing, content creation and professional production for modern brands.",
  },
  "/about": {
    title: "About Adventyz — Creative Growth Agency",
    description:
      "Learn about Adventyz and our approach to strategy, marketing, content creation and professional production.",
  },
  "/services": {
    title: "Services — Adventyz",
    description:
      "Explore Adventyz services across digital marketing, social media, advertising, content, production, photography, web and branding.",
  },
  "/work": {
    title: "Work & Portfolio — Adventyz",
    description:
      "Explore selected Adventyz creative, digital, branding, marketing and production work.",
  },
  "/process": {
    title: "Our Process — Adventyz",
    description:
      "See how Adventyz approaches discovery, strategy, production, launch, optimization and growth.",
  },
  "/contact": {
    title: "Contact Adventyz — Let's Talk",
    description:
      "Contact Adventyz to discuss your marketing, content, branding, production or website project.",
  },
};

function setMeta(name, content, property = false) {
  const selector = property
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page =
      metadata[pathname] ?? {
        title: "Page Not Found — Adventyz",
        description:
          "The requested page could not be found on the Adventyz website.",
      };

    document.title = page.title;

    const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

    setMeta("description", page.description);
    setMeta("og:title", page.title, true);
    setMeta("og:description", page.description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:title", page.title);
    setMeta("twitter:description", page.description);

    let canonical = document.head.querySelector(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

export default RouteMetadata;