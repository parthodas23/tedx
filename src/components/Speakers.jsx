import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

// Dummy Data for Speakers
const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "AI Ethics Researcher",
    topic: "The Ghost in the Machine",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Architect & Urbanist",
    topic: "Cities for the Next Century",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Social Entrepreneur",
    topic: "Economic Empathy",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Quantum Physicist",
    topic: "Time as a Fluid",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
];

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="py-24 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Meet the Visionaries
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black"
          >
            OUR{" "}
            <span
              className="text-transparent border-b-2 border-red-600"
              style={{ WebkitTextStroke: "1px white" }}
            >
              SPEAKERS
            </span>
          </motion.h3>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden aspect-[3/4] rounded-lg">
                {/* LOGIC: 
                   - 'grayscale-0' by default (Mobile)
                   - 'md:grayscale' on desktop
                   - 'group-hover:grayscale-0' on hover (Desktop)
                */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-all duration-700 grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold leading-tight uppercase">
                      {speaker.name}
                    </h4>
                    <p className="text-red-600 font-semibold text-sm uppercase tracking-tighter mb-2">
                      {speaker.role}
                    </p>

                    <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500 italic">
                      Topic: "{speaker.topic}"
                    </p>

                    <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-500">
                      <FaLinkedinIn className="hover:text-red-600 cursor-pointer transition-colors" />
                      <FaTwitter className="hover:text-red-600 cursor-pointer transition-colors" />
                      <FaGlobe className="hover:text-red-600 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-10 py-3 border border-red-600 text-red-600 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
            Secure Your Seat
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
