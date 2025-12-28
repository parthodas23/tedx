import React, { useState, useEffect, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import useLenis from "./hooks/useLenis";

// Components that are small / critical

const PageLoader = React.lazy(() => import("./components/PageLoader"));
const Hero = React.lazy(() => import("./components/Hero"));

// Lazy-loaded components (code-split)
const About = React.lazy(() => import("./components/About"));
const Speakers = React.lazy(() => import("./components/Speakers"));
const Venue = React.lazy(() => import("./components/Venue"));
const Organizers = React.lazy(() => import("./components/Organizers"));
const FAQ = React.lazy(() => import("./components/FAQ"));
const Footer = React.lazy(() => import("./components/Footer"));
const PremiumBackground = React.lazy(() =>
  import("./components/PremiumBackground")
);

const TEDx_BLACK = "bg-[#151515]";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderExit = () => {
    setAnimationComplete(true);
  };

  return (
    <div
      className={`${TEDx_BLACK} text-white ${
        !animationComplete ? "h-screen overflow-hidden" : "overflow-x-hidden"
      }`}
    >
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader onAnimationComplete={handleLoaderExit} />}
      </AnimatePresence>

      {animationComplete && (
        <>
          <Suspense fallback={null}>
            <PremiumBackground />

            <main className="relative z-10">
              <Hero />
              <About />
              <Speakers />
              <Venue />
              <Organizers />
              <FAQ />
              <Footer />
            </main>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
