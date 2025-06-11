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
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 via-pink-200 to-purple-300 rounded-full blur-3xl opacity-40 z-0" />
      <motion.div
        className="relative z-10 max-w-4xl w-full mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-200 dark:border-purple-700 flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.13)' }}
      >
        {/* Contact Info */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white/60 via-purple-50 to-blue-50 dark:from-gray-900/60 dark:via-purple-900/40 dark:to-blue-900/40">
          <h2 className="text-3xl font-extrabold text-purple-700 dark:text-purple-200 mb-8">Contact</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-purple-500" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Al Wizarat, Riyadh, KSA</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-pink-500" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">er.mdsalmanuddin@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl text-blue-500" />
              <a href="https://www.linkedin.com/in/mohammedsalmanuddin" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 dark:text-blue-300 underline">LinkedIn</a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-purple-400" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">+966510074607</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white/90 dark:bg-gray-900/90 border-l border-purple-100 dark:border-purple-800"
        >
          <div className="grid gap-6 mb-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="peer w-full px-4 pt-6 pb-2 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Name</label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer w-full px-4 pt-6 pb-2 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Email</label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="subject"
                required
                className="peer w-full px-4 pt-6 pb-2 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Subject</label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                required
                rows={4}
                className="peer w-full px-4 pt-6 pb-2 border-2 border-purple-200 dark:border-purple-700 rounded-xl bg-transparent text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition resize-none"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-purple-400 text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base peer-focus:text-purple-500">Message</label>
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
      </motion.div>
    </section>
  );
} 