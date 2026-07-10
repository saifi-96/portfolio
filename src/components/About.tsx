import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiAward, FiLayers, FiSmartphone, FiRadio, FiGlobe, FiTrendingUp, FiCloud } from 'react-icons/fi';

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const highlights: HighlightItem[] = [
  { icon: <FiAward className="text-accent-purple w-5 h-5" />, title: '7+ Years Experience', desc: 'Crafting top-tier mobile software' },
  { icon: <FiSmartphone className="text-accent-blue w-5 h-5" />, title: 'Android Expert', desc: 'Native Java & Kotlin environments' },
  { icon: <FiCpu className="text-accent-cyan w-5 h-5" />, title: 'Flutter Development', desc: 'Cross-platform app engineering' },
  { icon: <FiLayers className="text-accent-pink w-5 h-5" />, title: 'Jetpack Compose', desc: 'Modern reactive layout toolkit' },
  { icon: <FiCloud className="text-accent-purple w-5 h-5" />, title: 'Firebase Integration', desc: 'Auth, Database, Analytics & FCM' },
  { icon: <FiCode className="text-accent-blue w-5 h-5" />, title: 'Clean Architecture', desc: 'Solid coding paradigms' },
  { icon: <FiLayers className="text-accent-cyan w-5 h-5" />, title: 'MVVM, MVI, MVP', desc: 'Decoupled state design layouts' },
  { icon: <FiRadio className="text-accent-pink w-5 h-5" />, title: 'REST API Integration', desc: 'Retrofit, OkHttp, Serialization' },
  { icon: <FiGlobe className="text-accent-purple w-5 h-5" />, title: 'Play Store Expert', desc: 'Successfully deployed dozens of apps' }
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg"
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
            My Background
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            About <span className="text-gradient">Saif Ur Rehman</span>
          </motion.h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h4 className="text-2xl font-bold text-dark-text dark:text-dark-text light:text-light-text flex items-center gap-2">
              <FiTrendingUp className="text-accent-purple" /> Professional Biography
            </h4>
            
            <p className="text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
              I am a Senior Mobile Application Engineer with over 7 years of specialized experience in designing and developing highly performant native Android and cross-platform Flutter applications. Throughout my career, I have dedicated myself to maintaining high architectural standards and delivering premium user experiences.
            </p>

            <p className="text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
              My engineering philosophy centers around writing modular, testable, and clean code. I specialize in applying robust design patterns like MVVM and MVI, integrating reactive workflows with Jetpack Compose, and using Clean Architecture principles to keep code bases scalable and simple to maintain.
            </p>

            <p className="text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
              From working as a hands-on developer to leading engineering teams, I have driven the entire product lifecycle—from conceptualization and design system integration to Play Store publishing and production-level post-launch optimizations.
            </p>
          </motion.div>

          {/* Highlights Grid Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between h-[150px] group cursor-pointer hover:-translate-y-1 hover:border-accent-purple/30"
                >
                  <div className="p-3 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-xl w-fit group-hover:bg-accent-purple/10 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-dark-text dark:text-dark-text light:text-light-text mb-1 group-hover:text-accent-purple transition-colors duration-300">
                      {item.title}
                    </h5>
                    <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
