import HeroSection from "../sections/home/HeroSection";
import IntroSection from "../sections/home/IntroSection";
import WhyAdventyzSection from "../sections/home/WhyAdventyzSection";

import Reveal from "../components/common/Reveal";

import "../styles/home.css";

function Home() {
  return (
    <main className="home-page">
      <HeroSection />

      <Reveal>
        <IntroSection />
      </Reveal>

      <Reveal>
        <WhyAdventyzSection />
      </Reveal>
    </main>
  );
}

export default Home;