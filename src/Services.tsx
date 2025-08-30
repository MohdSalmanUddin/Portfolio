import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaCogs, FaRobot } from 'react-icons/fa';
import { SiOdoo, SiPython, SiJavascript, SiPostgresql, SiDocker, SiAmazonwebservices, SiUipath, SiHtml5, SiCss3 } from 'react-icons/si';

const services = [
  {
    icon: <SiOdoo className="text-4xl text-purple-500" />,
    title: 'Odoo Development',
    description: 'Custom module development, system customization, and ERP solutions tailored to your business needs.',
    features: [
      'Custom Module Development',
      'System Integration & APIs',
      'Workflow Automation',
      'Report Generation',
      'Data Migration',
      'Performance Optimization'
    ],
    pricing: 'From $45/hour',
    category: 'ERP Development'
  },
  {
    icon: <FaCode className="text-4xl text-blue-500" />,
    title: 'Full-Stack Development',
    description: 'Full-stack web application development using modern technologies and best practices.',
    features: [
      'Frontend Development (React/Vue)',
      'Backend APIs (Python/Django)',
      'Database Design & Optimization',
      'RESTful API Development',
      'Third-party Integrations',
      'Deployment & DevOps'
    ],
    pricing: 'From $40/hour',
    category: 'Web Development'
  },
  {
    icon: <FaDatabase className="text-4xl text-green-500" />,
    title: 'Database Solutions',
    description: 'Database design, optimization, and management for scalable applications.',
    features: [
      'Database Architecture Design',
      'Performance Tuning',
      'Data Migration & ETL',
      'Backup & Recovery',
      'Security Implementation',
      'Monitoring & Maintenance'
    ],
    pricing: 'From $45/hour',
    category: 'Database'
  },
  {
    icon: <FaCloud className="text-4xl text-orange-500" />,
    title: 'Cloud Infrastructure',
    description: 'Cloud deployment, scaling, and infrastructure management for your applications.',
    features: [
      'AWS/Azure/GCP Setup',
      'Container Orchestration',
      'CI/CD Pipeline Setup',
      'Auto-scaling Configuration',
      'Monitoring & Logging',
      'Cost Optimization'
    ],
    pricing: 'From $50/hour',
    category: 'DevOps'
  },
  {
    icon: <FaRobot className="text-4xl text-pink-500" />,
    title: 'UiPath RPA Solutions',
    description: 'Robotic Process Automation solutions to streamline business workflows.',
    features: [
      'Process Automation Design',
      'Workflow Development',
      'Bot Deployment & Management',
      'Integration with Business Systems',
      'Performance Monitoring',
      'Maintenance & Optimization'
    ],
    pricing: 'From $45/hour',
    category: 'RPA Development'
  },
  {
    icon: <FaCogs className="text-4xl text-indigo-500" />,
    title: 'System Integration',
    description: 'Seamless integration between different systems and third-party services.',
    features: [
      'API Development & Integration',
      'Third-party Service Integration',
      'Data Synchronization',
      'Webhook Implementation',
      'Error Handling & Monitoring',
      'Documentation & Testing'
    ],
    pricing: 'From $45/hour',
    category: 'Integration'
  }
];

const technologies = [
  { 
    name: 'Odoo', 
    icon: <SiOdoo className="text-2xl" />,
    url: 'https://www.odoo.com/documentation/18.0/developer.html',
    description: 'Enterprise Resource Planning (ERP) platform for business management'
  },
  { 
    name: 'Python', 
    icon: <SiPython className="text-2xl" />,
    url: 'https://www.python.org/doc/',
    description: 'High-level programming language for web development and automation'
  },
  { 
    name: 'JavaScript', 
    icon: <SiJavascript className="text-2xl" />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    description: 'Dynamic programming language for web development and interactivity'
  },
  { 
    name: 'React', 
    icon: <FaCode className="text-2xl" />,
    url: 'https://react.dev/learn',
    description: 'JavaScript library for building user interfaces and single-page applications'
  },
  { 
    name: 'PostgreSQL', 
    icon: <SiPostgresql className="text-2xl" />,
    url: 'https://www.postgresql.org/docs/',
    description: 'Advanced open-source relational database management system'
  },
  { 
    name: 'UiPath', 
    icon: <FaRobot className="text-2xl" />,
    url: 'https://docs.uipath.com/',
    description: 'Robotic Process Automation platform for business process automation'
  },
  { 
    name: 'Docker', 
    icon: <SiDocker className="text-2xl" />,
    url: 'https://docs.docker.com/',
    description: 'Containerization platform for developing, shipping, and running applications'
  },
  { 
    name: 'AWS', 
    icon: <SiAmazonwebservices className="text-2xl" />,
    url: 'https://docs.aws.amazon.com/',
    description: 'Cloud computing platform with comprehensive infrastructure services'
  },
  { 
    name: 'Git', 
    icon: <FaCode className="text-2xl" />,
    url: 'https://git-scm.com/doc',
    description: 'Distributed version control system for tracking changes in source code'
  },
  { 
    name: 'Django', 
    icon: <FaCode className="text-2xl" />,
    url: 'https://docs.djangoproject.com/',
    description: 'High-level Python web framework for rapid development'
  },
  { 
    name: 'HTML5', 
    icon: <SiHtml5 className="text-2xl" />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    description: 'Markup language for structuring and presenting web content'
  },
  { 
    name: 'CSS3', 
    icon: <SiCss3 className="text-2xl" />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    description: 'Style sheet language for describing the presentation of web documents'
  }
];

