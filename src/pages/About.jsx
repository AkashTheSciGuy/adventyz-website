import AboutHeroSection from "../sections/about/AboutHeroSection";
import WhoWeAreSection from "../sections/about/WhoWeAreSection";
import ApproachSection from "../sections/about/ApproachSection";
import BeliefsSection from "../sections/about/BeliefsSection";
import WhyAdventyzSection from "../sections/about/WhyAdventyzSection";

import "../styles/about.css";

function About() {
  return (
    <main className="about-page">
      <AboutHeroSection />
      <WhoWeAreSection />
      <ApproachSection />
      <BeliefsSection />
      <WhyAdventyzSection />
    </main>
  );
}

export default About;