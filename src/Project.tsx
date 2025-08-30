import { FaUserCog, FaClipboardList, FaBell, FaFileAlt, FaMoneyCheckAlt, FaPlane, FaChartBar, FaCalendarCheck, FaFileUpload, FaUserFriends, FaHome, FaQrcode, FaWpforms, FaUsers, FaChartLine, FaMapMarkerAlt, FaGlobe, FaMap, FaSearchLocation, FaCheckCircle, FaFilePdf, FaCogs, FaSitemap, FaEdit, FaUniversity, FaShieldAlt, FaChartPie, FaUsersCog, FaFileContract, FaServer, FaDatabase, FaCode, FaNetworkWired, FaCreditCard, FaUndo, FaIndustry, FaWarehouse, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineAnnouncement, MdOutlineAssignmentInd } from 'react-icons/md';
import { GiPayMoney } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const features = [
  {
    icon: <FaUserCog className="text-3xl text-purple-500" />, 
    title: 'Self-Service Portal',
    desc: 'Access your personal dashboard, manage requests, and view important info—all in one place.'
  },
  {
    icon: <FaClipboardList className="text-3xl text-pink-500" />, 
    title: 'Leave & Loan Requests',
    desc: 'Easily apply for leaves, track requests, and manage loan applications.'
  },
  {
    icon: <FaFileUpload className="text-3xl text-blue-400" />, 
    title: 'Document Management',
    desc: 'Upload and view your personal documents securely.'
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-purple-400" />, 
    title: 'Attendance & Check-In/Out',
    desc: 'Track your attendance, check in/out, and view reports.'
  },
  {
    icon: <GiPayMoney className="text-3xl text-pink-400" />, 
    title: 'Payslips & Expenses',
    desc: 'View payslips, calculate end of service, and manage expenses.'
  },
  {
    icon: <MdOutlineAnnouncement className="text-3xl text-blue-500" />, 
    title: 'Announcements',
    desc: 'Stay updated with company news and notifications.'
  },
  { 
    icon: <FaPlane className="text-3xl text-purple-300" />, 
    title: 'Travel & Mandate',
    desc: 'Manage travel requests and mandates easily.'
  },
  {
    icon: <FaUserFriends className="text-3xl text-pink-300" />, 
    title: 'Team & Reports',
    desc: 'View team info and generate personal reports.'
  },
];

