import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Initialize Theme from LocalStorage or Default Dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;
    if (savedTheme === 'light') {
      setIsDark(false);
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      setIsDark(true);
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      setIsDark(false);
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDark(true);
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Scrollspy & Scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section Highlight Logic
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-dark-bg/60 dark:bg-dark-bg/60 light:bg-light-bg/60 backdrop-blur-lg border-b border-dark-border dark:border-dark-border light:border-light-border'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold font-sans tracking-wider flex items-center gap-1.5 focus:outline-none"
        >
          <span className="text-gradient font-extrabold text-2xl">S</span>
          <span className="text-dark-text dark:text-dark-text light:text-light-text font-semibold">UR.</span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 focus:outline-none ${
                activeSection === item.id
                  ? 'text-accent-purple dark:text-accent-purple light:text-accent-blue'
                  : 'text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-dark-text dark:hover:text-dark-text light:hover:text-light-text'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-blue"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-dark-border dark:border-dark-border light:border-light-border bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 text-dark-text dark:text-dark-text light:text-light-text transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun className="w-[18px] h-[18px] text-yellow-400" /> : <FiMoon className="w-[18px] h-[18px] text-accent-blue" />}
          </button>

          {/* Hire Me CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-accent-purple via-accent-violet to-accent-blue text-white shadow-lg hover:shadow-accent-purple/20 transition-all duration-300 active:scale-95 focus:outline-none"
          >
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-dark-border dark:border-dark-border light:border-light-border bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 text-dark-text dark:text-dark-text light:text-light-text transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-dark-border dark:border-dark-border light:border-light-border bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-light-bg/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-base font-semibold tracking-wide py-2 border-b border-dark-border/30 dark:border-dark-border/30 light:border-light-border/30 focus:outline-none ${
                    activeSection === item.id
                      ? 'text-accent-purple dark:text-accent-purple light:text-accent-blue'
                      : 'text-dark-muted dark:text-dark-muted light:text-light-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-r from-accent-purple via-accent-violet to-accent-blue text-white shadow-lg hover:shadow-accent-purple/20 transition-all duration-300 focus:outline-none"
              >
                Hire Me
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
