import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaBook } from 'react-icons/fa';

const education = [
  {
    degree: 'Masters In Technology',
    period: 'Pursuing',
    school: <a href="https://www.islec.edu.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline hover:text-purple-600">ISL Engineering College</a>,
    desc: 'Currently pursuing a Master of Technology at ISL Engineering College, focusing on advanced engineering concepts and research.',
    icon: <FaGraduationCap className="text-2xl text-white" />,
  },
  {
    degree: 'Bachelor of Technology',
    period: 'July 2019 - July 2023',
    school: <a href="https://scet.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline hover:text-purple-600">Shadan College Of Engineering And Technology</a>,
    desc: 'Affiliated to Jawaharlal Nehru Institute And Technological University, one of the best colleges in Hyderabad.',
    icon: <FaUniversity className="text-2xl text-white" />,
  },
  {
    degree: 'Intermediate Education',
    period: 'June 2017 - May 2019',
    school: <a href="https://www.narayanajuniorcolleges.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline hover:text-purple-600">Narayana Junior College</a>,
    desc: "Asia's esteemed power house for competitive courses, equipping students for global fields.",
    icon: <FaBook className="text-2xl text-white" />,
  },
  {
    degree: 'Secondary Education',
    period: 'June 2016 - May 2017',
    school: <a href="https://vipinternationalschool.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline hover:text-purple-600">VIP's International School</a>,
    desc: 'Nurtured a galaxy of brilliant children who have brought laurels and glory to the school.',
    icon: <FaSchool className="text-2xl text-white" />,
  },
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding container-custom w-full max-w-6xl mx-auto font-[Poppins,Inter,sans-serif] relative">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-25 animate-float-medium z-0 pointer-events-none" />
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-purple-700 dark:text-purple-300 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <div className="relative w-full flex flex-col items-center">
        {/* Horizontal timeline line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-400 rounded-full z-0" style={{ minWidth: '100%' }} />
        {/* Vertical timeline line (mobile) */}
        <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-300 via-pink-300 to-blue-400 rounded-full z-0" style={{ minHeight: '100%' }} />
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8 z-10">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              className="relative flex flex-col items-center md:w-1/4 w-full group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              {/* Node */}
              <div className="z-20 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 shadow-xl border-4 border-white dark:border-gray-900 mb-4 md:mb-8" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                {item.icon}
              </div>
              {/* Popover Card */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-2xl rounded-3xl border border-purple-200 dark:border-purple-700 px-6 py-6 md:min-w-[260px] min-w-[200px] text-center -mt-4 md:-mt-8 group-hover:scale-[1.04] transition-transform duration-300 flex flex-col items-center justify-center w-full md:w-auto mx-auto" style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.13)', minWidth: 'unset', maxWidth: '300px', height: 'auto' }}>
                <h3 className="text-xl font-extrabold text-purple-700 dark:text-purple-200 mb-1 text-center">{item.degree}</h3>
                <span className="block text-xs text-pink-500 dark:text-pink-300 mb-1 font-medium tracking-wide text-center">{item.period}</span>
                <h4 className="text-base font-bold mt-1 text-blue-500 dark:text-blue-200 mb-1 text-center">{item.school}</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed text-xs text-center">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 