export default function Services() {
  // Function to handle Get Quote button click
  const handleGetQuote = (serviceName: string) => {
    console.log('Get Quote clicked for service:', serviceName);
    
    // Navigate to contact form with service parameter
    const hash = `#contact?action=quote&service=${encodeURIComponent(serviceName)}`;
    console.log('Setting hash to:', hash);
    window.location.hash = hash;
    
    // Dispatch custom event to ensure Contact component detects the change
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('customHashChange'));
      console.log('Custom hash change event dispatched');
    }, 100);
    
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to contact section');
    } else {
      console.log('Contact section not found');
    }
  };

  // Function to handle technology click
  const handleTechnologyClick = (tech: { name: string; url: string; description: string }) => {
    // Open in new tab
    window.open(tech.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="relative section-padding container-custom w-full max-w-7xl mx-auto font-[Poppins,Inter,sans-serif]">
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-green-400 via-blue-300 to-purple-400 rounded-full blur-3xl opacity-20 animate-float-slow z-0 pointer-events-none" />
      
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-purple-700 dark:text-purple-300 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Freelance Services
      </motion.h2>
      
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Professional development services tailored to your business needs. With 2 years of experience, I'm available for freelance projects, 
        consulting, and long-term partnerships. Let's build something amazing together!
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-xl rounded-3xl border border-purple-200 dark:border-purple-700 p-8 hover:scale-[1.03] transition-all duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div>
                <span className="text-sm font-semibold text-purple-500 dark:text-purple-300 uppercase tracking-wide">
                  {service.category}
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-200 mb-4">
              {service.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-purple-100 dark:border-purple-800">
              <span className="text-lg font-bold text-purple-600 dark:text-purple-300">
                {service.pricing}
              </span>
              <button 
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => handleGetQuote(service.title)}
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
                 <h3 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300 mb-4">
           Technology Stack
         </h3>
         <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
           Click on any technology to learn more about it and explore official documentation, tutorials, and resources.
         </p>
        
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {technologies.map((tech, idx) => (
             <motion.div
               key={tech.name}
               className="text-center group cursor-pointer"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.4, delay: idx * 0.1 }}
               onClick={() => handleTechnologyClick(tech)}
               title={`Click to learn more about ${tech.name}: ${tech.description}`}
             >
               <div className="p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-purple-200 dark:border-purple-700 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-3 group-hover:border-purple-400 dark:group-hover:border-purple-300">
                 <div className="text-purple-500 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-200">
                   {tech.icon}
                 </div>
               </div>
               <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                 {tech.name}
               </h4>
               <p className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-20 mx-auto">
                 Click to learn more
               </p>
             </motion.div>
           ))}
         </div>
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your requirements and create a custom solution that fits your budget and timeline. 
        With 2 years of experience, I'm available for both short-term projects and long-term partnerships.
        </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <a
             href="#contact"
             onClick={(e) => {
               e.preventDefault();
               // Navigate to contact form with consultation action
               window.location.hash = '#contact?action=consultation';
               
               // Dispatch custom event to ensure Contact component detects the change
               setTimeout(() => {
                 window.dispatchEvent(new CustomEvent('customHashChange'));
                 console.log('Custom hash change event dispatched for consultation');
               }, 100);
               
               // Scroll to contact form
               const contactSection = document.getElementById('contact');
               if (contactSection) {
                 contactSection.scrollIntoView({ behavior: 'smooth' });
               }
             }}
             className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
           >
             Get Free Consultation
           </a>
          <a
            href="/Mohammed%20Salman%20Uddin.pdf"
            download
            className="px-8 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Download Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
}
