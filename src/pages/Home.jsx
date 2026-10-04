import HeroSection from "../sections/home/HeroSection";
import IntroSection from "../sections/home/IntroSection";
import ServicesPreviewSection from "../sections/home/ServicesPreviewSection";
import SelectedWorkSection from "../sections/home/SelectedWorkSection";
import WhyAdventyzSection from "../sections/home/WhyAdventyzSection";
import FinalCtaSection from "../sections/home/FinalCtaSection";

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
        <ServicesPreviewSection />
      </Reveal>

      <Reveal>
        <SelectedWorkSection />
      </Reveal>

      <Reveal>
        <WhyAdventyzSection />
      </Reveal>
    </main>
  );
}

export default Home;