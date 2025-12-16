import React from "react";
import { motion } from "framer-motion";

const PageLoader = ({ onAnimationComplete }) => {
  const containerVariants = {
    initial: {},
    exit: {
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    final: {},
  };

  const panelVariants = {
    initial: {
      // Initial state is full visibility
      x: "0%",
      y: "0%",
    },
    // The custom prop 'i' determines the exit direction based on screen size
    exit: (i) => {
      // Logic for EXIT animation:
      // On mobile (default): Panels slide up/down (based on their position in the column)
      // On small screens and up (sm:): Panels slide left/right (based on their position in the row)
      const exitStyles = {
        // Horizontal Exit (sm and up)
        sm: i === 0 ? "-100%" : "100%",
        // Vertical Exit (default/mobile)
        default: i === 0 ? "-100%" : "100%",
      };

      return {
        // Use a media query-like condition inside Framer Motion's custom prop logic
        // to handle the vertical exit on small screens and horizontal on large.
        // Tailwind breakpoints for screens >= 640px are 'sm'. Below that is default.
        // We'll primarily rely on the dynamic layout, but ensure the percentage exit aligns
        // with whether we are splitting by width or height.

        // For mobile (less than sm), we want vertical (Y-axis) exit.
        // The first panel (red, i=0) slides up (-100% Y), the second (black, i=1) slides down (100% Y).
        y: i === 0 ? "-100%" : "100%",
        x: "0%", // Reset X

        transition: {
          duration: 1.0,
          ease: [0.85, 0, 0.15, 1],
        },
      };
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      // 💡 KEY CHANGE: flex-col by default (mobile), sm:flex-row (tablet/desktop)
      className="fixed inset-0 z-[9999] flex flex-col sm:flex-row overflow-hidden pointer-events-none"
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="exit"
      onAnimationComplete={onAnimationComplete}
    >
      {/* 1. Red Panel (Top on mobile, Left on desktop) */}
      <motion.div
        // 💡 KEY CHANGE: On mobile, use full width and half height (h-1/2 w-full).
        // On sm: and up, use half width and full height (sm:w-1/2 sm:h-full).
        className="w-full h-1/2 sm:w-1/2 sm:h-full bg-red-600 relative flex items-center justify-center"
        variants={panelVariants}
        custom={0} // Custom prop to handle exit animation
      >
        {/* TEDx Logo/Text */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter select-none"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          TEDx
        </motion.div>
      </motion.div>

      {/* 2. Black Panel (Bottom on mobile, Right on desktop) */}
      <motion.div
        // 💡 KEY CHANGE: Same responsive dimensions
        className="w-full h-1/2 sm:w-1/2 sm:h-full bg-black relative flex items-center justify-center"
        variants={panelVariants}
        custom={1} // Custom prop to handle exit animation
      >
        {/* Event Suffix */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-widest select-none text-center px-2"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          University of Barishal
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
