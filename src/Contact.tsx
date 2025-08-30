/// <reference types="vite/client" />
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';

// Service options based on the services provided
const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'Odoo Development', label: 'Odoo Development' },
  { value: 'Full-Stack Development', label: 'Full-Stack Development' },
  { value: 'Database Solutions', label: 'Database Solutions' },
  { value: 'Cloud Infrastructure', label: 'Cloud Infrastructure' },
  { value: 'UiPath RPA Solutions', label: 'UiPath RPA Solutions' },
  { value: 'System Integration', label: 'System Integration' },
  { value: 'Other', label: 'Other (Please specify)' }
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('');
  const [otherService, setOtherService] = useState('');

  // Function to handle Hire Me button click from other sections
  const handleHireMeClick = () => {
    setSelectedService('Other');
    setOtherService('Hire for Project');
  };

  // Listen for URL hash changes to auto-fill when coming from Hire Me button or Get Quote
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      console.log('Hash changed to:', hash);
      
      if (hash.includes('#contact')) {
        // Extract parameters from the hash
        const hashParams = hash.split('?')[1];
        console.log('Hash params:', hashParams);
        
        if (hashParams) {
          const urlParams = new URLSearchParams(hashParams);
          const action = urlParams.get('action');
          console.log('Action detected:', action);
          
          if (action === 'hire') {
            // Auto-fill for Hire Me button
            setSelectedService('Other');
            setOtherService('Hire for Project');
            console.log('Hire Me action detected - form auto-filled');
          } else if (action === 'quote') {
            // Auto-fill for Get Quote button
            const service = urlParams.get('service');
            console.log('Service from URL:', service);
            if (service) {
              setSelectedService(service);
              setOtherService('');
              console.log('Quote action detected - service set to:', service);
            }
          } else if (action === 'consultation') {
            // Auto-fill for Get Free Consultation button
            setSelectedService('Other');
            setOtherService('General Consultation');
            console.log('Consultation action detected - form auto-filled');
          }
        }
      }
    };

    // Check on mount with a small delay to ensure component is fully rendered
    setTimeout(handleHashChange, 100);
    
    // Also check when the component mounts to handle direct navigation
    const checkInitialHash = () => {
      if (window.location.hash.includes('#contact')) {
        handleHashChange();
      }
    };
    
    // Check after a longer delay to ensure everything is loaded
    setTimeout(checkInitialHash, 500);

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Also listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleHashChange);
    
    // Create a custom event listener for programmatic hash changes
    const handleCustomHashChange = () => {
      setTimeout(handleHashChange, 50);
    };
    
    // Listen for custom hash change events
    window.addEventListener('customHashChange', handleCustomHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('customHashChange', handleCustomHashChange);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    
    if (!formRef.current) return;
    
    // Get the form data
    const formData = new FormData(formRef.current);
    
    // Add the selected service to the form data
    const serviceValue = selectedService === 'Other' ? otherService : selectedService;
    
    // Validate service selection
    if (!serviceValue) {
      setError('Please select a service');
      setLoading(false);
      return;
    }
    
    // Create template parameters for emailjs
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      service: serviceValue
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID || ''
      )
      .then(
        () => {
          setSuccess('Message sent successfully! We will get back to you soon.');
          setLoading(false);
          formRef.current?.reset();
          setSelectedService('');
          setOtherService('');
        },
        (err) => {
          console.error('EmailJS error:', err);
          setError('Failed to send message. Please try again or contact us directly.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center bg-transparent">
      {/* Responsive Animated Gradient Blobs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400 via-purple-200 to-blue-200 rounded-full blur-3xl opacity-20 animate-float-fast z-0 pointer-events-none" />
      <div className="absolute -top-24 sm:-top-32 -left-24 sm:-left-32 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-3xl opacity-40 z-0" />
      
      <motion.div
        className="relative z-10 w-full max-w-6xl lg:max-w-7xl mx-auto p-[2px] sm:p-[3px] rounded-[2rem] sm:rounded-[2.2rem] md:rounded-[2.5rem] bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.18)' }}
      >
        <div className="flex flex-col lg:flex-row bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-[1.9rem] sm:rounded-[2.1rem] md:rounded-[2.4rem] w-full h-full">
          
          {/* Enhanced Responsive Contact Info */}
          <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 flex flex-col justify-center bg-gradient-to-br from-white/60 via-purple-50 to-blue-50 dark:from-gray-900/60 dark:via-purple-900/40 dark:to-blue-900/40 rounded-[1.8rem] sm:rounded-[2rem] md:rounded-[2.2rem]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center lg:text-left drop-shadow-lg tracking-tight">
              Let's Connect
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center lg:text-left leading-relaxed">
              Ready to start your project? With 2 years of experience, I'm available for freelance work, consulting, and full-time opportunities.
            </p>
            
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl sm:rounded-2xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 dark:text-green-300 font-semibold text-sm sm:text-base lg:text-lg">Available for new projects</span>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <a href="https://www.google.com/maps/search/?api=1&query=Al+Wizarat+Riyadh+KSA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-xl sm:rounded-2xl py-2 px-3 sm:px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 via-pink-400 to-blue-400 text-white text-sm sm:text-lg md:text-xl lg:text-2xl shadow group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt />
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 underline break-words">
                  Al Wizarat, Riyadh, KSA
                </span>
              </a>
              
              <a href="mailto:er.mdsalmanuddin@gmail.com" className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-xl sm:rounded-2xl py-2 px-3 sm:px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 via-purple-400 to-blue-400 text-white text-sm sm:text-lg md:text-xl lg:text-2xl shadow group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-300 underline break-all">
                  er.mdsalmanuddin@gmail.com
                </span>
              </a>
              
              <a href="https://www.linkedin.com/in/mohammedsalmanuddin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-xl sm:rounded-2xl py-2 px-3 sm:px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 text-white text-sm sm:text-lg md:text-xl lg:text-2xl shadow group-hover:scale-110 transition-transform">
                  <FaLinkedin />
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-blue-600 dark:text-blue-300 group-hover:text-purple-600 underline break-words">
                  LinkedIn
                </span>
              </a>
              
              <a href="tel:+966510074607" className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/30 dark:bg-gray-800/40 backdrop-blur rounded-xl sm:rounded-2xl py-2 px-3 sm:px-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:rounded-none md:py-0 md:px-0 shadow-sm md:shadow-none w-full group transition-all">
                <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 text-white text-sm sm:text-lg md:text-xl lg:text-2xl shadow group-hover:scale-110 transition-transform">
                  <FaPhone />
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 underline break-all">
                  +966510074607
                </span>
              </a>
            </div>
          </div>
          
          {/* Enhanced Responsive Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center bg-white/90 dark:bg-gray-900/90 rounded-[1.8rem] sm:rounded-[2rem] md:rounded-[2.2rem] border-l border-purple-100 dark:border-purple-800"
          >
            <div className="grid gap-6 sm:gap-8 mb-6 sm:mb-8">
              
              {/* Responsive Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full px-4 sm:px-5 pt-6 sm:pt-7 pb-2 sm:pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg sm:rounded-xl bg-transparent text-base sm:text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                  placeholder=" "
                />
                <label className="absolute left-4 sm:left-5 top-1.5 sm:top-2 text-purple-400 text-sm sm:text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-6 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-purple-500">
                  Name
                </label>
              </div>
              
              {/* Responsive Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full px-4 sm:px-5 pt-6 sm:pt-7 pb-2 sm:pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg sm:rounded-xl bg-transparent text-base sm:text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                  placeholder=" "
                />
                <label className="absolute left-4 sm:left-5 top-1.5 sm:top-2 text-purple-400 text-sm sm:text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-6 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-purple-500">
                  Email
                </label>
              </div>
              
              {/* Responsive Service Selection */}
              <div className="relative">
                <select
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="peer w-full px-4 sm:px-5 pt-6 sm:pt-7 pb-2 sm:pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg sm:rounded-xl bg-transparent text-base sm:text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition appearance-none cursor-pointer"
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                      {option.label}
                    </option>
                  ))}
                </select>
                <label className="absolute left-4 sm:left-5 top-1.5 sm:top-2 text-purple-400 text-sm sm:text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-6 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-purple-500">
                  Service Required
                </label>
                <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Conditional Other Service Input */}
              {selectedService === 'Other' && (
                <div className="relative">
                  <input
                    type="text"
                    name="otherService"
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                    required
                    className="peer w-full px-4 sm:px-5 pt-6 sm:pt-7 pb-2 sm:pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg sm:rounded-xl bg-transparent text-base sm:text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                    placeholder=" "
                  />
                  <label className="absolute left-4 sm:left-5 top-1.5 sm:top-2 text-purple-400 text-sm sm:text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-6 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-purple-500">
                    Please specify service
                  </label>
                </div>
              )}
              
              {/* Responsive Subject Input */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  className="peer w-full px-4 sm:px-5 pt-6 sm:pt-7 pb-2 sm:pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg sm:rounded-xl bg-transparent text-base sm:text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition"
                  placeholder=" "
                />
                <label className="absolute left-4 sm:left-5 top-1.5 sm:top-2 text-purple-400 text-sm sm:text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-6 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-purple-500">
                  Subject
                </label>
              </div>
              
              {/* Responsive Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="peer w-full px-4 sm:px-5 pt-6 sm:pt-7 pb-2 sm:pb-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg sm:rounded-xl bg-transparent text-base sm:text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-purple-500 transition resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 sm:left-5 top-1.5 sm:top-2 text-purple-400 text-sm sm:text-base font-medium pointer-events-none transition-all peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-6 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-purple-500">
                  Message
                </label>
              </div>
            </div>
            
            {/* Responsive Submit Button */}
            <button
              type="submit"
              className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 text-white text-base sm:text-lg font-bold shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-200 mt-2"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Responsive Status Messages */}
            {success && <p className="text-green-600 text-center mt-3 sm:mt-4 text-sm sm:text-base">{success}</p>}
            {error && <p className="text-red-600 text-center mt-3 sm:mt-4 text-sm sm:text-base">{error}</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
} 