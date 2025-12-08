import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useLenis from "./hooks/useLenis";

// Components (sections)

import PageLoader from "./components/PageLoader"; // Import the new loader
import About from "./components/About";
import Speakers from "./components/Speakers";
import ThemeSection from "./components/ThemeSection";
import Agenda from "./components/Agenda";
import Sponsors from "./components/Sponsors";
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const TEDx_BLACK = "bg-[#151515]";

function App() {
  // 1. State to control the loading screen visibility
  const [isLoading, setIsLoading] = useState(true);

  // 2. State to track when the loader animation is complete
  const [animationComplete, setAnimationComplete] = useState(false);

  // Initialize smooth scrolling
  useLenis();

  useEffect(() => {
    // Simulate initial loading time (e.g., fetching data, loading assets)
    // We enforce a minimum display time for the entrance animation to be seen.
    const timer = setTimeout(() => {
      // Allow the loader to start its exit animation
      setIsLoading(false);
    }, 2000); // Display loader for a minimum of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handler passed to the loader component
  const handleLoaderExit = () => {
    // This is called AFTER the loader panels have slid off screen
    setAnimationComplete(true);
  };

  return (
    // Only apply overflow-x-hidden to the main container when the loader is gone
    <div
      className={`${TEDx_BLACK} text-white ${
        !animationComplete ? "h-screen overflow-hidden" : "overflow-x-hidden"
      }`}
    >
      {/* AnimatePresence is required to animate components when they are removed (exited) 
        from the React tree (i.e., when isLoading changes to false).
      */}
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader onAnimationComplete={handleLoaderExit} />}
      </AnimatePresence>

      {/* Main Content: Only render the site content after the loader animation has finished */}
      {animationComplete && (
        <main>
          <Hero />
          <About />
          <ThemeSection />
          <Speakers />
          <Agenda />
          <Sponsors />
          <Venue />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