const projects = [
  {
    name: 'HCM Employee Self Service (ESS)',
    icon: <FaUserCog className="text-4xl text-purple-500" />,
    desc: 'A modern portal empowering employees to manage their work life—request leaves, check attendance, upload documents, and more—without paperwork or waiting.',
    features: features,
  },
  {
    name: 'Attendance Location Validator',
    icon: <FaMapMarkerAlt className="text-4xl text-pink-500" />,
    desc: 'A smart attendance system with geo-fencing, remote work options, and integrated map-based location validation.',
    features: [
      {
        icon: <FaGlobe className="text-2xl text-purple-500" />,
        title: 'Geo Fencing by Work Location',
        desc: 'Apply geo-fencing based on allocated work location IDs, coordinates, and radius.'
      },
      {
        icon: <FaCheckCircle className="text-2xl text-blue-400" />,
        title: 'Remote Work Option',
        desc: 'Allow users to check in/out from anywhere when remote work is enabled.'
      },
      {
        icon: <FaMap className="text-2xl text-pink-400" />,
        title: 'Improved Check In/Out Page',
        desc: 'A new, user-friendly check in/check out page in the attendance module.'
      },
      {
        icon: <FaSearchLocation className="text-2xl text-purple-400" />,
        title: 'Integrated Map View',
        desc: 'A dedicated page with Leaflet map integration and search fields for fetching geo locations.'
      },
    ]
  },
  {
    name: 'Almehwar',
    icon: <FaFilePdf className="text-4xl text-red-500" />,
    desc: 'A business solution with custom PDF reports, approval flows, and tailored modules using Odoo Studio and Odoo.sh.',
    features: [
      {
        icon: <FaFilePdf className="text-2xl text-red-500" />,
        title: 'Custom PDF Reports',
        desc: 'Generate reports with background templates tailored to business branding.'
      },
      {
        icon: <FaSitemap className="text-2xl text-purple-500" />,
        title: 'Altered Approval Flows',
        desc: 'Customized approval flows in various modules to match business processes.'
      },
      {
        icon: <FaCogs className="text-2xl text-blue-400" />,
        title: 'Custom Modules & Apps',
        desc: 'Developed and modified modules/apps based on specific business needs.'
      },
      {
        icon: <FaEdit className="text-2xl text-pink-400" />,
        title: 'Studio & Odoo.sh Editor',
        desc: 'Utilized Odoo Studio and Odoo.sh Editor for rapid, code-free and code-based modifications.'
      },
    ]
  },
  {
    name: 'Mazia',
    icon: <FaHome className="text-4xl text-blue-500" />,
    desc: 'A property and villa portal for capturing investment interests and generating leads through multi-channel survey forms.',
    features: [
      {
        icon: <FaWpforms className="text-2xl text-purple-500" />,
        title: 'Portal Survey Forms',
        desc: 'Capture user interests and investment details through easy-to-use forms.'
      },
      {
        icon: <FaQrcode className="text-2xl text-pink-500" />,
        title: 'Channel QR Generation',
        desc: 'Generate unique QR codes for each channel (Facebook, Instagram, Snapchat, etc.) to redirect users to the right form.'
      },
      {
        icon: <FaUsers className="text-2xl text-blue-400" />,
        title: 'Custom Survey Module',
        desc: 'View and manage all form submissions in a dedicated module.'
      },
      {
        icon: <FaChartLine className="text-2xl text-purple-400" />,
        title: 'CRM Lead Generation',
        desc: 'Automatically create CRM leads from survey submissions for efficient follow-up.'
      },
    ]
  },
  {
    name: 'Ibrahim Al Quraishi - Payment Gateway Integration',
    icon: <FaCreditCard className="text-4xl text-green-500" />,
    desc: 'Advanced payment gateway integration solution with Geidea device integration, comprehensive POS module configuration, and automated refund processing workflows for retail operations.',
    features: [
      {
        icon: <FaNetworkWired className="text-2xl text-purple-500" />,
        title: 'Geidea Device Integration',
        desc: 'Seamless integration with Geidea payment terminals, real-time transaction processing, device status monitoring, and automated communication protocols.'
      },
      {
        icon: <FaCogs className="text-2xl text-blue-400" />,
        title: 'Payment Method Configuration',
        desc: 'Comprehensive payment gateway setup with multiple payment options, secure transaction handling, and automated payment method validation and routing.'
      },
      {
        icon: <FaMoneyCheckAlt className="text-2xl text-green-400" />,
        title: 'POS Module Integration',
        desc: 'Full integration with Point of Sale systems, real-time inventory updates, transaction synchronization, and seamless customer experience across all touchpoints.'
      },
      {
        icon: <FaUndo className="text-2xl text-pink-400" />,
        title: 'Automated Refund Processing',
        desc: 'Streamlined refund workflow with automated approval processes, transaction reversal handling, and comprehensive audit trail for financial compliance.'
      },
      {
        icon: <FaShieldAlt className="text-2xl text-indigo-400" />,
        title: 'Security & Compliance',
        desc: 'PCI DSS compliant payment processing, encrypted transaction data, fraud detection mechanisms, and secure API communication protocols.'
      },
      {
        icon: <FaChartLine className="text-2xl text-orange-400" />,
        title: 'Transaction Analytics & Reporting',
        desc: 'Real-time transaction monitoring, payment success rate analytics, device performance metrics, and comprehensive financial reporting dashboard.'
      },
    ],
  },
  {
    name: 'Alshal - Manufacturing & Warehouse Management System',
    icon: <FaIndustry className="text-4xl text-orange-500" />,
    desc: 'Comprehensive manufacturing and warehouse management solution with integrated POS operations, advanced restriction management, and automated report generation for operational efficiency.',
    features: [
      {
        icon: <FaIndustry className="text-2xl text-purple-500" />,
        title: 'Manufacturing Process Management',
        desc: 'End-to-end manufacturing workflow automation, production planning, quality control integration, and real-time production monitoring with performance analytics.'
      },
      {
        icon: <FaWarehouse className="text-2xl text-blue-400" />,
        title: 'Warehouse Operations & Inventory Control',
        desc: 'Advanced warehouse management with real-time inventory tracking, automated stock replenishment, location management, and comprehensive inventory optimization.'
      },
      {
        icon: <FaShoppingCart className="text-2xl text-green-400" />,
        title: 'POS Integration & Retail Operations',
        desc: 'Seamless Point of Sale integration with real-time inventory synchronization, customer transaction processing, and automated sales reporting.'
      },
      {
        icon: <FaShieldAlt className="text-2xl text-pink-400" />,
        title: 'Advanced Restriction Management',
        desc: 'Comprehensive access control with role-based permissions, workflow restrictions, approval hierarchies, and automated compliance monitoring.'
      },
      {
        icon: <FaFileAlt className="text-2xl text-indigo-400" />,
        title: 'Automated Report Generation',
        desc: 'Advanced reporting system with customizable dashboards, automated report scheduling, multi-format export capabilities, and real-time data visualization.'
      },
      {
        icon: <FaChartBar className="text-2xl text-orange-400" />,
        title: 'Operational Analytics & Insights',
        desc: 'Comprehensive analytics dashboard with manufacturing efficiency metrics, warehouse performance indicators, sales analytics, and business insights for optimization.'
      },
    ],
  },
  {
    name: 'CNTXT - Enterprise Process Management System',
    icon: <FaClipboardList className="text-4xl text-blue-500" />,
    desc: 'Comprehensive enterprise process management solution with leave management, purchase requisition, business trip management, and employee delegation workflows with system implementation and deployment.',
    features: [
      {
        icon: <FaCalendarCheck className="text-2xl text-purple-500" />,
        title: 'Advanced Leave Management System',
        desc: 'Comprehensive leave request workflow with approval chains, leave balance tracking, calendar integration, and automated notification systems for managers and employees.'
      },
      {
        icon: <FaFileAlt className="text-2xl text-blue-400" />,
        title: 'Purchase Requisition Management',
        desc: 'Streamlined procurement workflow with budget validation, multi-level approval routing, vendor management integration, and automated purchase order generation.'
      },
      {
        icon: <FaPlane className="text-2xl text-green-400" />,
        title: 'Business Trip & Training Management',
        desc: 'End-to-end travel management system with expense tracking, approval workflows, budget allocation, and comprehensive reporting for business and training trips.'
      },
      {
        icon: <FaMoneyCheckAlt className="text-2xl text-pink-400" />,
        title: 'Expense Management & Reimbursement',
        desc: 'Automated expense processing with receipt validation, policy compliance checking, approval workflows, and seamless integration with financial systems.'
      },
      {
        icon: <FaUsers className="text-2xl text-indigo-400" />,
        title: 'Employee Delegation Management',
        desc: 'Advanced delegation system with temporary authority assignment, role-based access control, approval chain management, and automated workflow routing.'
      },
      {
        icon: <FaChartBar className="text-2xl text-orange-400" />,
        title: 'Process Analytics & Reporting',
        desc: 'Comprehensive dashboard with process metrics, approval cycle times, expense analytics, and real-time insights for operational efficiency and decision making.'
      },
    ],
  },
  {
    name: 'Majmaa University - Enterprise Resource Planning System',
    icon: <FaUniversity className="text-4xl text-purple-500" />,
    desc: 'Comprehensive ERP solution with advanced project management, HR recruitment, and contract management modules with system enhancements and optimizations.',
    features: [
      {
        icon: <FaChartPie className="text-2xl text-purple-500" />,
        title: 'Advanced Project Management & Financial Control',
        desc: 'Project proposal workflow engine, dynamic profit margin calculation, multi-tier financial offer management, and budget control with excise reporting.'
      },
      {
        icon: <FaShieldAlt className="text-2xl text-blue-400" />,
        title: 'Multi-Level Approval Architecture',
        desc: 'Hierarchical approval matrix with role-based access control, temporary authority delegation, and workflow state management with approval chain validation.'
      },
      {
        icon: <FaUsersCog className="text-2xl text-pink-400" />,
        title: 'HR Recruitment & Contract Management',
        desc: 'Service-based hiring flow with project requirement mapping, contract lifecycle management, and candidate onboarding workflow with access provisioning.'
      },
      {
        icon: <FaFileContract className="text-2xl text-green-400" />,
        title: 'Advanced Reporting & Analytics',
        desc: 'Multi-format report generation, multi-language support, exception handling with detailed error logging, and real-time dashboard analytics.'
      },
      {
        icon: <FaServer className="text-2xl text-orange-400" />,
        title: 'Infrastructure & DevOps',
        desc: 'UAT environment setup, production server deployment on on-premise cloud infrastructure, Nginx load balancer configuration, and PostgreSQL optimization.'
      },
      {
        icon: <FaCode className="text-2xl text-indigo-400" />,
        title: 'Technical Architecture',
        desc: 'Microservices architecture with modular design patterns, RESTful API integration, database schema optimization, and role-based access control (RBAC).'
      },
    ],
  },
];

