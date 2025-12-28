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
      {/* Ambient Background Glow for Big Screens */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3 mb-4"
          >
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">
              The Visionaries
            </span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter italic"
          >
            OUR <span className="text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>SPEAKERS</span>
          </motion.h3>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] rounded-xl bg-neutral-900">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-all duration-700 grayscale md:grayscale group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Overlay - Glassmorphism for Mobile, Solid for Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 md:translate-y-12 md:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold tracking-tight">
                      {speaker.name}
                    </h4>
                    <p className="text-red-500 font-medium text-sm leading-tight uppercase tracking-wider">
                      {speaker.role}
                    </p>

                    <div className="h-[1px] w-12 bg-red-600 group-hover:w-full transition-all duration-700"></div>

                    <p className="text-sm text-gray-300 line-clamp-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-200 duration-500 font-light italic">
                      {speaker.bio}
                    </p>

                    <div className="flex gap-5 pt-2">
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

              {/* Decorative Corner Frame */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-red-600/30 group-hover:border-red-600 group-hover:w-20 group-hover:h-20 transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="group relative px-12 py-4 bg-transparent overflow-hidden">
            <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative text-red-600 font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
              Get Your Tickets
            </span>
            <div className="absolute inset-0 border border-red-600"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
