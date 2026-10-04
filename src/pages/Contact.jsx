import { useState } from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import "../../src/styles/contact.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const services = [
  "Social Media Management",
  "Digital Marketing",
  "Meta Ads",
  "Google Ads",
  "Content Creation",
  "Cinematic Video Production",
  "Photography",
  "Website Development",
  "Branding & Creative Design",
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

    setSubmitted(false);
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

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little about your project.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something worth talking about."
            description="Have a project in mind? Tell us what you're building, what you're trying to solve, and where you want to go next."
          />
        </Container>
      </section>

      <section className="contact-page__content">
        <Container>
          <div className="contact-page__grid">
            <div className="contact-page__details">
              <div className="contact-page__intro">
                <span className="contact-page__label">Let's Talk</span>

                <h2>Have an idea? Let's make it happen.</h2>

                <p>
                  Whether you need a stronger digital presence, better
                  campaigns, compelling content or a complete brand
                  experience, we'd love to hear what you're working on.
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
                    href="https://instagram.com/adventyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @adventyz
                  </a>
                </div>

                <div className="contact-page__info-item">
                  <span>Website</span>
                  <a
                    href="https://adventyz.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    adventyz.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-form__success">
                  <span className="contact-form__success-icon">✓</span>

                  <h2>Thanks for reaching out!</h2>

                  <p>
                    We've received your project details. We'll be in touch
                    soon to talk about what we can create together.
                  </p>

                  <Button
                    type="button"
                    onClick={() => {
                      setFormData(initialForm);
                      setSubmitted(false);
                    }}
                  >
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                      />

                      {errors.name && (
                        <p className="contact-form__error">{errors.name}</p>
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                      />

                      {errors.email && (
                        <p className="contact-form__error">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="company">Company / Brand</label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company or brand"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="service">
                      What can we help with? <span>*</span>
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.service)}
                    >
                      <option value="">Select a service</option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    {errors.service && (
                      <p className="contact-form__error">{errors.service}</p>
                    )}
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message">
                      Tell us about your project <span>*</span>
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
                      <p className="contact-form__error">{errors.message}</p>
                    )}
                  </div>

                  <div className="contact-form__submit">
                    <Button type="submit">Book a Consultation</Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-page__bottom">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Start Something New"
            title="Have a project worth building?"
            description="Let's talk about your next idea and explore what we can create together."
          />

          <div className="contact-page__bottom-action">
            <Button to="/contact">Let's Talk</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Contact;