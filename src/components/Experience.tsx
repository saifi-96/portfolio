import React from 'react';
import { motion } from 'framer-motion';

interface Job {
  id: number;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

const experiences: Job[] = [
  {
    id: 1,
    role: 'Senior Android Developer',
    company: 'Ainsoft Tech',
    period: 'June 2023 - Present',
    highlights: [
      'Architect and scale the core Android Native codebase utilizing Kotlin, Coroutines, and Jetpack Compose.',
      'Optimized application boot time and rendering performance, achieving a 30% reduction in frame drops and startup delays.',
      'Integrate real-time networking protocols, secure WebSockets, offline sync databases, and complex payment processing SDKs.',
      'Provide mentorship to junior and mid-level developers, implementing regular code reviews to maintain high quality standards.'
    ]
  },
  {
    id: 2,
    role: 'Android Developer',
    company: 'Ainsoft Tech',
    period: 'March 2021 - June 2023',
    highlights: [
      'Migrated legacy XML layouts to modern Jetpack Compose, accelerating UI development iterations by 40%.',
      'Implemented clean, testable MVVM architecture coupled with repository layers to decouple business layers.',
      'Built custom OpenVPN client implementations and secure encryption wrappers for networking tools.',
      'Handled publishing cycles, beta tests, crash monitoring, and store optimization processes on Google Play.'
    ]
  },
  {
    id: 3,
    role: 'Development Team Lead',
    company: 'Eclairios Solutions',
    period: 'July 2020 - March 2021',
    highlights: [
      'Directed a hybrid squad of 6 mobile engineers and designers, delivering 4 key client applications ahead of deadlines.',
      'Orchestrated developer workflows, sprints, feature definitions, and technical scoping specifications.',
      'Enforced CI/CD deployment pipelines on GitHub Actions to automate build compilations and unit-testing runs.'
    ]
  },
  {
    id: 4,
    role: 'Mobile Application Developer',
    company: 'Eclairios Solutions',
    period: 'January 2020 - July 2020',
    highlights: [
      'Engineered cross-platform mobile apps using Flutter and Dart, supporting unified native functionality.',
      'Connected remote REST APIs, integrated Firestore real-time ledger updates, and integrated Google Maps navigation flows.',
      'Debugged complex asynchronous caching bugs, optimizing battery and local memory footprints.'
    ]
  },
  {
    id: 5,
    role: 'Junior Android Developer',
    company: 'DexQuad Software House',
    period: 'January 2018 - September 2018',
    highlights: [
      'Assisted in constructing native Android views utilizing Java, XML, and core Android SDK tools.',
      'Collaborated closely with design team members to implement Material Design layouts.',
      'Resolved bug tickets, tested code interfaces, and prepared releases for staging reviews.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple dark:text-accent-purple light:text-accent-blue mb-3"
          >
            My Career Path
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h3>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple via-accent-blue to-dark-border dark:to-dark-border light:to-light-border -translate-x-1/2 pointer-events-none" />

          {/* Experience list */}
          <div className="space-y-12">
            {experiences.map((job, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={job.id}
                  className={`flex flex-col sm:flex-row items-start sm:items-center relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot marker */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-dark-bg dark:bg-dark-bg light:bg-light-bg border-[3px] border-accent-purple -translate-x-1/2 z-35 shadow-lg shadow-accent-purple/30 pointer-events-none" />

                  {/* Spacer or Card side layout */}
                  <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="glass-card p-6 sm:p-8 rounded-3xl border-dark-border dark:border-dark-border light:border-light-border hover:-translate-y-1"
                    >
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-accent-purple dark:text-accent-purple light:text-accent-blue px-2.5 py-1 rounded-full bg-accent-purple/10 dark:bg-accent-purple/10 light:bg-accent-blue/10 mb-3">
                        {job.period}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-dark-text dark:text-dark-text light:text-light-text mb-1">
                        {job.role}
                      </h4>
                      <h5 className="text-sm font-semibold text-accent-blue dark:text-accent-blue light:text-accent-purple mb-4">
                        {job.company}
                      </h5>

                      <ul className="space-y-2 text-xs sm:text-sm text-dark-muted dark:text-dark-muted light:text-light-muted list-disc list-inside leading-relaxed">
                        {job.highlights.map((hl, i) => (
                          <li key={i} className="list-item">
                            <span className="text-dark-text dark:text-dark-text light:text-light-text">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  {/* Empty balance block for alignment */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