export default function Project() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showContrib, setShowContrib] = useState(false);
  const [contribCount, setContribCount] = useState(0);
  const [isChartReady, setIsChartReady] = useState(false);

  // Function to handle Get Quote button click
  const handleGetQuote = () => {
    // Navigate to contact form with Odoo Development service
    window.location.hash = `#contact?action=quote&service=Odoo Development`;
    
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset isChartReady when popup opens
  useEffect(() => {
    if (showContrib) setIsChartReady(false);
  }, [showContrib]);

  return (
    <section className="relative section-padding container-custom w-full max-w-6xl mx-auto font-[Poppins,Inter,sans-serif]">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-20 animate-float-slow z-0 pointer-events-none" />
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-purple-700 dark:text-purple-300 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A showcase of my growing expertise in Odoo development, ERP solutions, and full-stack applications. 
        Each project demonstrates my ability to deliver business solutions with clean code and good user experience.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-xl rounded-3xl border border-purple-200 dark:border-purple-700 p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="mb-4">{proj.icon}</div>
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-200 mb-2">{proj.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">{proj.desc}</p>
            <button
              className="odoo-btn mt-2"
              onClick={() => setOpenIdx(idx)}
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-8 text-center cursor-pointer group relative"
        onClick={() => setShowContrib(true)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 rounded-full px-6 py-3 border border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            And many more projects...
          </span>
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
          Click to explore more
        </div>
      </motion.div>
      
      {/* Call to Action for Freelancing */}
      <motion.div
        className="mt-20 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          With 2 years of experience, I'm available for freelance projects and can help you build custom Odoo solutions, 
          develop web applications, or integrate systems. Let's discuss your requirements and create something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={handleGetQuote}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Free Quote
          </a>
          <a
            href="#services"
            className="px-8 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View Services
          </a>
        </div>
      </motion.div>
      {/* Modal Popup for Project Details */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-200 dark:border-purple-700 w-full max-w-lg md:max-w-2xl p-6 md:p-10 flex flex-col items-center text-center animate-fade-in"
            style={{ boxShadow: '0 8px 32px 0 rgba(130, 88, 159, 0.18)', height: 'min(90vh, 600px)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-purple-500 dark:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-2 shadow hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-4">{projects[openIdx].icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-200 mb-2">{projects[openIdx].name}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-6 max-w-xl">{projects[openIdx].desc}</p>
            {/* Scrollable features for HCM ESS, normal for Mazia */}
            <div
              className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto`}
              style={{ maxHeight: '320px', paddingRight: '2px' }}
            >
              {projects[openIdx].features.map((f, i) => (
                <div key={f.title} className="bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow p-5 flex flex-col items-center text-center border border-purple-100 dark:border-purple-800">
                  {f.icon}
                  <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-200 mt-2 mb-1">{f.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* GitHub Contributions Popup */}
      {showContrib && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2"
          onClick={() => setShowContrib(false)}
        >
          <div
            className="relative w-full max-w-md p-2 md:p-4 flex flex-col items-center text-center animate-fade-in bg-white/70 dark:bg-gradient-to-br dark:from-[#2E2E2E] dark:via-[#34495E] dark:to-[#4A5A6A] backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-200 dark:border-[#2C3E50]"
            onClick={e => e.stopPropagation()}
          >
            {/* Thematic blurred gradient halo illustration */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-400 to-blue-400 blur-3xl opacity-30 animate-float-slow" />
            </div>
            <button
              className="absolute top-4 right-4 text-purple-500 dark:text-purple-200 bg-white/60 dark:bg-gray-800/60 rounded-full p-2 shadow hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors"
              onClick={() => setShowContrib(false)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold text-purple-700 dark:text-white mb-2">GitHub Contributions</h3>
            <div className="relative flex justify-center items-center w-full mb-2 min-h-[180px]">
              {!isChartReady && (
                <div className="absolute inset-0 z-30 flex items-center justify-center rounded-3xl bg-white/70 dark:bg-gradient-to-br dark:from-[#2E2E2E] dark:via-[#34495E] dark:to-[#4A5A6A] backdrop-blur-2xl">
                  <span className="text-gray-500 dark:text-gray-200 animate-pulse text-lg font-semibold">Loading contributions...</span>
                </div>
              )}
              <GitHubCalendar
                username="MohdSalmanUddin"
                colorScheme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                blockSize={15}
                blockMargin={4}
                fontSize={16}
                transformData={data => {
                  const last90 = data.slice(-90);
                  setContribCount(last90.filter(day => day.count > 0).length);
                  setIsChartReady(true);
                  return last90;
                }}
                hideTotalCount
              />
            </div>
            {/* Custom total count for last 3 months with help tooltip */}
            <div className="flex items-center justify-center gap-2 text-base font-semibold text-gray-800 dark:text-white mb-1 group">
              {contribCount} contributions in the last 3 months
              <span className="relative cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-400 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
                </svg>
                {/* Desktop tooltip */}
                <span className="hidden sm:inline absolute left-1/2 -translate-x-1/2 top-auto bottom-full mb-2 w-56 px-3 py-2 rounded-lg bg-gray-900 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg border border-purple-500 break-words text-center" style={{minWidth: '180px'}}>Private contributions do not appear on this chart.</span>
              </span>
              {/* Mobile tooltip: fixed at bottom center of popup */}
              <span className="sm:hidden fixed left-1/2 -translate-x-1/2 bottom-0 w-11/12 max-w-xs px-3 py-2 rounded-lg bg-gray-900 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg border border-purple-500 break-words text-center" style={{minWidth: '180px'}}>Private contributions do not appear on this chart.</span>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-white">Live contributions from <a href="https://github.com/MohdSalmanUddin" target="_blank" rel="noopener noreferrer" className="underline text-purple-500 dark:text-green-300">github.com/MohdSalmanUddin</a></div>
            {/* Custom style for legend, month labels, and stats in dark mode */}
            <style>{`
              .react-github-calendar__legend, .react-github-calendar__count, .react-github-calendar__text, .react-github-calendar text, .react-github-calendar__month {
                color: #111827;
              }
              html.dark .react-github-calendar__legend, html.dark .react-github-calendar__count, html.dark .react-github-calendar__text, html.dark .react-github-calendar text, html.dark .react-github-calendar__month {
                color: #fff !important;
              }
            `}</style>
            {/* Popup content remains above the halo */}
            <div className="relative z-10 w-full flex flex-col items-center text-center">
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 