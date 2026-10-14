import Section from "../../components/ui/Section";
import LightCardImage from "../../components/common/LightCardImage";
import { lightCardImages } from "../../data/lightCardImages";
import SectionHeading from "../../components/ui/SectionHeading";

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    image: lightCardImages.discover,
    description:
      "Start with the business, audience, objectives and current position.",
  },
  {
    number: "02",
    title: "Strategize",
    image: lightCardImages.strategize,
    description:
      "Define the creative, marketing and content direction before execution begins.",
  },
  {
    number: "03",
    title: "Create",
    image: lightCardImages.create,
    description:
      "Turn the strategy into content, design, photography, campaigns and production.",
  },
  {
    number: "04",
    title: "Improve",
    image: lightCardImages.optimize,
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
            className="about-approach__card light-card"
          >
            <LightCardImage image={step.image} />
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
