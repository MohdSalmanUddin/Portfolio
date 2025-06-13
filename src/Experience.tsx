import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { FiFlag } from 'react-icons/fi';
import { TbFlag2, TbFlag2Filled } from 'react-icons/tb';
import { GiIndiaGate } from 'react-icons/gi';

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

// Helper: SVGs for country flags (for best accuracy)
const FlagSA = () => (
  <img src="https://hatscripts.github.io/circle-flags/flags/sa.svg" alt="Saudi Arabia" className="inline w-6 h-6 rounded-full border border-gray-300" />
);
const FlagOM = () => (
  <img src="https://hatscripts.github.io/circle-flags/flags/om.svg" alt="Oman" className="inline w-6 h-6 rounded-full border border-gray-300" />
);
const FlagIN = () => (
  <img src="https://hatscripts.github.io/circle-flags/flags/in.svg" alt="India" className="inline w-6 h-6 rounded-full border border-gray-300" />
);
const FlagAE = () => (
  <img src="https://hatscripts.github.io/circle-flags/flags/ae.svg" alt="UAE" className="inline w-6 h-6 rounded-full border border-gray-300" />
);

const experiences = [
  {
    title: 'Jr. Odoo Developer',
    company: 'Telenoc Org',
    period: 'March 2025 – Present',
    logo: <TelenocLogo />,
    desc: 'Developing and customizing Odoo modules, handling migrations and upgrades, and deploying solutions on Odoo.sh. Collaborating with teams to deliver tailored ERP solutions and streamline business processes.',
    url: 'https://telenoc.org/',
    branches: [
      {
        code: 'sa',
        flag: <FlagSA key="sa" />, 
        city: 'Riyadh, Saudi Arabia',
        address: 'Olaya View Tower, 2nd Floor, Office No. 4027',
        maps: 'https://www.google.com/maps/search/?api=1&query=Olaya+View+Tower+2nd+Floor+Office+No+4027+Riyadh+Saudi+Arabia',
      },
      {
        code: 'om',
        flag: <FlagOM key="om" />, 
        city: 'Muscat, Oman',
        address: 'Office 14, Al Kawther Building, Muscat, Oman',
        maps: 'https://www.google.com/maps/search/?api=1&query=Office+14+Al+Kawther+Building+Muscat+Oman',
      },
      {
        code: 'in',
        flag: <FlagIN key="in" />, 
        city: 'India',
        address: 'India Branch',
        maps: 'https://www.google.com/maps/search/?api=1&query=India',
      },
      {
        code: 'ae',
        flag: <FlagAE key="ae" />, 
        city: 'Dubai, UAE',
        address: 'Office M01A, Saleh Bin Lahej Building, Al Garhoud, Dubai, UAE',
        maps: 'https://www.google.com/maps/search/?api=1&query=Office+M01A+Saleh+Bin+Lahej+Building+Al+Garhoud+Dubai+UAE',
      },
    ],
  },
  {
    title: 'Odoo Developer Trainee',
    company: 'Netilligence Business System LLC',
    period: 'August 2024 – January 2025',
    logo: <NetilligenceLogo />,
    desc: 'Trained in Odoo development, assisted in module customization, data migration, and client support. Gained hands-on experience in ERP implementation and business process automation.',
    url: 'https://www.netilligence.io/',
    branches: [
      {
        code: 'ae',
        flag: <FlagAE key="ae" />, 
        city: 'Dubai, UAE',
        address: 'Office M01A, Saleh Bin Lahej Building, Al Garhoud, Dubai, UAE',
        maps: 'https://www.google.com/maps/search/?api=1&query=Office+M01A+Saleh+Bin+Lahej+Building+Al+Garhoud+Dubai+UAE',
      },
      {
        code: 'sa',
        flag: <FlagSA key="sa" />, 
        city: 'Jeddah, Saudi Arabia',
        address: 'Al Okaily Center, King Fahad Street, Jeddah, KSA',
        maps: 'https://www.google.com/maps/search/?api=1&query=Al+Okaily+Center+King+Fahad+Street+Jeddah+KSA',
      },
      {
        code: 'om',
        flag: <FlagOM key="om" />, 
        city: 'Muscat, Oman',
        address: 'Office 14, Al Kawther Building, Muscat, Oman',
        maps: 'https://www.google.com/maps/search/?api=1&query=Office+14+Al+Kawther+Building+Muscat+Oman',
      },
      {
        code: 'in',
        flag: <FlagIN key="in" />, 
        city: 'Kozhikode, Kerala, India',
        address: 'Keddhar Towers, Tali Rd, Puthiyapalam, Palayam, Kozhikode, Kerala 673002, India',
        maps: 'https://www.google.com/maps/search/?api=1&query=Keddhar+Towers+Tali+Rd+Puthiyapalam+Palayam+Kozhikode+Kerala+673002+India',
      },
    ],
  },
  {
    title: 'Python Developer',
    company: 'RamanaSoft',
    period: 'Dec 2023 – May 2024',
    logo: <RamanaSoftLogo />,
    desc: 'Worked on Python-based backend solutions, contributed to API development, and supported integration projects. Enhanced code quality and participated in agile team sprints.',
    url: 'https://ramanasoft.com/',
    branches: [
      {
        code: 'in',
        flag: <FlagIN key="in" />, 
        city: 'India',
        address: 'India Branch',
        maps: 'https://www.google.com/maps/search/?api=1&query=India',
      },
    ],
  },
];

