import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Saif_ur_Rehman_Resume.pdf';

const titles = [
  'Senior Android Developer',
  'Flutter Developer',
  'Kotlin Expert',
  'Mobile Systems Architect'
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    // Premium multi-burst confetti
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleDownloadResume = () => {
    triggerConfetti();
    const link = document.createElement('a');
    link.href = resumePdf;
    link.setAttribute('download', 'Saif_Ur_Rehman_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-accent-purple/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[130px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        {/* Text Presentation */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-green-500/10 text-green-500 dark:text-green-400 border border-green-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Remote Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-dark-text dark:text-dark-text light:text-light-text"
          >
            Hi, I'm <span className="text-gradient">Saif Ur Rehman</span>
          </motion.h1>

          {/* Animating Title */}
          <div className="h-12 sm:h-16 mb-6 overflow-hidden flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent-blue dark:text-accent-blue light:text-accent-purple"
              >
                {titles[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            I build scalable, high-performance mobile applications using Android, Kotlin, Jetpack Compose, Flutter, Firebase, and modern software architecture.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
          >
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-accent-purple via-accent-violet to-accent-blue text-white shadow-xl hover:shadow-accent-purple/35 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs bg-white/5 dark:bg-white/5 light:bg-black/5 text-dark-text dark:text-dark-text light:text-light-text border border-dark-border dark:border-dark-border light:border-light-border hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Download Resume
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start space-x-6"
          >
            <a
              href="https://github.com/saifi-96"
              target="_blank"
              rel="noreferrer"
              className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-purple transition-colors duration-300 p-2 rounded-full border border-dark-border/40 hover:border-accent-purple/50 bg-white/5 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/saifi96"
              target="_blank"
              rel="noreferrer"
              className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-blue transition-colors duration-300 p-2 rounded-full border border-dark-border/40 hover:border-accent-blue/50 bg-white/5 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:saif.gujjar96@gmail.com"
              className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-cyan transition-colors duration-300 p-2 rounded-full border border-dark-border/40 hover:border-accent-cyan/50 bg-white/5 hover:scale-110"
              aria-label="Email Address"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Developer Image / Tech Illustration Mockup */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden gradient-border-card flex items-center justify-center"
          >
            {/* Ambient behind image glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10 pointer-events-none" />
            
            <img
              src={profileImg}
              alt="Saif Ur Rehman - Profile Picture"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
