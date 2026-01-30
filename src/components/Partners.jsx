import React from "react";
import { motion } from "framer-motion";

const partners = [
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792309/8_absuyb.png',
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792309/6_gf7bam.png',
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792309/3_skwaav.png',
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792309/7_h3gvfp.png',
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792309/2_a04e2d.png',
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792308/5_ijoldw.png',
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792308/4_naowir.png',
  'https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769792308/1_d52aiw.png'
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            Our Network
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter"
          >
            PARTNERS & <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>SPONSORS</span>
          </motion.h2>
        </div>

        {/* --- DESKTOP GRID (Hidden on Mobile) --- */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="h-40 flex items-center justify-center p-8 bg-neutral-900/30 border border-white/5 rounded-2xl transition-all duration-300"
            >
              <img 
                src={logo} 
                alt={`Partner ${index}`} 
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" 
              />
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE MARQUEE (Hidden on Desktop) --- */}
        <div className="md:hidden relative flex overflow-x-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 whitespace-nowrap"
          >
            {/* Double the array for seamless looping */}
            {[...partners, ...partners].map((logo, index) => (
              <div 
                key={index} 
                className="w-40 h-28 bg-neutral-900/40 border border-white/5 rounded-xl flex items-center justify-center p-6 flex-shrink-0"
              >
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className="max-w-full max-h-full object-contain opacity-80" 
                />
              </div>
            ))}
          </motion.div>
          
          {/* Fading Gradients for the edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </div>

        

      </div>
    </section>
  );
};

export default Partners;