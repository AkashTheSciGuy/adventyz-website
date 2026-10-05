import { useState } from "react";

import Reveal from "../components/common/Reveal";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

import { services } from "../data/services";

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

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.website.trim() &&
      !/^https?:\/\/.+/i.test(formData.website.trim())
    ) {
      newErrors.website =
        "Please include http:// or https:// in the website URL.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please tell us a little about your project.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("idle");
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    if (!endpoint) {
      setSubmitStatus("error");
      setSubmitError(
        "Online form submission is not configured yet. Please email infoadventyz@gmail.com instead.",
      );
      return;
    }

    try {
      setErrors({});
      setSubmitError("");
      setSubmitStatus("loading");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Contact request failed.");
      }

      setSubmitStatus("success");
      setFormData(initialForm);
    } catch {
      setSubmitStatus("error");
      setSubmitError(
        "We couldn't send your enquiry right now. Please try again or email infoadventyz@gmail.com.",
      );
    }
  };

  return (
    <main className="contact-page">
      <Reveal>
        <section className="contact-page__hero">
          <Container>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something worth talking about."
              description="Have a project in mind? Tell us what you're building, what you're trying to solve, and where you want to go next."
            />
          </Container>
        </section>
      </Reveal>

      <section className="contact-page__content">
        <Container>
          <div className="contact-page__grid">
            <Reveal delay={60}>
              <div className="contact-page__details">
                <div className="contact-page__intro">
                  <span className="contact-page__label">
                    Let's Talk
                  </span>

                  <h2>
                    Have an idea? Let's make it happen.
                  </h2>

                  <p>
                    Whether you need a stronger digital presence,
                    better campaigns, compelling content or a
                    complete brand experience, we'd love to hear
                    what you're working on.
                  </p>
                </div>

                <div className="contact-page__info">
                  <div className="contact-page__info-item">
                    <span>Email</span>

                    <a href="mailto:infoadventyz@gmail.com">
                      infoadventyz@gmail.com
                    </a>
                  </div>

                  <div className="contact-page__info-item">
                    <span>Instagram</span>

                    <a
                      href="https://www.instagram.com/adventyz.in7/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @Adventyz.in7
                    </a>
                  </div>

                  <div className="contact-page__info-item">
                    <span>Website</span>

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
            </Reveal>

            <Reveal delay={120}>
              <div className="contact-form-wrapper">
                {submitStatus === "success" ? (
                  <div
                    className="contact-form__success"
                    role="status"
                  >
                    <span className="contact-form__success-icon">
                      ✓
                    </span>

                    <h2>
                      Thanks for reaching out!
                    </h2>

                    <p>
                      Your enquiry was sent successfully. We'll be
                      in touch to discuss your project.
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
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                        />

                        {errors.name && (
                          <p className="contact-form__error">
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
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.email)}
                        />

                        {errors.email && (
                          <p className="contact-form__error">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label htmlFor="phone">
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
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
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company or brand"
                        />
                      </div>
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="website">
                        Website
                      </label>

                      <input
                        id="website"
                        name="website"
                        type="url"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        aria-invalid={Boolean(errors.website)}
                      />

                      {errors.website && (
                        <p className="contact-form__error">
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
                          <p className="contact-form__error">
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
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          <option value="">
                            Select a range
                          </option>

                          {budgetOptions.map((budget) => (
                            <option
                              key={budget}
                              value={budget}
                            >
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
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are you building? What are you trying to solve? Where do you want to go next?"
                        rows="7"
                        aria-invalid={Boolean(errors.message)}
                      />

                      {errors.message && (
                        <p className="contact-form__error">
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

                    <div className="contact-form__submit">
                      <Button
                        type="submit"
                        disabled={
                          submitStatus === "loading"
                        }
                      >
                        {submitStatus === "loading"
                          ? "Sending..."
                          : "Book a Consultation"}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Reveal delay={100}>
        <section className="contact-page__bottom">
          <Container>
            <SectionHeading
              align="center"
              eyebrow="Start Something New"
              title="Have a project worth building?"
              description="Let's talk about your next idea and explore what we can create together."
            />
          </Container>
        </section>
      </Reveal>
    </main>
  );
}

export default Contact;