import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiLayers, FiEye, FiCloud, FiCreditCard, FiMapPin, FiMessageSquare, FiShield, FiSettings, FiUploadCloud } from 'react-icons/fi';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    icon: <FiSmartphone className="w-6 h-6 text-accent-purple" />,
    title: 'Android App Development',
    desc: 'Native applications using Kotlin, Java, and Jetpack Compose optimized for speed, reliability, and visual depth.'
  },
  {
    icon: <FiLayers className="w-6 h-6 text-accent-blue" />,
    title: 'Flutter App Development',
    desc: 'Cross-platform mobile applications matching native look-and-feel with a single high-quality codebase.'
  },
  {
    icon: <FiEye className="w-6 h-6 text-accent-cyan" />,
    title: 'UI/UX Implementation',
    desc: 'Translating rich pixel-perfect Figma prototypes into responsive, pixel-perfect layout screens with smooth animations.'
  },
  {
    icon: <FiCloud className="w-6 h-6 text-accent-pink" />,
    title: 'Firebase Integration',
    desc: 'Database, Authentication, Analytics, Cloud Messaging push alerts, and dynamic content hosting.'
  },
  {
    icon: <FiCreditCard className="w-6 h-6 text-accent-purple" />,
    title: 'Payment Gateways',
    desc: 'Integrating Stripe, Braintree, Google Pay, and localized APIs for secure merchant transactions.'
  },
  {
    icon: <FiMapPin className="w-6 h-6 text-accent-blue" />,
    title: 'Google Maps Integration',
    desc: 'Custom geo-location configurations, route drawing, active tracking, clusters, and map visuals.'
  },
  {
    icon: <FiMessageSquare className="w-6 h-6 text-accent-cyan" />,
    title: 'Chat Applications',
    desc: 'Real-time chatting frameworks using WebSockets, Socket.io, Firebase, or Twilio for instant message threads.'
  },
  {
    icon: <FiShield className="w-6 h-6 text-accent-pink" />,
    title: 'VPN App Development',
    desc: 'Building highly secure virtual private network clients using OpenVPN protocols and custom native networking.'
  },
  {
    icon: <FiSettings className="w-6 h-6 text-accent-purple" />,
    title: 'App Maintenance & Support',
    desc: 'Legacy codebase refactorings, Kotlin migrations, bug fixing, dependency updates, and feature additions.'
  },
  {
    icon: <FiUploadCloud className="w-6 h-6 text-accent-blue" />,
    title: 'Play Store Publishing',
    desc: 'Assisting in deployment lifecycle, setting up Google Play Console, managing reviews, store guidelines, and production releases.'
  }
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg"
    >
      {/* Background glow orbs */}
      <div className="absolute top-[40%] left-[2%] w-[350px] h-[350px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[2%] w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

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
            What I Offer
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            Professional <span className="text-gradient">Developer Services</span>
          </motion.h3>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="glass-card p-8 rounded-3xl group cursor-pointer border-dark-border dark:border-dark-border light:border-light-border hover:-translate-y-1.5"
            >
              {/* Icon container */}
              <div className="p-4 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-2xl w-fit mb-6 group-hover:scale-115 group-hover:bg-accent-purple/10 transition-all duration-300">
                {svc.icon}
              </div>
              <h4 className="text-lg font-bold text-dark-text dark:text-dark-text light:text-light-text mb-3 group-hover:text-accent-purple dark:group-hover:text-accent-purple light:group-hover:text-accent-blue transition-colors duration-300">
                {svc.title}
              </h4>
              <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
