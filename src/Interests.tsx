import { motion } from 'framer-motion';
import { FaCode, FaGlobe } from 'react-icons/fa';
import { SiOdoo } from 'react-icons/si';
import { FaRobot, FaDatabase, FaCloud, FaBrain, FaCogs } from 'react-icons/fa';

const interests = [
  {
    icon: <FaCode size={32} className="text-purple-500" />,
    title: 'Web Development',
    desc: 'Building projects using Django and modern web technologies.',
  },
  {
    icon: <FaGlobe size={32} className="text-pink-500" />,
    title: 'Open Source',
    desc: 'Contributing to open source projects and solving real-world problems.',
  },
  {
    icon: <SiOdoo size={64} className="text-purple-400" />,
    title: 'Odoo Development',
    desc: 'Developing, customizing, and deploying Odoo ERP solutions for business automation.',
  },
  {
    icon: <FaRobot size={32} className="text-blue-500" />,
    title: 'RPA & Automation',
    desc: 'Building robotic process automation solutions to streamline business workflows.',
  },
  {
    icon: <FaDatabase size={32} className="text-green-500" />,
    title: 'Database Design',
    desc: 'Designing and optimizing database architectures for scalable applications.',
  },
  {
    icon: <FaCloud size={32} className="text-orange-500" />,
    title: 'Cloud Infrastructure',
    desc: 'Deploying and managing applications on cloud platforms like AWS and Azure.',
  },
  {
    icon: <FaBrain size={32} className="text-indigo-500" />,
    title: 'AI & Machine Learning',
    desc: 'Exploring artificial intelligence, machine learning algorithms, and data science applications.',
  },
  {
    icon: <FaCogs size={32} className="text-teal-500" />,
    title: 'System Integration',
    desc: 'Connecting different systems and APIs for seamless data flow.',
  },
];

export default function Interests() {
  return (
    <section className="relative ...">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-20 animate-float-medium z-0 pointer-events-none" />
      <section id="interests" className="section-padding container-custom">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-purple-700 dark:text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Interests
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {interests.map((item, idx) => (
            <motion.div
              key={item.title}
              className="odoo-card bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-purple-100 dark:border-purple-900 p-8 flex flex-col items-center text-center rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
} 