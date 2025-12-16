import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-black text-white px-6 md:px-12 lg:px-24"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-2">
            The Mission
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold italic">
            IDEAS WORTH SPREADING
          </h3>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Local Context */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-2xl font-bold border-l-4 border-red-600 pl-4">
              TEDxUniversityOfBarishal
            </h4>
            <p className="text-gray-400 leading-relaxed text-lg">
              University of Barishal is proud to host its premier TEDx event,
              bringing together the brightest minds of the southern region of
              Bangladesh. Our mission is to provide a platform where local
              innovations meet global standards.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We aim to spark deep discussions and connections through
              thought-provoking talks that challenge our community to think
              beyond the horizon. From technology to cultural heritage, we cover
              it all.
            </p>
          </motion.div>

          {/* Right Side: Global Context */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-2xl font-bold border-l-4 border-white pl-4">
              What is TED & TEDx?
            </h4>
            <div className="space-y-4">
              <div>
                <span className="text-red-600 font-bold">TED</span>
                <p className="text-gray-400 text-sm mt-1">
                  TED is a nonprofit organization devoted to Ideas Worth
                  Spreading, usually in the form of short, powerful talks
                  delivered by today’s leading thinkers and doers.
                </p>
              </div>
              <div className="pt-4">
                <span className="text-red-600 font-bold">TEDx</span>
                <p className="text-gray-400 text-sm mt-1">
                  In the spirit of ideas worth spreading, TEDx is a program of
                  local, self-organized events that bring people together to
                  share a TED-like experience. At a TEDx event, TED Talks video
                  and live speakers combine to spark deep discussion and
                  connection.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats or Highlight (Optional) */}
        <motion.div
          variants={itemVariants}
          className="mt-20 p-8 border border-zinc-800 bg-zinc-900/50 rounded-2xl flex flex-wrap justify-around items-center gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-black text-white">10+</p>
            <p className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Speakers
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-zinc-800"></div>
          <div>
            <p className="text-4xl font-black text-white">500+</p>
            <p className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Attendees
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-zinc-800"></div>
          <div>
            <p className="text-4xl font-black text-white">01</p>
            <p className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Vision
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
