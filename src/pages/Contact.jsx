
import { useEffect, useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Reveal from "../components/common/Reveal";
import LightCardImage from "../components/common/LightCardImage";
import { lightCardImages } from "../data/lightCardImages";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SpotlightCard from "../components/common/SpotlightCard";
import { services } from "../data/services";
import { validateContact } from "../utils/contactValidation";
import { buildContactEmail } from "../utils/contactHandoffs";

import "../styles/contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  message: "",
};

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
  "Not sure yet",
];

const nextSteps = [
  {
    number: "01",
    title: "We Connect",
    image: lightCardImages.connect,
    description:
      "We review your inquiry and understand what you're looking to achieve.",
  },
  {
    number: "02",
    title: "We Discuss",
    image: lightCardImages.discuss,
    description:
      "We explore your goals, ideas, and project requirements.",
  },
  {
    number: "03",
    title: "We Plan",
    image: lightCardImages.plan,
    description:
      "We outline a possible approach and the next steps.",
  },
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const successRef = useRef(null);
  const emailDraftRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => () => requestRef.current?.abort(), []);

  useEffect(() => {
    if (submitStatus === "success") successRef.current?.focus({ preventScroll: true });
    if (submitStatus === "email") emailDraftRef.current?.focus({ preventScroll: true });
  }, [submitStatus]);

  const handleChange = (event) => {
    if (submitStatus === "loading") return;
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSubmitStatus("idle");
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (requestRef.current) return;

    const validationErrors = validateContact(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("idle");
      document.getElementById(Object.keys(validationErrors)[0])?.focus();
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    if (!endpoint) {
      setSubmitStatus("email");
      return;
    }

    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      setErrors({});
      setSubmitError("");
      setSubmitStatus("loading");

      const response = await fetch(endpoint, {
        signal: controller.signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.trim()]))),
      });

      if (!response.ok) {
        throw new Error("Contact request failed.");
      }

      setSubmitStatus("success");
      setFormData(initialForm);
    } catch {
      setSubmitStatus("error");
      setSubmitError(
        "We couldn't send your enquiry right now. Please try again or email infoadventyz@gmail.com."
      );
    } finally {
      clearTimeout(timeout);
      requestRef.current = null;
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-page__content">
        <Container>
          <div className="contact-page__grid">
            <div className="contact-page__details">
              <div className="contact-page__intro">
                <span className="contact-page__label">
                  Let's Talk
                </span>

                <h1>Have an idea? Let's make it happen.</h1>

                <p>
                  Whether you need a stronger digital presence,
                  better campaigns, compelling content or a complete
                  brand experience, we'd love to hear what you're
                  working on.
                </p>
              </div>

              <div className="contact-page__info">
                <div className="contact-page__info-item">
                  <span>Email</span>

                  <a href="mailto:infoadventyz@gmail.com">
                    <MdOutlineEmail
                      size={20}
                      aria-hidden="true"
                    />
                    <span>infoadventyz@gmail.com</span>
                  </a>
                </div>

                <div className="contact-page__info-item">
                  <span>Instagram</span>

                  <a
                    href="https://www.instagram.com/adventyz.in7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={20}
                      aria-hidden="true"
                    />
                    <span>@Adventyz.in7</span>
                  </a>
                </div>

                <div className="contact-page__info-item">
                  <span>LinkedIn</span>

                  <a
                    href="https://www.linkedin.com/in/adventyz-marketing-agency-1760013bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      size={20}
                      aria-hidden="true"
                    />
                    <span>Adventyz — LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitStatus === "success" ? (
                <div
                  className="contact-form__success"
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                >
                  <span className="contact-form__success-icon">
                    ✓
                  </span>

                  <h2>Thanks for reaching out!</h2>

                  <p>
                    Your enquiry was sent successfully. We'll be in
                    touch to discuss your project.
                  </p>

                  <Button
                    type="button"
                    onClick={() => {
                      setSubmitStatus("idle");
                      setSubmitError("");
                    }}
                  >
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        disabled={submitStatus === "loading"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                      />

                      {errors.name && (
                        <p id="name-error" className="contact-form__error">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="email">
                        Email <span>*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={150}
                        disabled={submitStatus === "loading"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                      />

                      {errors.email && (
                        <p id="email-error" className="contact-form__error">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="phone">Phone</label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        maxLength={25}
                        disabled={submitStatus === "loading"}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91"
                      />
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="company">
                        Company / Brand
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        maxLength={150}
                        disabled={submitStatus === "loading"}
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company or brand"
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="website">Website</label>

                    <input
                      id="website"
                      name="website"
                      type="text"
                      inputMode="url"
                      maxLength={2048}
                      disabled={submitStatus === "loading"}
                      aria-describedby={errors.website ? "website-error" : undefined}
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="example.com"
                      aria-invalid={Boolean(errors.website)}
                    />

                    {errors.website && (
                      <p id="website-error" className="contact-form__error">
                        {errors.website}
                      </p>
                    )}
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="service">
                        Service Required <span>*</span>
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        disabled={submitStatus === "loading"}
                        aria-describedby={errors.service ? "service-error" : undefined}
                        value={formData.service}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.service)}
                      >
                        <option value="">
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service.id}
                            value={service.title}
                          >
                            {service.title}
                          </option>
                        ))}
                      </select>

                      {errors.service && (
                        <p id="service-error" className="contact-form__error">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="budget">
                        Estimated Budget
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        disabled={submitStatus === "loading"}
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select a range
                        </option>

                        {budgetOptions.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message">
                      Project Details <span>*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      maxLength={2000}
                      disabled={submitStatus === "loading"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you building? What are you trying to solve? Where do you want to go next?"
                      rows="7"
                      aria-invalid={Boolean(errors.message)}
                    />

                    {errors.message && (
                      <p id="message-error" className="contact-form__error">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "error" && (
                    <div
                      className="contact-form__submit-error"
                      role="alert"
                    >
                      {submitError}
                    </div>
                  )}

                  {submitStatus === "email" && (
                    <div className="contact-form__email-draft" role="status">
                      <p>Your enquiry is ready to email. Open the draft below and send it to infoadventyz@gmail.com from your email app.</p>
                      <a ref={emailDraftRef} className="button button--primary" href={buildContactEmail(formData)}>Open email draft</a>
                    </div>
                  )}

                  <div className="contact-form__submit">
                    <Button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="button--glow"
                    >
                      {submitStatus === "loading"
                        ? "Sending..."
                        : "Book a Consultation"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      <Reveal delay={100}>
        <section
          className="contact-page__next"
          aria-labelledby="contact-next-title"
        >
          <Container>
            <Reveal>
              <div className="contact-page__next-header">
                <span className="contact-page__next-eyebrow">
                  The Next Step
                </span>

                <h2 id="contact-next-title">
                  What happens <span>next?</span>
                </h2>

                <p>
                  A simple look at how we move from your first
                  message to a potential collaboration.
                </p>
              </div>
            </Reveal>

            <div className="contact-page__next-grid">
              {nextSteps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 110}
                >
                  <SpotlightCard
                    className="contact-page__next-card hover-lift light-card"
                    spotlightColor="rgba(233, 149, 26, 0.16)"
                    tilt={true}
                  >
                    <LightCardImage image={step.image} />
                    <span className="contact-page__next-number">
                      {step.number}
                    </span>

                    <div className="contact-page__next-card-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>
    </main>
  );
}

export default Contact;
