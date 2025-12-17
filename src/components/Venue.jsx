import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiNavigation, FiClock } from "react-icons/fi";

const Venue = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.472851493282!2d90.34759607593638!3d22.636166530669282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553763878b307f%3A0xc47671761e3d6448!2sUniversity%20of%20Barishal!5e0!3m2!1sen!2sbd!4v1715800000000!5m2!1sen!2sbd";

  return (
    <section id="venue" className="py-24 bg-transparent text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Location
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black italic uppercase"
          >
            The Venue
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Information Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 z-10"
          >
            <div className="relative p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full group-hover:bg-red-600/20 transition-all duration-700"></div>

              <div className="relative space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <FiMapPin className="text-red-600 text-2xl" />
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Address</span>
                  </div>
                  <h4 className="text-2xl font-bold leading-tight">
                    Main Auditorium,<br />
                    University of Barishal
                  </h4>
                  <p className="text-zinc-500 mt-2">
                    Barishal-Patuakhali Highway, Barishal 8200, Bangladesh.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <FiClock className="text-red-600" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Time</span>
                    </div>
                    <p className="text-sm font-semibold">09:00 AM - 05:00 PM</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <FiNavigation className="text-red-600" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Capacity</span>
                    </div>
                    <p className="text-sm font-semibold">500+ Attendees</p>
                  </div>
                </div>

                <motion.a
                  href="https://maps.app.goo.gl/YourActualLink" 
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-600/20"
                >
                  <FiNavigation className="mr-2" /> GET DIRECTIONS
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Interactive Map Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 h-[400px] md:h-[550px] relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group transition-all duration-700"
          >
            {/* The Map iframe */}
            <iframe
              title="Venue Map"
              src={mapSrc}
              // EXPLANATION: 
              // 1. Full color by default on mobile.
              // 2. md:grayscale md:invert etc. makes it dark only on Desktop.
              // 3. group-hover:grayscale-0 etc. restores color on hover.
              className="w-full h-full transition-all duration-700 
                         md:grayscale md:invert-[0.9] md:contrast-[1.2] md:opacity-50
                         group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 group-hover:opacity-100"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Hint for users */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 z-20 pointer-events-none group-hover:opacity-0 transition-opacity">
              Hover to Reveal Colors
            </div>

            {/* Decorative Inner Border */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-3xl z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;