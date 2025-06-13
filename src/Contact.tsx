/// <reference types="vite/client" />
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    if (!formRef.current) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID || ''
      )
      .then(
        () => {
          setSuccess('Message sent successfully!');
          setLoading(false);
          formRef.current?.reset();
        },
        (err) => {
          setError('Failed to send message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center bg-transparent">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-pink-400 via-purple-200 to-blue-200 rounded-full blur-3xl opacity-20 animate-float-fast z-0 pointer-events-none" />
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-3xl opacity-40 z-0" />
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto p-[3px] rounded-[2.5rem] bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.18)' }}
      >
        <div className="flex flex-col md:flex-row bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-[2.4rem] w-full h-full">
          {/* Contact Info */}
          <div className="flex-1 p-6 sm:p-8 md:p-14 flex flex-col justify-center bg-gradient-to-br from-white/60 via-purple-50 to-blue-50 dark:from-gray-900/60 dark:via-purple-900/40 dark:to-blue-900/40 rounded-[2.2rem]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 mb-6 md:mb-10 text-center md:text-left drop-shadow-lg tracking-tight">Let's Connect</h2>
            <div className="space-y-4 md:space-y-8">
              <a href="https://www.google.com/maps/search/?api=1&query=Al+Wizarat+Riyadh+KSA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-2xl py-2 px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-400 to-blue-400 text-white text-lg md:text-2xl shadow group-hover:scale-110 transition-transform"><FaMapMarkerAlt /></span>
                <span className="text-base md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 underline break-words">Al Wizarat, Riyadh, KSA</span>
              </a>
              <a href="mailto:er.mdsalmanuddin@gmail.com" className="flex items-center gap-2 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-2xl py-2 px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-400 to-blue-400 text-white text-lg md:text-2xl shadow group-hover:scale-110 transition-transform"><FaEnvelope /></span>
                <span className="text-base md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-300 underline break-all">er.mdsalmanuddin@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/mohammedsalmanuddin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-2xl py-2 px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 text-white text-lg md:text-2xl shadow group-hover:scale-110 transition-transform"><FaLinkedin /></span>
                <span className="text-base md:text-xl font-semibold text-blue-600 dark:text-blue-300 group-hover:text-purple-600 underline break-words">LinkedIn</span>
              </a>
              <a href="tel:+966510074607" className="flex items-center gap-2 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-2xl py-2 px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 text-white text-lg md:text-2xl shadow group-hover:scale-110 transition-transform"><FaPhone /></span>
                <span className="text-base md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 underline break-all">+966510074607</span>
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 p-10 md:p-14 flex flex-col justify-center bg-white/90 dark:bg-gray-900/90 rounded-[2.2rem] border-l border-purple-100 dark:border-purple-800"
          >
            <div className="grid gap-8 mb-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full px-5 pt-7 pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                  placeholder=" "
                />
                <label className="absolute left-5 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Name</label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full px-5 pt-7 pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                  placeholder=" "
                />
                <label className="absolute left-5 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Email</label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  className="peer w-full px-5 pt-7 pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                  placeholder=" "
                />
                <label className="absolute left-5 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Subject</label>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="peer w-full px-5 pt-7 pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition resize-none"
                  placeholder=" "
                />
                <label className="absolute left-5 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Message</label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 text-white text-lg font-bold shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-200 mt-2"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {success && <p className="text-green-600 text-center mt-4">{success}</p>}
            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
} 