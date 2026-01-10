import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp, FiCode } from "react-icons/fi";

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
    <footer className="relative bg-black text-white pt-24 pb-8 px-6 overflow-hidden">
      {/* 1. Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Branding */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl font-black tracking-tighter">
                TEDx<span className="text-red-600">UniversityOfBarishal</span>
              </h2>
              <p className="mt-4 text-zinc-400 max-w-md leading-relaxed">
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
                  whileHover={{ scale: 1.1, backgroundColor: "#eb0028" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all shadow-lg shadow-black/20"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-zinc-400 font-medium">
              {["About", "Speakers", "Organizers", "Venue"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-red-600 mr-0 transition-all duration-300 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 mb-6">
              Contact
            </h4>
            <div className="text-zinc-400 space-y-4">
              <p className="leading-relaxed">
                Barishal Shilpakala Academy
                <br />
                <span className="text-zinc-500">Band Rd, Barishal</span>
              </p>
              <a
                href="mailto:tedxbuofficial@gmail.com"
                className="block text-white font-bold hover:text-red-500 transition-colors"
              >
                tedxbuofficial@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col items-center gap-10">
          {/* Eye-Catching Credit Card */}
          <motion.a
            href="https://www.linkedin.com/in/parthadas23/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(220, 38, 38, 0.5)", // Red glow on border
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-zinc-900/30 border border-zinc-800 rounded-full backdrop-blur-md cursor-pointer transition-colors overflow-hidden"
          >
            <div className="flex items-center space-x-3 text-xs tracking-[0.2em] uppercase">
              <FiCode className="text-red-600 animate-pulse" />
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Developed & Coded by
              </span>
              <motion.span
                className="text-white font-black transition-all group-hover:text-red-500"
                style={{ textShadow: "0px 0px 0px rgba(220, 38, 38, 0)" }}
                whileHover={{
                  textShadow: "0px 0px 8px rgba(220, 38, 38, 0.8)",
                }}
              >
                Partha
              </motion.span>
            </div>

            {/* Background Shine Animation */}
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            {/* Hover Glow effect for the card */}
            <div className="absolute inset-0 bg-red-600/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </motion.a>

          {/* Legal and Top Button */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest max-w-xl leading-relaxed text-center md:text-left">
              This independent <span className="text-zinc-400">TEDx</span> event
              is operated under license from{" "}
              <span className="text-zinc-400 font-bold">TED</span>.
              <br />© {new Date().getFullYear()} TEDxUniversityOfBarishal.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-3 px-6 py-2 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-red-600 transition-all group"
            >
              <span>Back to Top</span>
              <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
