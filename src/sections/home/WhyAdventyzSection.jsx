import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Creative decisions begin with the business, audience and objective rather than content for content's sake.",
  },
  {
    number: "02",
    title: "One Creative Direction",
    description:
      "Marketing, branding, content and production are approached as connected parts of the same brand experience.",
  },
  {
    number: "03",
    title: "Built for Modern Brands",
    description:
      "Digital-first creative work designed for businesses competing for attention across today's online platforms.",
  },
];

function WhyAdventyzSection() {
  return (
    <Section className="why-adventyz">
      <SectionHeading
        eyebrow="Why Adventyz"
        title="Creative work with a reason behind it."
        description="A connected approach to strategy, marketing, content and production."
      />

      <div className="why-adventyz__grid">
        {principles.map((principle) => (
          <article
            key={principle.number}
            className="why-adventyz__card"
          >
            <span className="why-adventyz__number">
              {principle.number}
            </span>

            <h3>{principle.title}</h3>

            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default WhyAdventyzSection;