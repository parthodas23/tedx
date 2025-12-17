import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What is TEDxUniversityOfBarishal?",
    answer:
      "It is an independently organized TED event hosted by the University of Barishal. Our goal is to bring together bright minds to give talks that are idea-focused, and on a wide range of subjects, to foster learning, inspiration and wonder.",
  },
  {
    question: "How can I purchase tickets?",
    answer:
      "Tickets will be available exclusively through our official website. Keep an eye on our social media handles for the registration link. Tickets are limited and usually sell out fast!",
  },
  {
    question: "Who are the speakers for this year?",
    answer:
      "We curate a diverse group of speakers ranging from tech innovators to cultural icons. You can check the 'Speakers' section above for the currently revealed lineup.",
  },
  {
    question: "Can I volunteer for the event?",
    answer:
      "Yes! We open volunteer recruitment a few months before the event. Follow our 'Organizers' section or social media for the application form.",
  },
  {
    question: "Is there a certificate for attendees?",
    answer:
      "Yes, all registered attendees will receive an official TEDxUniversityOfBarishal participation certificate and a premium delegate kit.",
  },
];

const FAQItem = ({ item, isOpen, toggle }) => {
  return (
    <div
      className={`mb-4 border rounded-2xl transition-all duration-500 ${
        isOpen
          ? "border-red-600 bg-zinc-900/80 shadow-[0_0_20px_rgba(235,0,40,0.1)]"
          : "border-zinc-800 bg-zinc-900/30"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 ${
            isOpen ? "text-red-600" : "text-white"
          }`}
        >
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 ml-4 p-2 rounded-full transition-transform duration-500 ${
            isOpen ? "bg-red-600 rotate-180" : "bg-zinc-800"
          }`}
        >
          {isOpen ? (
            <FiMinus className="text-white" />
          ) : (
            <FiPlus className="text-white" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-zinc-800/50 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Questions?
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black italic"
          >
            FREQUENTLY ASKED
          </motion.h3>
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Contact Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          Still have questions? Reach out to us at{" "}
          <span className="text-red-600 underline cursor-pointer">
            support@tedxub.com
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;
