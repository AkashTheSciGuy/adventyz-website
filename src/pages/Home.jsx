import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";

function Home() {
  return (
    <main>
      <Section>
        <SectionHeading
          eyebrow="Adventyz"
          title="Creative growth built for modern brands."
          description="Strategy, content, marketing and production designed to help ambitious brands move forward."
        />

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Button to="/contact">
            Book a Consultation
          </Button>

          <Button to="/work" variant="secondary">
            View Our Work
          </Button>
        </div>
      </Section>
    </main>
  );
}

export default Home;