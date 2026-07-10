import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0 - 100
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Android Native',
    skills: [
      { name: 'Android Development', level: 95 },
      { name: 'Kotlin', level: 96 },
      { name: 'Java', level: 85 },
      { name: 'Jetpack Compose', level: 92 },
      { name: 'Material Design 3', level: 90 },
    ]
  },
  {
    title: 'Hybrid & DBs',
    skills: [
      { name: 'Flutter', level: 88 },
      { name: 'Room Database', level: 90 },
      { name: 'SQLite', level: 85 },
    ]
  },
  {
    title: 'Networking & APIs',
    skills: [
      { name: 'Retrofit', level: 94 },
      { name: 'REST APIs', level: 95 },
      { name: 'Node.js', level: 75 },
    ]
  },
  {
    title: 'Architecture & Tools',
    skills: [
      { name: 'Clean Architecture', level: 93 },
      { name: 'MVVM', level: 95 },
      { name: 'MVI', level: 88 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Firebase', level: 90 },
    ]
  }
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg"
    >
      {/* Background radial highlight */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

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
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            Skills & <span className="text-gradient">Proficiencies</span>
          </motion.h3>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 focus:outline-none ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white border-transparent shadow-lg shadow-accent-purple/15'
                  : 'bg-white/5 dark:bg-white/5 light:bg-black/5 text-dark-muted dark:text-dark-muted light:text-light-muted border-dark-border dark:border-dark-border light:border-light-border hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 rounded-3xl space-y-6"
          >
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base font-bold text-dark-text dark:text-dark-text light:text-light-text">
                    {skill.name}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-accent-purple dark:text-accent-purple light:text-accent-blue bg-accent-purple/10 dark:bg-accent-purple/10 light:bg-accent-blue/10 px-2.5 py-0.5 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress bar container */}
                <div className="w-full h-2.5 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-full overflow-hidden border border-dark-border dark:border-dark-border light:border-light-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.0, ease: 'easeOut', delay: index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-purple via-accent-violet to-accent-blue"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
