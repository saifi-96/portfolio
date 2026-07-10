import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all form fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '1a29f3d6-66bf-4210-8fb0-570438d3ba71';

    try {
      if (!accessKey || accessKey === 'sandbox') {
        // Simulated local sandbox delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        setStatus({
          type: 'success',
          message: 'Message sent! (Preview Sandbox Mode). To receive real emails to saif.gujjar96@gmail.com, simply enter a free Access Key from web3forms.com in your .env file!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
          setStatus({
            type: 'success',
            message: 'Your message has been sent successfully. Saif will reach out to you shortly!'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error(result.message || 'Error submitting form');
        }
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please email directly at saif.gujjar96@gmail.com.'
      });
    } finally {
      setLoading(false);
    }
  };

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

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border-dark-border dark:border-dark-border light:border-light-border space-y-6">
              <h4 className="text-xl font-bold text-dark-text dark:text-dark-text light:text-light-text">
                Let's discuss your next project
              </h4>
              <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                Whether you need a dedicated senior engineer to join your mobile division, require help deploying Flutter applications, or want code audit advice, I am ready to collaborate.
              </p>

              <div className="space-y-4 pt-4 border-t border-dark-border/20">
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

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="glass-card p-8 rounded-3xl border-dark-border dark:border-dark-border light:border-light-border space-y-5"
            >
              {/* Form Validation feedback alert */}
              {status.type && (
                <div
                  className={`p-4 rounded-xl text-sm font-semibold tracking-wide ${
                    status.type === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-dark-text dark:text-dark-text light:text-light-text uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    disabled={loading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-dark-text dark:text-dark-text light:text-light-text uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-dark-text dark:text-dark-text light:text-light-text uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="App Development Inquiry"
                  disabled={loading}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-dark-text dark:text-dark-text light:text-light-text uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                  placeholder="Provide details about your mobile app project here..."
                  disabled={loading}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-accent-purple via-accent-violet to-accent-blue text-white shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 disabled:opacity-50 active:scale-95 focus:outline-none hover:scale-[1.01]"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
