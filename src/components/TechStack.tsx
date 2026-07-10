import React from 'react';
import { FaAndroid, FaJava, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiFirebase, SiSqlite, SiMaterialdesign, SiJetpackcompose } from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string; // Tailwind text color
}

const techItems: TechItem[] = [
  { name: 'Android', icon: <FaAndroid />, color: 'text-green-500' },
  { name: 'Kotlin', icon: <SiKotlin />, color: 'text-purple-400' },
  { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
  { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-amber-500' },
  { name: 'Jetpack Compose', icon: <SiJetpackcompose />, color: 'text-indigo-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-emerald-500' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-zinc-300 dark:text-zinc-300 light:text-zinc-800' },
  { name: 'Room Database', icon: <FaDatabase />, color: 'text-cyan-400' },
  { name: 'SQLite', icon: <SiSqlite />, color: 'text-sky-500' },
  { name: 'Retrofit & APIs', icon: <FaDatabase />, color: 'text-violet-400' },
  { name: 'Material Design', icon: <SiMaterialdesign />, color: 'text-pink-500' }
];

export const TechStack: React.FC = () => {
  // Duplicate list to create a seamless infinite scroll loop
  const marqueeItems = [...techItems, ...techItems, ...techItems];

  return (
    <section
      id="tech-showcase"
      className="relative py-16 overflow-hidden bg-dark-bg/50 dark:bg-dark-bg/50 light:bg-light-bg/50 border-y border-dark-border/40 dark:border-dark-border/40 light:border-light-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h4 className="text-xs font-bold uppercase tracking-widest text-dark-muted dark:text-dark-muted light:text-light-muted">
          Integrations & Tech Stack Landscape
        </h4>
      </div>

      {/* Infinite scrolling ticker container */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Glow overlay left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-bg dark:from-dark-bg light:from-light-bg to-transparent z-10 pointer-events-none" />
        {/* Glow overlay right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-bg dark:from-dark-bg light:from-light-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-2xl border-dark-border dark:border-dark-border light:border-light-border hover:border-accent-purple/40 hover:scale-105 transition-all duration-300 select-none cursor-grab active:cursor-grabbing"
            >
              <span className={`text-xl sm:text-2xl ${item.color} transition-transform duration-300 hover:scale-110`}>
                {item.icon}
              </span>
              <span className="text-xs sm:text-sm font-bold text-dark-text dark:text-dark-text light:text-light-text">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
