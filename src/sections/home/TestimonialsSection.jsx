import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";

import { testimonials } from "../../data/testimonials";

function TestimonialsSection() {
  const approvedTestimonials = testimonials.filter(
    (testimonial) => testimonial.approved === true,
  );

  if (approvedTestimonials.length === 0) {
    return null;
  }

  return (
    <Section className="testimonials-preview">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say."
        description="Feedback from brands we've worked with."
      />

      <div className="testimonials-preview__grid">
        {approvedTestimonials.slice(0, 3).map((testimonial) => (
          <article
            key={testimonial.id}
            className="testimonial-card"
          >
            <blockquote>
              “{testimonial.quote}”
            </blockquote>

            <div className="testimonial-card__client">
              <strong>{testimonial.client}</strong>

              <span>
                {[testimonial.role, testimonial.company]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default TestimonialsSection;