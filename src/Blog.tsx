import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const blogs = [
  {
    title: 'How To Load JS Function In Menu Item Click In Odoo 18',
    url: 'https://www.netilligence.io/blog/how-to-load-js-function-in-menu-item-click-in-odoo-18/',
    desc: 'Learn how to trigger custom JavaScript functions from Odoo 18 menu items, including XML, client actions, and JS integration for dynamic UI enhancements.'
  },
  {
    title: 'What Are the Different Types of Hooks in Odoo 18?',
    url: 'https://www.netilligence.io/blog/what-are-the-different-types-of-hooks-in-odoo-18/',
    desc: 'Explore pre-init, post-init, uninstall, and post-load hooks in Odoo 18, with practical examples for module lifecycle customization.'
  },
  {
    title: 'What Are the Most Useful Browser Extensions for Odoo Developers?',
    url: 'https://www.netilligence.io/blog/what-are-the-most-useful-browser-extensions-for-odoo-developers/',
    desc: 'A curated list of browser extensions that boost productivity and streamline Odoo development workflows.'
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding container-custom w-full max-w-5xl mx-auto font-[Poppins,Inter,sans-serif] relative">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-30 animate-float-slow z-0 pointer-events-none" />
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-purple-700 dark:text-purple-300 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.title}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-xl rounded-3xl border border-purple-200 dark:border-purple-700 p-8 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-200 mb-3">{blog.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{blog.desc}</p>
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="odoo-btn flex items-center gap-2 w-max"
            >
              Read More <FaExternalLinkAlt className="inline-block" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 