import React from "react";
import { motion } from "framer-motion";
// Added FiTicket for the button icon
import { FiCalendar, FiMapPin, FiTag } from "react-icons/fi";

import Navbar from "./Navbar";
import CountdownTimer from "./CountdownTimer";
import BACKGROUND_IMAGE_PATH from "../assets/Logo.png";

const EVENT_DATE = "2026-01-15T10:00:00";

const Hero = () => {
  const headlineVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.5 },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "50px",
      transition: { duration: 0.8, delay: 0.9 },
    },
  };

  const infoVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 1.2 },
    },
  };

  // Animation for the new Ticket Button
  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1.5, duration: 0.5 },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] bg-black overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE_PATH})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-white text-xl sm:text-2xl md:text-3xl font-medium tracking-widest uppercase mb-12 max-w-4xl"
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          An Independently Organized{" "}
          <span className="text-red-600 font-extrabold">TEDx</span> Event
        </motion.h1>

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

        <CountdownTimer eventDate={EVENT_DATE} />

        {/* Event Details */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-16 mt-16"
          variants={infoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center space-x-3">
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

          <div className="flex items-center space-x-3">
            <FiMapPin className="text-red-600 text-3xl" />
            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-gray-400">
                LOCATION
              </p>
              <p className="text-2xl font-bold text-white">Main Auditorium</p>
            </div>
          </div>
        </motion.div>

        {/* --- NEW BOOK TICKET BUTTON --- */}
        <motion.div
          className="mt-12 sm:mt-16"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-colors duration-300 shadow-lg shadow-red-600/20">
            <FiTag className="text-xl" />
            <span>Book Ticket</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
