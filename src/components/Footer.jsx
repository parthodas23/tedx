import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const socialLinks = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/share/1bfEeAZ7ZT/",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/tedxuniversityofbarishal?igsh=MTJiejQ0d3VnaTlkcA==",
    },
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/tedx-university-of-barishal",
    },
  ];

  return (
    <footer className="relative bg-transparent text-white pt-20 pb-10 px-6 overflow-hidden">
      {/* 1. Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Branding */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-4xl font-black tracking-tighter">
                TEDx<span className="text-red-600">UniversityOfBarishal</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
                Bringing "Ideas Worth Spreading" to the southern heart of
                Bangladesh. Join us in a journey of discovery, innovation, and
                change.
              </p>
            </motion.div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: "#eb0028" }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 transition-colors"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-2 border-red-600 pl-3">
              Navigation
            </h4>
            <ul className="space-y-4 text-gray-400">
              {["About", "Speakers", "Organizers", "Venue"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-red-600 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact/Venue */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-2 border-red-600 pl-3">
              Venue
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Barishal Shilpakala Academy
              <br />
              Band Rd, Barishal
            </p>
            <p className="mt-4 text-red-600 font-bold">
              tedxbuofficial@gmail.com
            </p>
          </div>
        </div>

        {/* 2. Middle Large Background Text (Satisfying Visual Element) */}
        <div className="relative h-20 md:h-40 flex items-center justify-center overflow-hidden select-none pointer-events-none">
          <h1 className="text-[12vw] font-black text-zinc-900/30 whitespace-nowrap uppercase tracking-tighter">
            Ideas Worth Spreading
          </h1>
        </div>

        {/* 3. Bottom Legal Section */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="text-xs text-gray-500 max-w-2xl uppercase tracking-widest leading-loose">
            This independent <span className="text-white font-bold">TEDx</span>{" "}
            event is operated under license from{" "}
            <span className="text-white font-bold">TED</span>. ©{" "}
            {new Date().getFullYear()} TEDxUniversityOfBarishal. All Rights
            Reserved.
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <div className="p-2 border border-zinc-800 rounded-full group-hover:border-red-600 transition-colors">
              <FiArrowUp />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
