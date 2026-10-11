import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineEmail, MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "../../data/services";
import "../../styles/floating-enquiry.css";

const whatsappNumber = "918105579097";
const initialDetails = { name: "", email: "", phone: "", service: "", message: "" };

function FloatingEnquiry() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(initialDetails);

  useEffect(() => {
    const updateVisibility = () => {
      if (pathname === "/") {
        const hero = document.querySelector(".home-page .hero");
        setVisible(Boolean(hero && hero.getBoundingClientRect().bottom <= 0));
      } else {
        setVisible(window.scrollY > 300);
      }
    };

    setVisible(false);
    setOpen(false);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    // Home is lazy-loaded; recheck once the hero enters the DOM.
    const observer = new MutationObserver(updateVisibility);
    if (pathname === "/") observer.observe(document.getElementById("main-content") || document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  if (!visible || pathname === "/contact") return null;

  const message = [
    "Hello Adventyz, I'd like to enquire about your services.",
    details.name.trim() && `Name: ${details.name.trim()}`,
    details.email.trim() && `Email: ${details.email.trim()}`,
    details.phone.trim() && `Phone: ${details.phone.trim()}`,
    details.service && `Service: ${details.service}`,
    details.message.trim() && `Project: ${details.message.trim()}`,
  ].filter(Boolean).join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const sendEnquiry = (event) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="floating-enquiry">
      {open && (
        <section className="floating-enquiry__panel" aria-label="Quick enquiry form" id="floating-enquiry-panel">
          <div className="floating-enquiry__heading">
            <div>
              <span className="floating-enquiry__eyebrow">LET'S TALK</span>
              <h2>Tell us about your project</h2>
              <p>Fill in your details and connect with us on WhatsApp.</p>
            </div>
            <button type="button" className="floating-enquiry__close" onClick={() => setOpen(false)} aria-label="Close enquiry form">
              <MdClose size={22} />
            </button>
          </div>
          <form className="floating-enquiry__form" onSubmit={sendEnquiry}>
            <label htmlFor="quick-name">Name *</label>
            <input id="quick-name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />

            <label htmlFor="quick-email">Email *</label>
            <input id="quick-email" name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@example.com" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />

            <label htmlFor="quick-phone">Phone number</label>
            <input id="quick-phone" name="phone" type="tel" autoComplete="tel" maxLength={25} placeholder="+91" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} />

            <label htmlFor="quick-service">Service you're interested in</label>
            <select id="quick-service" name="service" value={details.service} onChange={(e) => setDetails({ ...details, service: e.target.value })}>
              <option value="">Select a service</option>
              {services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}
            </select>

            <label htmlFor="quick-message">Project details *</label>
            <textarea id="quick-message" name="message" required maxLength={2000} rows={3} placeholder="Briefly tell us what you need..." value={details.message} onChange={(e) => setDetails({ ...details, message: e.target.value })} />

            <button type="submit" className="floating-enquiry__send">
              <FaWhatsapp size={20} aria-hidden="true" />
              Send enquiry on WhatsApp
            </button>
            <p className="floating-enquiry__note">Your details are shared only when you send the WhatsApp message.</p>
          </form>
          <a className="floating-enquiry__email" href="mailto:infoadventyz@gmail.com">
            <MdOutlineEmail size={18} aria-hidden="true" /> Prefer email? Contact us
          </a>
        </section>
      )}

      <button type="button" className="floating-enquiry__trigger" aria-expanded={open} aria-controls="floating-enquiry-panel" onClick={() => setOpen((current) => !current)}>
        <MdOutlineEmail size={21} aria-hidden="true" />
        <span>{open ? "Close enquiry" : "Enquire now"}</span>
      </button>
    </div>
  );
}

export default FloatingEnquiry;
