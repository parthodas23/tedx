import React from "react";
import { motion } from "framer-motion";

const TedXSection = () => {
  const rippleCount = 4;
  const rippleDuration = 6;

  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  };

  // Animation variants for individual letters
  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const titleText = "Ideas begin ";

  return (
    <div
      id="theme"
      className="relative w-full h-screen overflow-hidden bg-neutral-950 flex flex-col items-center justify-center font-sans"
    >
      {/* --- BACKGROUND LAYERS (Same as your previous logic) --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950/80 to-neutral-950 z-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + "px",
              height: Math.random() * 4 + "px",
            }}
          />
        ))}
      </div>

      {/* --- RIPPLE ANIMATION --- */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {[...Array(rippleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-red-600/30"
            style={{ boxShadow: "0 0 40px rgba(220, 38, 38, 0.1)" }}
            initial={{ width: 0, height: 0, opacity: 0.8, borderWidth: "2px" }}
            animate={{
              width: "150vmax",
              height: "150vmax",
              opacity: 0,
              borderWidth: "0px",
            }}
            transition={{
              duration: rippleDuration,
              repeat: Infinity,
              delay: i * (rippleDuration / rippleCount),
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* --- CENTER SPARK --- */}
      <div className="relative z-10 flex items-center justify-center mb-12">
        <motion.div
          className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_30px_10px_rgba(220,38,38,0.6)]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* --- ENHANCED TYPOGRAPHY LAYER --- */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        {/* Main Heading with Staggered Letters */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 cursor-default"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {/* The word "here" with a special entry and hover effect */}
          <motion.span
            className="text-red-600 inline-block relative group"
            variants={letterVariants}
            whileHover={{
              scale: 1.1,
              rotate: [-1, 1, -1, 0],
              transition: { duration: 0.2 },
            }}
          >
            here
            <motion.span
              className="absolute inset-0 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.span>
        </motion.h1>

        {/* Subtitle with a "Slide & Fade" entry */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
        >
          <p className="text-lg md:text-2xl text-neutral-400 font-light uppercase">
            Future changes{" "}
            <span className="text-white border-b border-red-600/50">
              everywhere
            </span>
          </p>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 text-neutral-600 text-sm flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <span className="uppercase tracking-widest text-[10px] mb-2">
            Discover the vision
          </span>
          <div className="w-[1px] h-16 bg-neutral-800 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-red-600"
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TedXSection;
