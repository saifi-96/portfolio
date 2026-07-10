import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Saif is an outstanding mobile developer. His attention to clean architecture, responsiveness, and Kotlin core principles turned our complex MVI app requirements into a seamless, high-performance Google Play release. Highly recommended!",
    name: "Sarah Jenkins",
    role: "Director of Engineering",
    company: "TechScale Global",
    stars: 5
  },
  {
    id: 2,
    text: "Working with Saif was a game changer for our cross-platform products. He migrated our Flutter state structures to structured Providers, resolving deep memory allocation and cache issues. An absolute professional.",
    name: "David Vance",
    role: "Chief Technology Officer",
    company: "NexusSoft Systems",
    stars: 5
  },
  {
    id: 3,
    text: "Saif demonstrated exceptional technical depth when leading our dispatch app publishing. He resolved tricky geolocation tracking services and OpenVPN socket integrations on Android flawlessly.",
    name: "Marcus Thorne",
    role: "Senior Product Manager",
    company: "Apex Security Inc.",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden bg-dark-bg/40 dark:bg-dark-bg/40 light:bg-light-bg/40"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple dark:text-accent-purple light:text-accent-blue mb-3"
          >
            Endorsements
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            Client & Colleague <span className="text-gradient">Reviews</span>
          </motion.h3>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Arrow Left */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] z-30 p-3 rounded-full border border-dark-border dark:border-dark-border light:border-light-border bg-white/5 hover:bg-white/10 text-dark-text dark:text-dark-text light:text-light-text focus:outline-none transition-all duration-300 active:scale-95"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* Testimonial Panel */}
          <div className="w-full px-6 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full glass-card p-8 sm:p-12 rounded-3xl border-dark-border dark:border-dark-border light:border-light-border relative flex flex-col justify-between"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-accent-purple/10 text-6xl pointer-events-none select-none">
                  <FaQuoteLeft />
                </div>

                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                      <FaStar key={i} className="text-amber-400 w-4 h-4" />
                    ))}
                  </div>

                  <blockquote className="text-base sm:text-lg text-dark-text dark:text-dark-text light:text-light-text italic font-medium leading-relaxed">
                    "{testimonials[current].text}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-dark-border/30 flex items-center gap-4">
                  {/* Visual Silhouette Circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center text-white font-extrabold text-lg select-none">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-sm sm:text-base text-dark-text dark:text-dark-text light:text-light-text block">
                      {testimonials[current].name}
                    </cite>
                    <span className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
                      {testimonials[current].role} at <span className="text-accent-blue">{testimonials[current].company}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Right */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] z-30 p-3 rounded-full border border-dark-border dark:border-dark-border light:border-light-border bg-white/5 hover:bg-white/10 text-dark-text dark:text-dark-text light:text-light-text focus:outline-none transition-all duration-300 active:scale-95"
            aria-label="Next Testimonial"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bullet indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'w-6 bg-accent-purple' : 'bg-dark-muted/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
