import HeroSection from "../sections/home/HeroSection";
import IntroSection from "../sections/home/IntroSection";
import ServicesPreviewSection from "../sections/home/ServicesPreviewSection";
import SelectedWorkSection from "../sections/home/SelectedWorkSection";
import WhyAdventyzSection from "../sections/home/WhyAdventyzSection";
import ProcessPreviewSection from "../sections/home/ProcessPreviewSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
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

      <Reveal delay={70}>
        <ServicesPreviewSection />
      </Reveal>

      <Reveal delay={90}>
        <SelectedWorkSection />
      </Reveal>

      <Reveal delay={100}>
        <WhyAdventyzSection />
      </Reveal>

      <Reveal delay={100}>
        <ProcessPreviewSection />
      </Reveal>

      <Reveal delay={100}>
        <TestimonialsSection />
      </Reveal>

      <Reveal delay={80}>
        <FinalCtaSection />
      </Reveal>
    </main>
  );
}

export default Home;