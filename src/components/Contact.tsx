import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg"
    >
      {/* Glow Orbs */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] bg-accent-purple/15 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />

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
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            Contact <span className="text-gradient">Saif Ur Rehman</span>
          </motion.h3>
        </div>

        {/* Content Layout - Centered Card */}
        <div className="max-w-xl mx-auto">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border-dark-border dark:border-dark-border light:border-light-border space-y-6 shadow-2xl">
              <h4 className="text-xl sm:text-2xl font-bold text-dark-text dark:text-dark-text light:text-light-text text-center">
                Let's discuss your next project
              </h4>
              <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed text-center">
                Whether you need a dedicated senior engineer to join your mobile division, require help deploying Flutter applications, or want code audit advice, I am ready to collaborate.
              </p>

              <div className="space-y-4 pt-6 border-t border-dark-border/20">
                <a
                  href="tel:+923119606735"
                  className="flex items-center gap-4 text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-purple transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-xl group-hover:scale-110 group-hover:bg-accent-purple/10 transition-all duration-300">
                    <FaPhone className="w-4 h-4 text-accent-purple" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold truncate">+92 311 9606735</span>
                </a>

                <a
                  href="mailto:saif.gujjar96@gmail.com"
                  className="flex items-center gap-4 text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-cyan transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-xl group-hover:scale-110 group-hover:bg-accent-cyan/10 transition-all duration-300">
                    <FaEnvelope className="w-4 h-4 text-accent-cyan" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold truncate">saif.gujjar96@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/saifi96"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-blue transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-xl group-hover:scale-110 group-hover:bg-accent-blue/10 transition-all duration-300">
                    <FaLinkedin className="w-4 h-4 text-accent-blue" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">linkedin.com/in/saifi96</span>
                </a>

                <a
                  href="https://github.com/saifi-96"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-cyan transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-xl group-hover:scale-110 group-hover:bg-accent-cyan/10 transition-all duration-300">
                    <FaGithub className="w-4 h-4 text-accent-cyan" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">github.com/saifi-96</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
