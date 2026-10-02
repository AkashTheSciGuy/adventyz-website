import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the business, audience, objectives and current position.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Define the creative, marketing and content direction before execution begins.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Turn the strategy into content, design, photography, campaigns and production.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Review the work, refine execution and build on what is working.",
  },
];

function ApproachSection() {
  return (
    <Section className="about-approach">
      <SectionHeading
        eyebrow="Our Approach"
        title="Start with the reason. Then build the creative."
        description="A clear process keeps strategy, content and execution moving in the same direction."
      />

      <div className="about-approach__grid">
        {approachSteps.map((step) => (
          <article
            key={step.number}
            className="about-approach__card"
          >
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ApproachSection;