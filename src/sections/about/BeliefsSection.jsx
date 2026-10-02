import Section from "../../components/ui/Section";

const beliefs = [
  {
    title: "Clarity before complexity",
    description:
      "Creative work should communicate clearly instead of adding complexity for its own sake.",
  },
  {
    title: "Consistency matters",
    description:
      "Strong brands feel connected across marketing, content, design and production.",
  },
  {
    title: "Quality with purpose",
    description:
      "High-quality visuals and production should support the message, audience and business objective.",
  },
];

function BeliefsSection() {
  return (
    <Section className="about-beliefs">
      <div className="about-beliefs__header">
        <p className="about-beliefs__eyebrow">
          What We Believe
        </p>

        <h2>
          Good creative should do
          <span> more than look good.</span>
        </h2>
      </div>

      <div className="about-beliefs__list">
        {beliefs.map((belief, index) => (
          <article
            key={belief.title}
            className="about-beliefs__item"
          >
            <span className="about-beliefs__number">
              0{index + 1}
            </span>

            <div>
              <h3>{belief.title}</h3>
              <p>{belief.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default BeliefsSection;