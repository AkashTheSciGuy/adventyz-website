import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingEnquiry from "./components/common/FloatingEnquiry";
import RouteChangeHandler from "./components/common/RouteChangeHandler";
import RouteMetadata from "./components/common/RouteMetadata";
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";
import PageTransition from "./components/common/PageTransition";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Process = lazy(() => import("./pages/Process"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader__indicator" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <CustomCursor />
      <ScrollProgress />
      <RouteChangeHandler />
      <RouteMetadata />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <div
        id="main-content"
        className="route-content"
        tabIndex="-1"
      >
        <Suspense fallback={<PageFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
              <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>

      <Footer />
      <FloatingEnquiry />
    </div>
  );
}

export default App;