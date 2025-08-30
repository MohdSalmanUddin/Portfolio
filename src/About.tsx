import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiBootstrap, SiPostgresql } from 'react-icons/si';

const OdooIcon = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#875A8B" />
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif" dy=".3em">O</text>
  </svg>
);

const skills = [
  { name: 'Odoo', icon: <OdooIcon /> },
  { name: 'Python', icon: <FaPython className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> },
  { name: 'JS', icon: <FaJsSquare className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> },
  { name: 'XML', icon: <FaCode className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> },
  { name: 'HTML', icon: <FaHtml5 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> },
  { name: 'SQL', icon: <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" /> },
];

// Responsive skill positions for different screen sizes
const skillPositions = [
  { left: '5%', top: '8%', right: 'auto', bottom: 'auto' },      // Odoo
  { left: '2%', top: '50%', right: 'auto', bottom: 'auto' },     // Python
  { left: '12%', bottom: '15%', right: 'auto', top: 'auto' },    // JS
  { left: '8%', bottom: '5%', right: 'auto', top: 'auto' },      // XML
  { right: '10%', top: '10%', left: 'auto', bottom: 'auto' },    // HTML
  { right: '5%', top: '35%', left: 'auto', bottom: 'auto' },     // CSS
  { right: '12%', bottom: '12%', left: 'auto', top: 'auto' },    // Bootstrap
  { right: '6%', bottom: '4%', left: 'auto', top: 'auto' },      // SQL
];

const skillBubbleVariants: Variants = {
  float: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3 + i * 0.2,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut',
    },
  }),
};

const skillLinks = [
  'https://www.odoo.com/',
  'https://www.python.org/',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'https://en.wikipedia.org/wiki/XML',
  'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'https://getbootstrap.com/',
  'https://www.postgresql.org/',
];

export default function About() {
  // Split skills for mobile rows
  const topSkills = skills.slice(0, 4);
  const bottomSkills = skills.slice(4);
  const topLinks = skillLinks.slice(0, 4);
  const bottomLinks = skillLinks.slice(4);
  
  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-[80vh] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-transparent overflow-visible">
      {/* Responsive Animated Gradient Blob */}
      <div className="absolute top-8 sm:top-10 right-8 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-25 animate-float-medium z-0 pointer-events-none" />
      
      {/* Floating skill bubbles (desktop only) */}
      <div className="hidden lg:block">
        {skills.map((skill, i) => (
          <motion.a
            key={skill.name}
            href={skillLinks[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-30 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg border-2 border-white/30 dark:border-purple-900/40 backdrop-blur-sm group hover:scale-110 transition-transform"
            style={{ 
              width: 'clamp(48px, 4vw, 64px)', 
              height: 'clamp(48px, 4vw, 64px)', 
              ...skillPositions[i] 
            }}
            custom={i}
            variants={skillBubbleVariants}
            animate="float"
            tabIndex={0}
          >
            <span className="relative flex items-center justify-center w-full h-full">
              {skill.icon}
              <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
                {skill.name}
              </span>
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile: Top row of skills */}
      <div className="flex lg:hidden justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 w-full z-10 px-4">
        {topSkills.map((skill, i) => (
          <motion.a
            key={skill.name}
            href={topLinks[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg border-2 border-white/30 dark:border-purple-900/40 backdrop-blur-sm group hover:scale-110 transition-transform"
            style={{ width: 'clamp(40px, 10vw, 56px)', height: 'clamp(40px, 10vw, 56px)' }}
            tabIndex={0}
            custom={i}
            variants={skillBubbleVariants}
            animate="float"
          >
            {skill.icon}
            <span className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
              {skill.name}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Enhanced Responsive About Me Card */}
      <div className="relative z-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        {/* Responsive Soft blurred glow aura behind the card */}
        <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-[2rem] sm:rounded-[2.4rem] md:rounded-[2.8rem] bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 blur-2xl opacity-30 z-0 pointer-events-none" />
        
        <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl rounded-[2rem] sm:rounded-[2.2rem] md:rounded-[2.5rem] border border-purple-100 dark:border-purple-900 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col lg:flex-row items-center lg:justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 z-10 transition-colors duration-300">
          
          {/* Responsive Avatar */}
          <div className="relative flex-shrink-0 flex items-center justify-center self-center lg:self-center">
            <img
              src="/Images/avatar.png"
              alt="Avatar"
              className="w-16 h-20 sm:w-20 sm:h-28 md:w-24 md:h-32 lg:w-[16rem] lg:h-[20rem] xl:w-[18rem] xl:h-[24rem] object-contain z-10 select-none pointer-events-none rounded-2xl lg:mr-4 my-0"
            />
          </div>
          
          {/* Responsive Content */}
          <div className="flex-1 flex flex-col justify-center lg:ml-[-60px] xl:ml-[-90px] text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 mb-4 sm:mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}>
              About Me
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium leading-relaxed" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', lineHeight: 1.7 }}>
              Full-stack developer with 2 years of experience in Python, JavaScript, Odoo, and web technologies. Specializing in custom modules, system integrations, and web applications.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium mt-3 sm:mt-4 leading-relaxed" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', lineHeight: 1.6 }}>
              <strong>Freelance Focus:</strong> Available for ERP development, web applications, database solutions, and system integrations.
            </p>
            
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-purple-600 dark:text-purple-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                <span>✅ Available for freelance projects and consulting</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-purple-600 dark:text-purple-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                <span>🚀 2+ years of development experience</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-purple-600 dark:text-purple-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                <span>💼 Focused on business solutions</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-purple-600 dark:text-purple-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                <span>🌍 Remote work & international projects</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-purple-600 dark:text-purple-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                <span>⚡ Fast turnaround & reliable delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Bottom row of skills */}
      <div className="flex lg:hidden justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 w-full z-10 px-4">
        {bottomSkills.map((skill, i) => (
          <motion.a
            key={skill.name}
            href={bottomLinks[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg border-2 border-white/30 dark:border-purple-900/40 backdrop-blur-sm group hover:scale-110 transition-transform"
            style={{ width: 'clamp(40px, 10vw, 56px)', height: 'clamp(40px, 10vw, 56px)' }}
            tabIndex={0}
            custom={i+4}
            variants={skillBubbleVariants}
            animate="float"
          >
            {skill.icon}
            <span className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
              {skill.name}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
} 