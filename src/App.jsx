import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useLenis from "./hooks/useLenis";

// Components
import PageLoader from "./components/PageLoader";
import About from "./components/About";
import Speakers from "./components/Speakers";

import Venue from "./components/Venue";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Organizers from "./components/Organizers";
import FAQ from "./components/FAQ";
// 1. Import your new Background component
import PremiumBackground from "./components/PremiumBackground";

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

      {/* Main Content */}
      {animationComplete && (
        <>
          {/* 2. Place it here: It will render behind all other components */}
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
        </>
      )}
    </div>
  );
}

export default App;
