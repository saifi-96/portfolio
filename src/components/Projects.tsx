import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  category: 'Android' | 'Flutter' | 'Firebase';
  tech: string[];
  desc: string;
  features: string[];
  color: string; // Tailwind gradient classes
  github: string;
  demo: string;
}

const ProjectMockup: React.FC<{ projectId: number; category: string }> = ({ projectId }) => {
  switch (projectId) {
    case 1: // Status Saver
      return (
        <div className="w-full h-full flex flex-col justify-between p-5 relative overflow-hidden bg-black/40">
          <div className="flex justify-between items-center text-[10px] text-green-400 font-mono z-20">
            <span>Status Saver</span>
            <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">Media</span>
          </div>
          <div className="flex justify-center items-center gap-4 my-auto z-20">
            <div className="relative w-16 h-16 rounded-full border-4 border-green-500/30 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-t-green-500 border-r-green-500 border-b-transparent border-l-transparent animate-spin" />
              <svg className="w-6 h-6 text-green-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
            <div className="flex flex-col gap-1.5 w-24">
              <div className="h-2 rounded bg-green-500/20 w-full" />
              <div className="h-2 rounded bg-green-500/20 w-3/4" />
              <div className="h-2 rounded bg-green-500/20 w-1/2" />
            </div>
          </div>
          <div className="h-1 w-full bg-green-500/20 rounded-full overflow-hidden z-20">
            <div className="h-full bg-green-500 w-3/4 rounded-full" />
          </div>
        </div>
      );
    case 2: // Space911
      return (
        <div className="w-full h-full flex flex-col justify-between p-5 relative overflow-hidden bg-black/40">
          <div className="flex justify-between items-center text-[10px] text-violet-400 font-mono z-20">
            <span>Space911</span>
            <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400">Active</span>
          </div>
          <div className="relative w-full h-24 my-auto flex items-center justify-center z-20">
            <div className="absolute w-20 h-20 rounded-full border border-violet-500/20 flex items-center justify-center animate-pulse" />
            <div className="absolute w-12 h-12 rounded-full border border-violet-500/30 flex items-center justify-center" />
            <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-ping absolute" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute top-4 left-12 animate-bounce" />
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 absolute bottom-6 right-16 animate-bounce" />
          </div>
          <div className="flex gap-2 justify-end z-20">
            <div className="w-3 h-3 rounded-full bg-violet-500/50" />
            <div className="w-8 h-3 rounded bg-violet-500/20" />
          </div>
        </div>
      );
    case 3: // Husky VPN
      return (
        <div className="w-full h-full flex flex-col justify-between p-5 relative overflow-hidden bg-black/40">
          <div className="flex justify-between items-center text-[10px] text-cyan-400 font-mono z-20">
            <span>Husky VPN</span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">Secure</span>
          </div>
          <div className="flex items-center justify-center gap-6 my-auto z-20">
            <div className="relative w-14 h-16 flex items-center justify-center bg-cyan-500/10 rounded-xl border border-cyan-500/20 animate-pulse">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">Connected</span>
              </div>
              <span className="text-[9px] text-cyan-500/70 font-mono">USA - Node 04</span>
            </div>
          </div>
          <div className="h-1.5 w-2/3 bg-cyan-500/20 rounded-full z-20" />
        </div>
      );
    case 4: // Fit Streak
      return (
        <div className="w-full h-full flex flex-col justify-between p-5 relative overflow-hidden bg-black/40">
          <div className="flex justify-between items-center text-[10px] text-amber-500 font-mono z-20">
            <span>Fit Streak</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500">Gym</span>
          </div>
          <div className="flex justify-around items-end h-16 my-auto px-4 z-20">
            <div className="w-3 bg-amber-500/20 rounded-t h-8" />
            <div className="w-3 bg-amber-500/40 rounded-t h-12" />
            <div className="w-3 bg-amber-500/60 rounded-t h-16" />
            <div className="w-3 bg-amber-500 rounded-t h-10" />
            <div className="w-3 bg-amber-600 rounded-t h-14" />
          </div>
          <div className="flex justify-between items-center text-[9px] text-amber-500/70 font-mono z-20">
            <span>Streak: 12 Days 🔥</span>
            <span className="h-2 w-12 bg-amber-500/20 rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-4/5" /></span>
          </div>
        </div>
      );
    case 5: // Tour Expense
      return (
        <div className="w-full h-full flex flex-col justify-between p-5 relative overflow-hidden bg-black/40">
          <div className="flex justify-between items-center text-[10px] text-pink-400 font-mono z-20">
            <span>Expense Manager</span>
            <span className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400">Finances</span>
          </div>
          <div className="flex items-center gap-4 my-auto justify-center z-20">
            <div className="relative w-16 h-12 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center transform -rotate-6">
              <span className="text-[10px] text-pink-400 font-bold">$120</span>
            </div>
            <div className="relative w-16 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center transform rotate-6 -ml-6">
              <span className="text-[9px] text-pink-400/60 font-semibold">$80</span>
            </div>
          </div>
          <div className="flex justify-between text-[9px] text-pink-400/70 z-20">
            <span>Split ledger balance</span>
            <span className="font-bold">Sync OK</span>
          </div>
        </div>
      );
    case 6: // Threads
      return (
        <div className="w-full h-full flex flex-col justify-between p-5 relative overflow-hidden bg-black/40">
          <div className="flex justify-between items-center text-[10px] text-purple-400 font-mono z-20">
            <span>Threads Clone</span>
            <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400">Social</span>
          </div>
          <div className="flex flex-col gap-2.5 my-auto z-20">
            <div className="flex gap-2 items-start">
              <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/30" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-purple-500/20 rounded w-1/3" />
                <div className="h-1 bg-purple-500/10 rounded w-5/6" />
              </div>
            </div>
            <div className="flex gap-2 items-start pl-7">
              <div className="w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/20" />
              <div className="flex-1 space-y-1">
                <div className="h-1 bg-purple-500/10 rounded w-1/2" />
              </div>
            </div>
          </div>
          <div className="h-1 w-full bg-purple-500/10 z-20" />
        </div>
      );
    default:
      return <div className="text-white">Mockup</div>;
  }
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'WhatsApp Status Saver / Video Downloader',
    category: 'Android',
    tech: ['Kotlin', 'Coroutines', 'Flow', 'MediaStore API', 'Jetpack Compose'],
    desc: 'High-performance utility suite with 100K+ installs. Optimised media I/O with a coroutine-based pipeline, reducing media save time by 40% and eliminating UI jank.',
    features: ['100K+ Play Store downloads', 'MediaStore API media query structures', 'Kotlin Flow async pipelines', '40% IO file transfer speedup'],
    color: 'from-green-500/20 via-emerald-600/10 to-teal-700/5',
    github: 'https://github.com/saifi-96/status-saver',
    demo: '#'
  },
  {
    id: 2,
    title: 'Space911',
    category: 'Android',
    tech: ['Android SDK', 'Back4App', 'Stripe Integration', 'Java', 'Retrofit'],
    desc: 'An emergency security dispatch client. Features automated SMS/network alerts, Back4App cloud backend database, and secure Stripe subscription billing.',
    features: ['One-tap emergency dispatches', 'Active geolocation pinging', 'Secure Stripe payments merchant SDK', 'Automatic local cache database syncing'],
    color: 'from-indigo-500/20 via-violet-600/10 to-purple-700/5',
    github: 'https://github.com/saifi-96/space911',
    demo: '#'
  },
  {
    id: 3,
    title: 'Husky VPN / Bot VPN',
    category: 'Android',
    tech: ['OpenVPN', 'WireGuard', 'Kotlin', 'Jetpack', 'Room'],
    desc: 'Dual-protocol VPN suite with kill-switch, split-tunnelling, latency testing, and AES-256 encryption. Built with OpenVPN and WireGuard integrations to exceed 60K combined installs.',
    features: ['OpenVPN & WireGuard integrations', 'Secure AES-256 encryption wrappers', 'Custom split-tunnelling capabilities', 'Kill-switch configurations'],
    color: 'from-blue-500/20 via-sky-600/10 to-cyan-700/5',
    github: 'https://github.com/saifi-96/vpn-app',
    demo: '#'
  },
  {
    id: 4,
    title: 'Fit Streak (Gym App)',
    category: 'Flutter',
    tech: ['Flutter', 'Firebase', 'Dart', 'Provider', 'Local Notifications'],
    desc: 'Workout-tracking app with animated progress dashboards, offline-first database structures, and personalised streak reminders. Built with Flutter and Firebase.',
    features: ['Animated progress dashboards', 'Offline-first database cache', 'Personalised streak reminders', 'Local notification schedules'],
    color: 'from-orange-500/20 via-amber-600/10 to-yellow-700/5',
    github: 'https://github.com/saifi-96/fitstreak',
    demo: '#'
  },
  {
    id: 5,
    title: 'Tour Expense Manager',
    category: 'Firebase',
    tech: ['Android SDK', 'Firebase Realtime DB', 'Java', 'MVVM Architecture'],
    desc: 'A group travel split-billing ledger. Syncs expense logs instantly across multiple active devices during shared trips.',
    features: ['Instantly synced ledger records', 'Group debt consolidation rules', 'Multi-currency ledger reports', 'Offline storage & syncing queue'],
    color: 'from-pink-500/20 via-rose-600/10 to-red-700/5',
    github: 'https://github.com/saifi-96/expense-manager',
    demo: '#'
  },
  {
    id: 6,
    title: 'Threads Inspired Social Platform',
    category: 'Firebase',
    tech: ['Jetpack Compose', 'Firebase Auth', 'Firestore Database', 'Kotlin'],
    desc: 'A microblogging layout styled after Threads. Supports threads posting, profile creation, real-time replies, and Firebase storage uploads.',
    features: ['Real-time posts notifications', 'Dynamic comment nesting structures', 'Firebase Authentication protocols', 'Sleek custom scrolling feed animations'],
    color: 'from-purple-500/20 via-fuchsia-600/10 to-pink-700/5',
    github: 'https://github.com/saifi-96/threads-clone',
    demo: '#'
  }
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Android' | 'Flutter' | 'Firebase'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
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
            My Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h3>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {(['All', 'Android', 'Flutter', 'Firebase'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 focus:outline-none ${
                filter === cat
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white border-transparent shadow-lg shadow-accent-purple/10'
                  : 'bg-white/5 dark:bg-white/5 light:bg-black/5 text-dark-muted dark:text-dark-muted light:text-light-muted border-dark-border dark:border-dark-border light:border-light-border hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer border-dark-border dark:border-dark-border light:border-light-border flex flex-col h-full hover:scale-[1.01]"
              >
                {/* Visual Representation Area */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center transition-all duration-500 relative overflow-hidden group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/20 light:bg-transparent z-10" />
                  <ProjectMockup projectId={project.id} category={project.category} />
                  <span className="absolute bottom-4 right-4 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md z-20 border border-white/5">
                    {project.category}
                  </span>
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-lg font-bold text-dark-text dark:text-dark-text light:text-light-text mb-2 group-hover:text-accent-purple dark:group-hover:text-accent-purple light:group-hover:text-accent-blue transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted line-clamp-3 mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-white/5 dark:bg-white/5 light:bg-black/5 text-dark-muted dark:text-dark-muted light:text-light-muted px-2 py-0.5 rounded-md border border-dark-border/40"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-semibold text-accent-purple dark:text-accent-purple light:text-accent-blue px-2 py-0.5 bg-accent-purple/10 dark:bg-accent-purple/10 light:bg-accent-blue/10 rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto bg-black/75 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-light-bg border border-dark-border dark:border-dark-border light:border-light-border rounded-3xl overflow-hidden shadow-2xl my-8"
              >
                {/* Header Mockup */}
                <div className={`h-56 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center p-8 relative`}>
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/20 light:bg-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-300 focus:outline-none"
                    aria-label="Close details"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white z-10 text-center drop-shadow-sm">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent-purple mb-2">
                      Overview
                    </h4>
                    <p className="text-sm sm:text-base text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>

                  {/* Features list */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent-purple mb-3">
                      Key Highlights & Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-dark-text dark:text-dark-text light:text-light-text">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent-purple mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold bg-white/5 dark:bg-white/5 light:bg-black/5 border border-dark-border/40 text-dark-text dark:text-dark-text light:text-light-text px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-dark-border/30">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 dark:bg-white/5 light:bg-black/5 text-dark-text dark:text-dark-text light:text-light-text border border-dark-border dark:border-dark-border light:border-light-border hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-colors duration-300"
                    >
                      <FaGithub className="w-4 h-4" /> Source Code
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg hover:shadow-accent-purple/20 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
