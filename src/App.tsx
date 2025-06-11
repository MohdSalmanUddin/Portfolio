import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Interests from './Interests';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Experience from './Experience';
import { loadAll } from "@tsparticles/all";
import Project from './Project';
import Blog from './Blog';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#project' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['home', 'about', 'project', 'contact'];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setNavShadow(window.scrollY > 10);
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark bg-gray-950' : 'bg-white'}`}>
      {/* Fancy Glassmorphic Navbar */}
      <nav className={`fixed w-full z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-gradient-to-r from-purple-400 via-pink-300 to-blue-400 dark:from-purple-900 dark:via-purple-700 dark:to-blue-900 transition-shadow ${navShadow ? 'shadow-2xl' : ''}`}
        style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)', borderImage: 'linear-gradient(90deg, #a259c4 0%, #f06292 50%, #64b5f6 100%) 1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 dark:from-purple-300 dark:via-pink-300 dark:to-blue-300 select-none">OdooDev</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors relative group overflow-hidden
                      ${activeSection === item.href.replace('#', '')
                        ? 'text-purple-700 dark:text-purple-200'
                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-200'}
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className={`absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 rounded-full transition-all duration-300
                      ${activeSection === item.href.replace('#', '') ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}></span>
                  </a>
                ))}
              </div>
            </div>
            {/* Modern Slider Theme Toggler */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-16 h-8 flex items-center px-1 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 shadow-lg border-2 border-white/20 dark:border-gray-900/40 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-purple-400 group"
              aria-label="Toggle theme"
              style={{ minWidth: '64px' }}
            >
              {/* Sun Icon (left) */}
              <span className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-all duration-300 ${!darkMode ? 'opacity-100 scale-110' : 'opacity-60 scale-90'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              {/* Moon Icon (right) */}
              <span className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-all duration-300 ${darkMode ? 'opacity-100 scale-110' : 'opacity-60 scale-90'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              </span>
              {/* Slider Thumb */}
              <span
                className={`absolute top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-md border-2 border-purple-200 dark:border-purple-700 transition-all duration-500 flex items-center justify-center ${darkMode ? 'right-1' : 'left-1'}`}
                style={{ boxShadow: '0 2px 8px 0 rgba(130, 88, 159, 0.18)' }}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-400 transition-all duration-300 scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400 transition-all duration-300 scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Animated Gradient Hero Section */}
      <section id="home" className="relative h-[95vh] flex items-center justify-center overflow-hidden pt-16 md:pt-24">
        {/* Animated Gradient Circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-60 animate-float-slow z-0" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-50 animate-float-medium z-0" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-400 via-purple-200 to-blue-200 rounded-full blur-3xl opacity-40 animate-float-fast z-0" />
        {/* Centered Floating Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          <motion.h5
            className="text-lg text-purple-500 dark:text-purple-300 mb-4 tracking-widest font-semibold uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HELLO, WORLD.
          </motion.h5>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-lg text-center bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Mohammed Salman Uddin
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Odoo Developer & Full Stack Engineer
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            href="#about"
            className="odoo-btn mt-2 text-lg px-8 py-3 shadow-xl animate-pulse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            More About Me
          </motion.a>
          {/* Social Links */}
          <div className="flex space-x-8 mt-10">
            <a href="https://github.com/Salmanuddin-Training" className="text-purple-400 hover:text-purple-700 dark:hover:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-3 shadow-lg transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/mohammedsalmanuddin" className="text-purple-400 hover:text-purple-700 dark:hover:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-3 shadow-lg transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href="https://www.instagram.com/perksofbeingrealistic.in/" className="text-purple-400 hover:text-purple-700 dark:hover:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-3 shadow-lg transition-colors">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
        {/* Curved SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-16">
            {/* First slim wave */}
            <path d="M0 30 Q360 60 720 30 T1440 30" stroke="url(#wave1)" strokeWidth="4" fill="none" />
            {/* Second slim wave, offset and lighter */}
            <path d="M0 40 Q360 10 720 40 T1440 40" stroke="url(#wave2)" strokeWidth="3" fill="none" opacity="0.7" />
            {/* Third slim wave, further offset and more transparent */}
            <path d="M0 50 Q360 70 720 50 T1440 50" stroke="url(#wave3)" strokeWidth="2" fill="none" opacity="0.5" />
            <defs>
              <linearGradient id="wave1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a259c4" />
                <stop offset="0.5" stopColor="#f06292" />
                <stop offset="1" stopColor="#64b5f6" />
              </linearGradient>
              <linearGradient id="wave2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f06292" />
                <stop offset="1" stopColor="#a259c4" />
              </linearGradient>
              <linearGradient id="wave3" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#64b5f6" />
                <stop offset="1" stopColor="#a259c4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Interests />
      <Experience />
      <section id="project">
        <Project />
      </section>
      <Resume />
      <Blog />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App; 