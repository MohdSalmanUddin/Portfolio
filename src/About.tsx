import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiBootstrap, SiPostgresql } from 'react-icons/si';

const OdooIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#875A8B" />
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif" dy=".3em">O</text>
  </svg>
);

const skills = [
  { name: 'Odoo', icon: <OdooIcon /> },
  { name: 'Python', icon: <FaPython className="w-12 h-12" /> },
  { name: 'JS', icon: <FaJsSquare className="w-12 h-12" /> },
  { name: 'XML', icon: <FaCode className="w-12 h-12" /> },
  { name: 'HTML', icon: <FaHtml5 className="w-12 h-12" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-12 h-12" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-12 h-12" /> },
  { name: 'SQL', icon: <SiPostgresql className="w-12 h-12" /> },
];

// More scattered/random positions for each skill icon
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

export default function About() {
  return (
    <section id="about" className="section-padding container-custom flex justify-center items-center min-h-[70vh] font-[Montserrat,Poppins,Inter,sans-serif] relative overflow-visible">
      {/* Gradient Blob Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 rounded-full blur-3xl opacity-70 z-0" />
      {/* Skill Icons: Scattered/Random Positions */}
      {skills.map((skill, i) => (
        <motion.span
          key={skill.name}
          className="absolute z-30 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg border-2 border-white/30 dark:border-purple-900/40 backdrop-blur-sm"
          style={{ width: '64px', height: '64px', ...skillPositions[i] }}
          custom={i}
          variants={skillBubbleVariants}
          animate="float"
        >
          {skill.icon}
        </motion.span>
      ))}
      {/* Main Content Row */}
      <div className="relative z-10 flex flex-row items-center justify-center w-full max-w-4xl min-h-[400px]">
        {/* Glassmorphic Panel */}
        <motion.div
          className="flex-1 bg-white/70 dark:bg-gray-900/40 backdrop-blur-2xl rounded-3xl shadow-2xl px-10 py-12 md:px-16 md:py-16 flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.13)' }}
        >
          <h2 className="text-5xl font-extrabold text-purple-700 dark:text-purple-200 mb-6 drop-shadow-md tracking-tight leading-tight" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}>About Me</h2>
          <p className="text-xl mb-0 text-gray-800 dark:text-gray-300 leading-relaxed font-medium" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', lineHeight: 1.7 }}>
            I am a dedicated Odoo Developer currently working full-time at Telenoc Org, where I specialize in designing and implementing custom modules, performing complex migrations and upgrades, and ensuring seamless deployments on Odoo.sh. My role involves collaborating with cross-functional teams to deliver tailored business solutions, optimize workflows, and support ongoing system enhancements. I am passionate about leveraging my technical expertise to drive organizational success and am committed to continuous learning in the ever-evolving Odoo ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 