import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};

const CountdownSegment = ({ value, label, delay }) => {
  const formattedValue = String(value).padStart(2, '0');

  const segmentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 10, delay: delay } 
    },
  };

  const numberVariants = {
    key: value, // Key prop forces re-render/animation on value change
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="flex flex-col items-center mx-2 sm:mx-4"
      variants={segmentVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative flex items-center justify-center text-4xl sm:text-6xl md:text-8xl font-mono text-white p-2">
        <motion.span 
          className="relative inline-block tracking-tighter"
          key={formattedValue}
          variants={numberVariants}
          initial="initial"
          animate="animate"
        >
          {formattedValue}
        </motion.span>
        {/* Corner Brackets */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-600"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-600"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-600"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-600"></span>
      </div>
      <p className="text-xs sm:text-sm uppercase tracking-widest mt-2 text-gray-400">{label}</p>
      {/* Separator Dots (Hidden on last segment) */}
      {label !== 'SECONDS' && (
        <span className="absolute right-0 text-red-600 text-3xl font-bold mt-1 sm:mt-2 opacity-70">:</span>
      )}
    </motion.div>
  );
};

const CountdownTimer = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));
  const [isEventPassed, setIsEventPassed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(eventDate);
      setTimeLeft(newTimeLeft);
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsEventPassed(true);
        clearInterval(timer);
      }
    }, 1000);

    // Initial check for immediately passed event
    if (new Date(eventDate) < new Date() && Object.values(timeLeft).every(val => val === 0)) {
        setIsEventPassed(true);
        clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [eventDate]);

  const segments = [
    { value: timeLeft.days, label: 'DAYS', delay: 0.5 },
    { value: timeLeft.hours, label: 'HOURS', delay: 0.6 },
    { value: timeLeft.minutes, label: 'MINUTES', delay: 0.7 },
    { value: timeLeft.seconds, label: 'SECONDS', delay: 0.8 },
  ];

  return (
    <div className="flex justify-center text-center relative">
      {isEventPassed ? (
        <motion.div 
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider py-10 px-6 bg-black bg-opacity-80 rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
        >
            <span className="text-red-600">TEDx</span> Event <span className="text-red-600">Concluded!</span>
            <p className="text-lg sm:text-xl font-normal mt-2 text-gray-300">Thank you for attending.</p>
        </motion.div>
      ) : (
        segments.map((segment, index) => (
          <CountdownSegment
            key={segment.label}
            value={segment.value}
            label={segment.label}
            delay={segment.delay}
          />
        ))
      )}
    </div>
  );
};

export default CountdownTimer;