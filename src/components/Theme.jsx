import React from "react";
import { motion } from "framer-motion";

const TedXSection = () => {
  const rippleCount = 4;
  const rippleDuration = 6;

  const themes = [
    {
      year: "2025",
      url: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769838214/1_mqukqt.png",
    },
    {
      year: "2026",
      url: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769838214/2_vomdc8.png",
    },
  ];

  return (
    <div
      id="theme"
      className="relative w-full min-h-screen overflow-hidden bg-neutral-950 flex flex-col items-center justify-center font-sans py-20"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950/80 to-neutral-950 z-0 pointer-events-none" />
      
      {/* Floating Particles */}
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

      {/* --- RIPPLE ANIMATION (Centered) --- */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
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

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col items-center max-w-7xl px-6">
        
        {/* CENTER SPARK */}
        <div className="mb-8">
          <motion.div
            className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_30px_10px_rgba(220,38,38,0.6)]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* IMAGE CONTAINER - Responsive Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="group relative"
            >
              {/* Image with subtle hover lift */}
              <motion.img
                src={theme.url}
                alt={`TEDx Theme ${theme.year}`}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.3)]"
              />
              
              {/* Year Label */}
              <p className="text-neutral-500 text-center mt-4 font-bold tracking-widest text-sm uppercase">
                Theme {theme.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TedXSection;