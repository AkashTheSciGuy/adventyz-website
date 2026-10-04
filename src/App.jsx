import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RouteChangeHandler from "./components/common/RouteChangeHandler";
import RouteMetadata from "./components/common/RouteMetadata";

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
  return (
    <div className="app">
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;