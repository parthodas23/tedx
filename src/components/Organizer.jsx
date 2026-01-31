import React from "react";
import { motion } from "framer-motion";

const organizers = [
  {
    id: 1,
    name: "Shafayet Ullah",
    role: "License",
    year: "20",
    image:
      "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1769535598/WhatsApp_Image_2026-01-24_at_7.28.41_PM_f9j7hm.jpg",
  },
  {
    id: 2,
    name: "Tanvir Mahtab",
    role: "Lead Organizer",
    year: "26",
    image:
      "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942377/Tanvir_Mahtab_l0iewx.jpg",
  },
];

const Organizer = () => {
  return (
    <section
      id="organizers"
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold uppercase tracking-[0.5em] text-xs mb-4"
          >
            The Visionaries
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter"
          >
            ORGANIZING{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              COMMITTEE 26
            </span>
          </motion.h3>
        </div>

        {/* amazing Dual Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {organizers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Background Large Outlined Number (20 and 26) */}
              <span className="absolute -top-10 -left-10 text-[12rem] font-black text-white/5 select-none z-0">
                {member.year}
              </span>

              <div className="relative z-10">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 group-hover:border-red-600/50 transition-colors duration-500">
                  {/* Image with logic: Color on mobile, Reveal on Desktop */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-1000 grayscale-0 md:grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
                  />

                  {/* Red Tint & Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                  <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-2">
                        {member.role}
                      </p>
                      <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                        {member.name.split(" ")[0]}
                        <br />
                        <span
                          className="text-transparent"
                          style={{ WebkitTextStroke: "1px white" }}
                        >
                          {member.name.split(" ")[1]}
                        </span>
                      </h4>
                    </motion.div>
                  </div>
                </div>

                {/* Glassmorphism Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/20 blur-3xl rounded-full group-hover:bg-red-600/40 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizer;
