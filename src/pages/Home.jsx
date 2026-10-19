import HeroSection from "../sections/home/HeroSection";
import ServicesPreviewSection from "../sections/home/ServicesPreviewSection";
import SelectedWorkSection from "../sections/home/SelectedWorkSection";
import WhyAdventyzSection from "../sections/home/WhyAdventyzSection";
import ProcessPreviewSection from "../sections/home/ProcessPreviewSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import FinalCtaSection from "../sections/home/FinalCtaSection";

import "../styles/home.css";

function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <ServicesPreviewSection />
      <SelectedWorkSection />
      <WhyAdventyzSection />
      <ProcessPreviewSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
  );
}

export default Home;
