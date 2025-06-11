import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

// SVG/PNG logos (inline SVG for demo; replace with PNG if you have the files)
const TelenocLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#875A8B" />
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="22" fontFamily="Arial, sans-serif" dy=".3em">T</text>
  </svg>
);
const NetilligenceLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#2D9CDB" />
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif" dy=".3em">N</text>
  </svg>
);
const RamanaSoftLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#F2994A" />
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif" dy=".3em">R</text>
  </svg>
);

const experiences = [
  {
    title: 'Jr. Odoo Developer',
    company: 'Telenoc Org',
    period: 'March 2025 – Present',
    logo: <TelenocLogo />,
    desc: 'Developing and customizing Odoo modules, handling migrations and upgrades, and deploying solutions on Odoo.sh. Collaborating with teams to deliver tailored ERP solutions and streamline business processes.',
  },
  {
    title: 'Odoo Developer Trainee',
    company: 'Netilligence Business System LLC',
    period: 'August 2024 – January 2025',
    logo: <NetilligenceLogo />,
    desc: 'Trained in Odoo development, assisted in module customization, data migration, and client support. Gained hands-on experience in ERP implementation and business process automation.',
  },
  {
    title: 'Python Developer',
    company: 'RamanaSoft',
    period: 'Dec 2023 – May 2024',
    logo: <RamanaSoftLogo />,
    desc: 'Worked on Python-based backend solutions, contributed to API development, and supported integration projects. Enhanced code quality and participated in agile team sprints.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding container-custom w-full max-w-5xl mx-auto font-[Poppins,Inter,sans-serif]">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-purple-600 dark:text-purple-300 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-purple-300 via-purple-400 to-purple-600 rounded-full z-0" style={{ minHeight: '100%' }} />
        <div className="w-full flex flex-col gap-16 z-10">
          {experiences.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={item.title}
                className={`relative flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                {/* Card */}
                <div className={`max-w-xl w-[90%] md:w-[60%] bg-white/70 dark:bg-gray-900/80 backdrop-blur-2xl shadow-2xl rounded-3xl border border-purple-200 dark:border-purple-700 px-8 py-7 relative ${isLeft ? 'ml-0 md:ml-12' : 'mr-0 md:mr-12'} group hover:scale-[1.03] transition-transform duration-300`}
                  style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.15)' }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-extrabold text-purple-700 dark:text-purple-200 flex items-center gap-2">
                      <FaBriefcase className="text-xl text-purple-400 mr-1" />
                      {item.title}
                    </h3>
                  </div>
                  <span className="block text-sm text-purple-400 dark:text-purple-300 mb-1 font-medium tracking-wide">{item.period}</span>
                  <h4 className="text-lg font-bold mt-2 text-purple-500 dark:text-purple-200 mb-1">{item.company}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 