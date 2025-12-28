import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

import farabiImg from "../assets/speaker/Farabi Hafiz.jpeg";
import jakariaImg from "../assets/speaker/Jakaria Jalal.jpeg";
import mohaiminImg from "../assets/speaker/Mohaimin Patwary.jpeg";
import nabilaImg from "../assets/speaker/Nabila Khalid.jpeg";
import rakaImg from "../assets/speaker/Raka Noshin Nower.jpeg";
import ryusukeImg from "../assets/speaker/Ryusuke Konoike.jpeg";

// Dummy Data for Speakers
const speakers = [
  {
    id: 1,
    name: "Farabi Hafiz",
    role: "News Anchor & Media Presenter",
    bio: "Renowned Bangladeshi news anchor and mentor known for narrative-driven presentation and communication excellence.",
    image: farabiImg,
    socials: {
      facebook: "https://www.facebook.com/FarabiHafizfan",
      linkedin: null, // no LinkedIn
    },
  },
  {
    id: 2,
    name: "Engr. Md. Jakaria Jalal",
    role: "Head of Project, Bashundhara Chemical Industries Ltd.",
    bio: "Energy and industrial sector leader with 18+ years of experience driving innovation and sustainable growth.",
    image: jakariaImg,
    socials: {
      facebook: "https://www.facebook.com/share/1DpbduN3uZ/",
      linkedin: "https://www.linkedin.com/in/jakaria",
    },
  },
  {
    id: 3,
    name: "Mohaimin Patwary",
    role: "Author, Teacher, Finance & Strategy Manager",
    bio: "Economic analyst and bestselling author focused on simplifying finance and economics for mass audiences.",
    image: mohaiminImg,
    socials: {
      facebook: "https://www.facebook.com/share/1AKs214Zon/",
      linkedin: "https://www.linkedin.com/in/mohaimin-patwary-cfa-a8416aab",
    },
  },
  {
    id: 4,
    name: "Nabila Khalid",
    role: "Lead Specialist – Premium Segment & B2B, Grameenphone",
    bio: "Communication and storytelling expert with strong presence in media and corporate initiatives.",
    image: nabilaImg,
    socials: {
      facebook: "https://www.facebook.com/share/1AZhmvuW8P/",
      linkedin: "https://www.linkedin.com/in/nabilakhalid",
    },
  },
  {
    id: 5,
    name: "Raka Noshin Nower",
    role: "Founder & Producer, Studio Yellow Something Ltd.",
    bio: "Bold filmmaker and storyteller blending technology with unconventional narratives.",
    image: rakaImg,
    socials: {
      facebook: "https://www.facebook.com/share/1H8t5p1tLp/",
      linkedin: "https://www.linkedin.com/in/raka-noshin-nower-ba1172321",
    },
  },
  {
    id: 6,
    name: "Ryusuke Konoike",
    role: "CEO & Founder (Web Skill Education & Creator Platform)",
    bio: "Entrepreneur building web-skill education and creator ecosystems with 1,000+ creators across Japan.",
    image: ryusukeImg,
    socials: {
      facebook: "https://www.facebook.com/share/16ccaugRop/",
      linkedin: "https://www.linkedin.com/in/ryusuke-konoike-6490642b3",
    },
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="relative py-24 bg-[#050505] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-red-600"></span>
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              The Visionaries
            </span>
            <span className="w-8 h-[1px] bg-red-600"></span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter"
          >
            OUR <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}>SPEAKERS</span>
          </motion.h3>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  // Full color on mobile (grayscale-0), Grayscale on desktop (md:grayscale)
                  className="w-full h-full object-cover transition-all duration-700 grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Gradient Overlay: Visible on mobile, fades in on hover for desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-100 md:opacity-60 md:group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform transition-transform duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                    <p className="text-red-500 font-bold text-[10px] uppercase tracking-widest mb-2">
                      {speaker.role}
                    </p>
                    <h4 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                      {speaker.name}
                    </h4>
                    
                    {/* Bio: Shows on mobile, expands on hover for desktop */}
                    <div className="grid grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out md:opacity-0 md:group-hover:opacity-100">
                      <p className="overflow-hidden text-sm text-gray-300 font-light italic leading-relaxed">
                        {speaker.bio}
                      </p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-4">
                      {speaker.socials.linkedin && (
                        <a href={speaker.socials.linkedin} className="text-white hover:text-red-500 transition-colors">
                          <FaLinkedinIn size={18} />
                        </a>
                      )}
                      {speaker.socials.facebook && (
                        <a href={speaker.socials.facebook} className="text-white hover:text-red-500 transition-colors">
                          <FaFacebook size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            Get Your Tickets
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;



