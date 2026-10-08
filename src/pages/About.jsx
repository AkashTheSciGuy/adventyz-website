
import AboutHeroSection from "../sections/about/AboutHeroSection";
import WhoWeAreSection from "../sections/about/WhoWeAreSection";
import ApproachSection from "../sections/about/ApproachSection";
import BeliefsSection from "../sections/about/BeliefsSection";
import WhyAdventyzSection from "../sections/about/WhyAdventyzSection";

import Reveal from "../components/common/Reveal";

import "../styles/about.css";

function About() {
  return (
    <main className="about-page">
      <Reveal>
        <AboutHeroSection />
      </Reveal>

      <Reveal>
        <WhoWeAreSection />
      </Reveal>

      <Reveal>
        <ApproachSection />
      </Reveal>

      <Reveal>
        <BeliefsSection />
      </Reveal>

      <Reveal>
        <WhyAdventyzSection />
      </Reveal>
    </main>
  );
}

export default About;