// Branch locations for each company/country
const branchLocations = {
  'Telenoc Org': {
    'sa': { city: 'Riyadh, Saudi Arabia', address: '101 / 103 / 107 / 105 / 999, Riyadh, Saudi Arabia', maps: 'https://www.google.com/maps?q=Riyadh,+Saudi+Arabia' },
    'om': { city: 'Muscat, Oman', address: 'Office 14, Al Kawther Building, Muscat, Oman', maps: 'https://www.google.com/maps?q=Muscat,+Oman' },
    'in': { city: 'India', address: 'India Branch', maps: 'https://www.google.com/maps?q=India' },
    'ae': { city: 'Dubai, UAE', address: 'Office M01A, Saleh Bin Lahej Building, Al Garhoud, Dubai, UAE', maps: 'https://www.google.com/maps?q=Dubai,+UAE' },
  },
  'Netilligence Business System LLC': {
    'ae': { city: 'Dubai, UAE', address: 'Office M01A, Saleh Bin Lahej Building, Al Garhoud, Dubai, UAE', maps: 'https://www.google.com/maps?q=Dubai,+UAE' },
    'sa': { city: 'Jeddah, Saudi Arabia', address: 'Al Okaily Center, King Fahad Street, Jeddah, KSA', maps: 'https://www.google.com/maps?q=Jeddah,+Saudi+Arabia' },
    'om': { city: 'Muscat, Oman', address: 'Office 14, Al Kawther Building, Muscat, Oman', maps: 'https://www.google.com/maps?q=Muscat,+Oman' },
    'in': { city: 'India', address: 'India Branch', maps: 'https://www.google.com/maps?q=India' },
  },
  'RamanaSoft': {
    'in': { city: 'India', address: 'India Branch', maps: 'https://www.google.com/maps?q=India' },
  },
};

export default function Experience() {
  const [modal, setModal] = useState<{ company: string; branch: any } | null>(null);
  return (
    <section id="experience" className="section-padding container-custom w-full max-w-5xl mx-auto font-[Poppins,Inter,sans-serif] relative">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-25 animate-float-medium z-0 pointer-events-none" />
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
                  <h4 className="text-lg font-bold mt-2 text-purple-500 dark:text-purple-200 mb-1 flex items-center gap-2">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-700 dark:hover:text-purple-300 transition-colors">{item.company}</a>
                    <span className="ml-2 flex items-center gap-1">
                      {item.branches.map((branch, i) => (
                        <span key={branch.code} className="cursor-pointer" onClick={() => setModal({ company: item.company, branch })}>{branch.flag}</span>
                      ))}
                    </span>
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Modal Popup for branch location */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2" onClick={() => setModal(null)}>
            <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-200 dark:border-purple-700 w-full max-w-md p-8 flex flex-col items-center text-center animate-fade-in" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-purple-500 dark:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-2 shadow hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors" onClick={() => setModal(null)} aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-200 mb-2">{modal.company} Branch</h3>
              <div className="mb-2 text-lg font-semibold text-purple-500 dark:text-purple-300">{modal.branch.city}</div>
              <div className="mb-4 text-gray-700 dark:text-gray-200">{modal.branch.address}</div>
              <a href={modal.branch.maps} target="_blank" rel="noopener noreferrer" className="odoo-btn mt-2 text-base px-6 py-2">Get Directions</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 