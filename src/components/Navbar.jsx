import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "SPEAKERS", href: "#speakers" },
  { name: "VENUE", href: "#venue" },
  { name: "ORGANIZER", href: "#organizers" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation for the main Navbar container
  const containerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  // Animation for the mobile menu links
  const menuListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
  };

  // Function to close menu after clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="absolute top-0 left-0 w-full z-20 py-6 px-4 md:px-10 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between">
        {/* Left Side: Logo/Event Title */}
        <div className="flex flex-col items-start">
          <motion.a
            href="#"
            className="text-white text-xl md:text-2xl font-bold tracking-tight z-30" // Ensure logo is above menu
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          >
            <span className="text-red-600 font-extrabold mr-0.5">TED</span>
            <span className="text-white">x</span>
            UniversityOfBarishal
          </motion.a>
        </div>

        {/* Right Side: Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-white uppercase text-sm font-medium tracking-wider transition duration-300 hover:text-red-500"
              initial={{ y: -10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2 + index * 0.1 },
              }}
            >
              {item.name}
            </motion.a>
          ))}
          {/* Book Ticket Button */}
          <motion.a
            href="#book"
            className="px-6 py-2 bg-red-600 text-white uppercase text-sm font-bold tracking-wider rounded transition duration-300 hover:bg-red-700 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.8, type: "spring", stiffness: 300 },
            }}
          >
            Book Ticket
          </motion.a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden z-30">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl p-2 transition duration-300 hover:text-red-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Animated X or Burger Icon */}
            <svg
              className="w-6 h-6 transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top line */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6" : "M4 6h16"}
              />
              {/* Middle line (fades out) */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h16"
                initial={false}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.1 }}
              />
              {/* Bottom line */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 6L18 18" : "M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 backdrop-blur-sm pt-24 z-20"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Smooth slide-down/up
          >
            <motion.ul
              className="flex flex-col items-center space-y-8"
              variants={menuListVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={menuItemVariants}>
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-white text-3xl uppercase font-bold tracking-wider hover:text-red-600 transition-colors duration-300 block py-2"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={menuItemVariants} className="pt-4">
                <a
                  href="#book"
                  onClick={handleLinkClick}
                  className="px-10 py-3 bg-red-600 text-white uppercase text-lg font-bold tracking-wider rounded transition duration-300 hover:bg-red-700 shadow-xl"
                >
                  Book Ticket
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
