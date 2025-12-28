import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

import Navbar from "./Navbar";
import CountdownTimer from "./CountdownTimer";
import BACKGROUND_IMAGE_PATH from "../assets/Logo.png";
const EVENT_DATE = "2026-01-15T10:00:00";
const Hero = () => {
  // --- MAGNETIC BUTTON LOGIC ---
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Only move if mouse is within 100px of the button
    if (Math.abs(distanceX) < 150 && Math.abs(distanceY) < 150) {
      x.set(distanceX * 0.4);
      y.set(distanceY * 0.4);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[800px] bg-[#0A0A0A] overflow-hidden flex flex-col font-sans"
    >
      <Navbar />

      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Film Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* The Logo with a 'Soft Focus' Zoom */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${BACKGROUND_IMAGE_PATH})` }}
        />

        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4">
        {/* --- REVEAL ANIMATION TITLE --- */}
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-red-600 font-bold tracking-[0.6em] text-xs uppercase"
          >
            Ideas Worth Spreading
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-white text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 italic"
          >
            TEDx{" "}
            <span className="not-italic text-red-600 underline decoration-1 underline-offset-8">
              2026
            </span>
          </motion.h1>
        </div>

        {/* --- COUNTDOWN WITH GLASSMORPHISM --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="min-w-sm bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <CountdownTimer eventDate={EVENT_DATE} />
        </motion.div>

        {/* --- INFO CARDS WITH BORDER ANIMATION --- */}
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          {[
            { icon: <FiCalendar />, label: "SAVE THE DATE", val: "JANUARY 31" },
            { icon: <FiMapPin />, label: "VENUE", val: "Barishal Shilpakala Academy"}
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + idx * 0.2 }}
              className="group flex items-center gap-6 px-8 py-4 border-l border-red-600/30 hover:border-red-600 transition-all duration-500"
            >
              <span className="text-red-600 text-2xl group-hover:scale-125 transition-transform duration-500">
                {item.icon}
              </span>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 tracking-[0.3em] font-bold">
                  {item.label}
                </p>
                <p className="text-xl text-white font-light tracking-widest">
                  {item.val}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- THE MAGNETIC MAGNETIC BUTTON --- */}
        <motion.div
          ref={buttonRef}
          style={{ x: mouseXSpring, y: mouseYSpring }}
          className="mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white text-black px-12 py-5 rounded-full font-bold flex items-center gap-4 transition-colors hover:bg-red-600 hover:text-white"
          >
            <span className="tracking-[0.2em] uppercase text-sm">
              Reserve your seat
            </span>
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />

            {/* Animated Ring around button */}
            <span className="absolute inset-0 rounded-full border border-white/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
          </motion.button>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{ left: "50%", translateX: "-50%" }}
      >
        <span className="text-[10px] text-gray-600 tracking-[0.4em] uppercase">
          Discover
        </span>
        <motion.div
          animate={{ height: [20, 40, 20] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] bg-red-600"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
