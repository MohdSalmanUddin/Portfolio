import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiBootstrap, SiPostgresql } from 'react-icons/si';

const OdooIcon = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#875A8B" />
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif" dy=".3em">O</text>
  </svg>
);

const skills = [
  { name: 'Odoo', icon: <OdooIcon /> },
  { name: 'Python', icon: <FaPython className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'JS', icon: <FaJsSquare className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'XML', icon: <FaCode className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'HTML', icon: <FaHtml5 className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'SQL', icon: <SiPostgresql className="w-10 h-10 md:w-12 md:h-12" /> },
];

const skillPositions = [
  { left: '7%', top: '10%' },      // Odoo
  { left: '3%', top: '55%' },     // Python
  { left: '15%', bottom: '18%' }, // JS
  { left: '10%', bottom: '7%' },  // XML
  { right: '12%', top: '13%' },   // HTML
  { right: '6%', top: '38%' },    // CSS
  { right: '14%', bottom: '15%' },// Bootstrap
  { right: '7%', bottom: '6%' },  // SQL
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
    <section id="about" className="relative flex flex-col items-center justify-center min-h-[80vh] py-10 md:py-24 bg-transparent overflow-visible">
      {/* Subtle Animated Gradient Blob (match Resume.tsx) */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-25 animate-float-medium z-0 pointer-events-none" />
      {/* Floating skill bubbles (desktop only) */}
      <div className="hidden md:block">
        {skills.map((skill, i) => (
          <motion.a
            key={skill.name}
            href={skillLinks[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-30 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg border-2 border-white/30 dark:border-purple-900/40 backdrop-blur-sm group hover:scale-110 transition-transform"
            style={{ width: '64px', height: '64px', ...skillPositions[i] }}
            custom={i}
            variants={skillBubbleVariants}
            animate="float"
            tabIndex={0}
          >
            <span className="relative flex items-center justify-center w-full h-full">
              {skill.icon}
              <span className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
                {skill.name}
              </span>
            </span>
          </motion.a>
        ))}
      </div>
      {/* Mobile: Top row of skills */}
      <div className="flex md:hidden justify-center gap-4 mb-6 w-full z-10">
        {topSkills.map((skill, i) => (
          <motion.a
            key={skill.name}
            href={topLinks[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg border-2 border-white/30 dark:border-purple-900/40 backdrop-blur-sm group hover:scale-110 transition-transform"
            style={{ width: '48px', height: '48px' }}
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
      {/* Minimalistic Elegant About Me Card with Soft Glow Aura */}
      <div className="relative z-10 w-full flex justify-center">
        {/* Soft blurred glow aura behind the card */}
        <div className="absolute -inset-6 md:-inset-8 rounded-[2.8rem] bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 blur-2xl opacity-30 z-0 pointer-events-none" />
        <div className="relative w-full max-w-3xl rounded-[2.5rem] border border-purple-100 dark:border-purple-900 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-xl px-4 sm:px-10 py-10 md:px-16 md:py-16 flex flex-col md:flex-row items-center md:justify-center gap-10 z-10 transition-colors duration-300">
          {/* Avatar beside text on desktop, above on mobile */}
          <div className="relative flex-shrink-0 flex items-center justify-center self-center md:self-center">
            <img
              src="/Images/avatar.png"
              alt="Avatar"
              className="w-20 h-28 md:w-[18rem] md:h-[24rem] object-contain z-10 select-none pointer-events-none rounded-2xl md:mr-4 my-0"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center md:ml-[-90px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 mb-6 tracking-tight leading-tight text-center md:text-left" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}>About Me</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium text-center md:text-left" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', lineHeight: 1.7 }}>
              Experienced Odoo Developer at Telenoc Org, specializing in custom module development, system migrations, and seamless Odoo.sh deployments. I excel at collaborating with teams to deliver efficient business solutions and optimize workflows. Passionate about leveraging technology to drive results and committed to continuous professional growth.
            </p>
          </div>
        </div>
      </div>
      {/* Mobile: Bottom row of skills */}
      <div className="flex md:hidden justify-center gap-4 mt-6 w-full z-10">
        {bottomSkills.map((skill, i) => (
          <motion.a
            key={skill.name}
            href={bottomLinks[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg border-2 border-white/30 dark:border-purple-900/40 backdrop-blur-sm group hover:scale-110 transition-transform"
            style={{ width: '48px', height: '48px' }}
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