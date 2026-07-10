import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<string>('004281');

  useEffect(() => {
    // Visitor Count logic with LocalStorage persistence
    try {
      const BASE_COUNT = 4281;
      const storedCount = localStorage.getItem('visitor_count');
      let newCount = BASE_COUNT;

      if (storedCount) {
        newCount = parseInt(storedCount) + 1;
      } else {
        newCount = BASE_COUNT + Math.floor(Math.random() * 50);
      }
      
      localStorage.setItem('visitor_count', newCount.toString());
      
      // Zero-padded string to 6 digits
      const paddedStr = newCount.toString().padStart(6, '0');
      setVisitorCount(paddedStr);
    } catch (e) {
      setVisitorCount('004281');
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-bg dark:bg-dark-bg light:bg-light-bg border-t border-dark-border dark:border-dark-border light:border-light-border pt-16 pb-8 overflow-hidden z-20">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between pb-12 border-b border-dark-border/20">
        
        {/* Brand/Logo Info */}
        <div className="text-center md:text-left">
          <button
            onClick={scrollToTop}
            className="text-lg font-bold font-sans tracking-widest flex items-center justify-center md:justify-start gap-1 mb-3 focus:outline-none"
          >
            <span className="text-gradient font-extrabold text-xl">S</span>
            <span className="text-dark-text dark:text-dark-text light:text-light-text font-semibold">UR.</span>
          </button>
          <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted max-w-xs leading-relaxed mx-auto md:mx-0">
            Crafting scalable, high-performance Android & Flutter applications with modern design systems.
          </p>
        </div>

        {/* Visitor Counter Widget */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-dark-muted dark:text-dark-muted light:text-light-muted">
            Visitor Counter
          </span>
          <div className="flex items-center gap-1">
            {visitorCount.split('').map((char, index) => (
              <div
                key={index}
                className="w-6 h-8 rounded-md bg-white/5 dark:bg-white/5 light:bg-black/5 border border-dark-border dark:border-dark-border light:border-light-border flex items-center justify-center text-xs font-bold text-accent-purple dark:text-accent-purple light:text-accent-blue shadow-inner"
              >
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Social Hooks */}
        <div className="flex flex-col items-center md:items-end justify-center space-y-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/saifi-96"
              target="_blank"
              rel="noreferrer"
              className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-purple transition-all duration-300 p-2 rounded-xl bg-white/5 border border-dark-border/40 hover:scale-105"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/saifi96"
              target="_blank"
              rel="noreferrer"
              className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-blue transition-all duration-300 p-2 rounded-xl bg-white/5 border border-dark-border/40 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:saif.gujjar96@gmail.com"
              className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-cyan transition-all duration-300 p-2 rounded-xl bg-white/5 border border-dark-border/40 hover:scale-105"
              aria-label="Email Direct"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top Circle button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-dark-border dark:border-dark-border light:border-light-border bg-white/5 hover:bg-white/10 hover:border-accent-purple/50 text-dark-text dark:text-dark-text light:text-light-text hover:text-accent-purple transition-all duration-300 active:scale-95 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <FaChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
        <span>&copy; {currentYear} Saif Ur Rehman. All rights reserved.</span>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <span className="hover:text-accent-purple cursor-pointer transition-colors duration-300">Privacy Policy</span>
          <span className="hover:text-accent-purple cursor-pointer transition-colors duration-300">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};
