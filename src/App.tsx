import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTimes, FaBars } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
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
import Services from './Services';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#project' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['home', 'about', 'services', 'project', 'experience', 'contact'];

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme');
    if (theme) return theme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

const App = () => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [navShadow, setNavShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Persist theme in localStorage
  useEffect(() => {
    // On mount, check localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Update localStorage and html class on theme change
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

  // Handle navigation clicks
  const handleNavClick = (href: string, isMobile: boolean = false) => {
    // Close mobile menu only after a short delay to allow smooth scrolling
    if (isMobile) {
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 300); // Small delay to allow smooth scroll to start
    } else {
      setMobileMenuOpen(false);
    }
    
    // Smooth scroll to section
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark bg-gray-950' : 'bg-white'} overflow-x-hidden`}>
      {/* Enhanced Responsive Glassmorphic Navbar */}
      <nav className={`fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gradient-to-r from-purple-400 via-pink-300 to-blue-400 dark:from-purple-900 dark:via-purple-700 dark:to-blue-900 transition-all duration-300 ${navShadow ? 'shadow-2xl' : ''}`}
        style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)', borderImage: 'linear-gradient(90deg, #a259c4 0%, #f06292 50%, #64b5f6 100%) 1' }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 w-full">
            {/* Logo (left) */}
            <div className="flex-shrink-0 flex items-center">
              <motion.span 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 select-none cursor-pointer relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
                }}
                style={{
                  backgroundImage: 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                }}
              >
                Software Engineer
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </motion.span>
            </div>

            {/* Nav Links (center, hidden on mobile) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-baseline space-x-2 xl:space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, false);
                    }}
                    className={`px-2 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-300 relative group overflow-hidden
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

            {/* Toggler and Hamburger (right) */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Theme toggler */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative w-12 h-6 lg:w-14 lg:h-7 flex items-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 shadow-lg border-2 border-white/20 dark:border-gray-900/40 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-purple-400 group"
                aria-label="Toggle theme"
                style={{ minWidth: '48px', padding: 0 }}
              >
                {/* Sun Icon (left) */}
                <span className="absolute left-1.5 lg:left-2 top-1/2 -translate-y-1/2 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 lg:w-4 lg:h-4 transition-all duration-300 ${!darkMode ? 'opacity-100 scale-110' : 'opacity-60 scale-90'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                {/* Moon Icon (right) */}
                <span className="absolute right-1.5 lg:right-2 top-1/2 -translate-y-1/2 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 lg:w-4 lg:h-4 transition-all duration-300 ${darkMode ? 'opacity-100 scale-110' : 'opacity-60 scale-90'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                </span>
                {/* Slider Thumb */}
                <span
                  className={`absolute top-1/2 -translate-y-1/2 z-20 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-md border-2 border-purple-200 dark:border-purple-700 transition-all duration-500 flex items-center justify-center ${darkMode ? 'right-0.5 lg:right-1' : 'left-0.5 lg:left-1'}`}
                  style={{ boxShadow: '0 2px 8px 0 rgba(130, 88, 159, 0.18)' }}
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4 text-purple-400 transition-all duration-300 scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 transition-all duration-300 scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </span>
              </button>

              {/* Enhanced Hamburger for mobile */}
              <button
                className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 border border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTimes className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Nav Links with Animation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="lg:hidden w-full mt-2"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-purple-100 dark:border-purple-800">
                  <div className="grid grid-cols-2 gap-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href, true);
                        }}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative group overflow-hidden text-center
                          ${activeSection === item.href.replace('#', '')
                            ? 'text-purple-700 dark:text-purple-200 bg-purple-50 dark:bg-purple-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/10'}
                        `}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 rounded-full transition-all duration-300
                          ${activeSection === item.href.replace('#', '') ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}></span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Enhanced Responsive Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-24">
        {/* Responsive Animated Gradient Blob */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-25 animate-float-slow z-0 pointer-events-none" />
        
        {/* Centered Floating Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h5
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-purple-500 dark:text-purple-300 mb-3 sm:mb-4 lg:mb-6 tracking-widest font-semibold uppercase text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AVAILABLE FOR FREELANCE & FULL-TIME
          </motion.h5>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight drop-shadow-lg text-center bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Mohammed Salman Uddin
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-12 font-medium text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Odoo Developer & Full Stack Engineer | Delivering Enterprise Solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl justify-center items-center landscape-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Mohammed%20Salman%20Uddin.pdf"
              download
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 md:py-4 lg:py-4 xl:py-5 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-bold shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-center"
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact?action=hire"
              onClick={(e) => {
                e.preventDefault();
                // Set the hash first
                window.location.hash = '#contact?action=hire';
                
                // Dispatch custom event to ensure Contact component detects the change
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent('customHashChange'));
                  console.log('Custom hash change event dispatched for hire');
                }, 100);
                
                // Then scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto bg-transparent border-2 border-purple-400 text-purple-600 dark:text-purple-300 rounded-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 md:py-4 lg:py-4 xl:py-5 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-bold shadow-2xl hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-center"
            >
              💼 Hire Me
            </motion.a>
          </motion.div>

          {/* Enhanced Responsive Social Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl landscape-optimized">
            <motion.a 
              href="https://github.com/MohdSalmanUddin" 
              className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 bg-white/80 dark:bg-gray-800/80 rounded-full p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mohammedsalmanuddin" 
              className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 bg-white/80 dark:bg-gray-800/80 rounded-full p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={20} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </motion.a>

            <motion.a 
              href="https://www.upwork.com/freelancers/~01294ae0bedb9ef675?mp_source=share" 
              className="text-green-600 hover:text-green-700 dark:hover:text-green-400 bg-white/80 dark:bg-gray-800/80 rounded-full p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiUpwork size={20} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </motion.a>
            <motion.a 
              href="https://www.fiverr.com/s/e6A8x9D" 
              className="text-green-600 hover:text-green-700 dark:hover:text-green-400 bg-white/80 dark:bg-gray-800/80 rounded-full p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiFiverr size={20} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </motion.a>
          </div>
        </div>

        {/* Enhanced Responsive Curved SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20">
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
      <Services />
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