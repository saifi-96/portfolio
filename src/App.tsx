import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { GitHubStats } from './components/GitHubStats';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Effects
import { BackgroundParticles } from './components/BackgroundParticles';
import { AnimatedCursor } from './components/AnimatedCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-bg dark:bg-dark-bg light:bg-light-bg text-dark-text dark:text-dark-text light:text-light-text selection:bg-accent-purple/30 overflow-x-hidden">
      {/* Global Interactive Effects */}
      <ScrollProgressBar />
      <BackgroundParticles />
      <AnimatedCursor />

      {/* Main Layout */}
      <Navbar />
      
      <main className="relative z-20">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <TechStack />
        <GitHubStats />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
