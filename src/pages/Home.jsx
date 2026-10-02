import HeroSection from "../sections/home/HeroSection";
import IntroSection from "../sections/home/IntroSection";
import WhyAdventyzSection from "../sections/home/WhyAdventyzSection";

import "../styles/home.css";

function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <IntroSection />
      <WhyAdventyzSection />
    </main>
  );
}

export default Home;