import React from "react";
import { motion } from "framer-motion";
// 💡 Import the icons we need from react-icons (Feather set is clean and modern)
import { FiCalendar, FiMapPin } from "react-icons/fi";

import Navbar from "./Navbar";
import CountdownTimer from "./CountdownTimer";

// Corrected Image Import: Using 12.png as per your file structure,
// and assuming it's in the 'src/assets' folder.
import BACKGROUND_IMAGE_PATH from "../assets/12.png";

// Define the new event date
const EVENT_DATE = "2026-01-15T10:00:00"; // January 15, 2026 at 10:00 AM

const Hero = () => {
  // Animation for the main headline
  const headlineVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  // Animation for the red line separator
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "50px",
      transition: { duration: 0.8, delay: 0.9 },
    },
  };

  // Animation for the date and location info
  const infoVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 1.2,
      },
    },
  };

  return (
    // Main container with full height and background set to pure black
    <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Background Image Overlay (University Entrance) */}
      <div className="absolute inset-0 z-0">
        {/* Styled Building Image */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-40" // Subtle opacity
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE_PATH})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom", // Pins image to the bottom
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Dark Gradient Overlay (Essential for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>

      {/* 3. Hero Content (Ensure content is above the background, z-index 10) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Headline */}
        <motion.h1
          className="text-white text-xl sm:text-2xl md:text-3xl font-medium tracking-widest uppercase mb-12 max-w-4xl"
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          An Independently Organized{" "}
          <span className="text-red-600 font-extrabold">TEDx</span> Event
        </motion.h1>

        {/* Separator and Timer Label */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            className="h-0.5 bg-red-600 mb-6"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>

          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
          >
            Event Starts In
          </motion.p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer eventDate={EVENT_DATE} />

        {/* Event Details (Date & Location) */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-16 mt-16"
          variants={infoVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Date */}
          <div className="flex items-center space-x-3">
            {/* 💡 Replaced emoji with FiCalendar icon */}
            <FiCalendar className="text-red-600 text-3xl" />

            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-gray-400">
                DATE
              </p>

              <p className="text-2xl font-bold text-white">
                15<sup className="text-lg">th</sup> January 2026
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-3">
            {/* 💡 Replaced emoji with FiMapPin icon */}
            <FiMapPin className="text-red-600 text-3xl" />

            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-gray-400">
                LOCATION
              </p>

              <p className="text-2xl font-bold text-white">Main Auditorium</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
