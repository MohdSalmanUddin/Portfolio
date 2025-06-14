import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const projects = [
  {
    title: 'Odoo Developer',
    type: 'Training',
    image: '/Images/portfolio/odoo_training.jpg',
    link: '#',
  },
  {
    title: 'AWS',
    type: 'Training',
    image: '/Images/portfolio/aws_devops.jpg',
    link: '#',
  },
  {
    title: 'Data Analysis',
    type: 'Training',
    image: '/Images/portfolio/data_analysis.jpg',
    link: '#',
  },
  {
    title: 'Python Full Stack Developer',
    type: 'Training',
    image: '/Images/portfolio/tata cert.jpg',
    link: '#',
  },
  {
    title: 'Zero Trust Certified Associate',
    type: 'Certification',
    image: '/Images/portfolio/ZTCA.png',
    link: '#',
  },

];

export default function Portfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="portfolio" className="section-padding container-custom relative overflow-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles-portfolio"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 30 },
            color: { value: '#a259c4' },
            shape: { type: 'circle' },
            opacity: { value: 0.18 },
            size: { value: { min: 1, max: 6 } },
            move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'out' } },
            links: { enable: true, distance: 150, color: '#a259c4', opacity: 0.18, width: 1 },
          },
        }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-purple-700 dark:text-purple-300 drop-shadow-lg z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title + idx}
            className="odoo-card group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotateY: 8, scale: 1.04 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ perspective: 1000 }}
            onClick={() => setOpenIdx(idx)}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded-t-2xl" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 to-pink-400/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 rounded-2xl">
              <span className="text-lg font-semibold mb-2">{proj.type}</span>
              <button className="odoo-btn mt-2">Preview</button>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1 text-purple-700 dark:text-purple-300">{proj.title}</h3>
              <span className="text-sm text-purple-400 dark:text-purple-200">{proj.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal Popup for Portfolio Image */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-200 dark:border-purple-700 max-w-2xl w-full p-6 md:p-12 flex flex-col items-center text-center animate-fade-in"
            style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.18)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 flex gap-2">
              {/* Download Button */}
              <a
                href={projects[openIdx].image}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="text-purple-500 dark:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-2 shadow hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors"
                aria-label="Download Image"
                onClick={e => e.stopPropagation()}
              >
                <FaDownload className="w-5 h-5" />
              </a>
              {/* Close Button */}
              <button
                className="text-purple-500 dark:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-2 shadow hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <img src={projects[openIdx].image} alt={projects[openIdx].title} className="w-full max-h-[32rem] object-contain rounded-2xl mb-6" />
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-200 mb-2">{projects[openIdx].title}</h3>
            <span className="text-lg text-purple-400 dark:text-purple-200 mb-2">{projects[openIdx].type}</span>
          </div>
        </div>
      )}
    </section>
  );
} 