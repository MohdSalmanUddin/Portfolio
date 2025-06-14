import { FaUserCog, FaClipboardList, FaBell, FaFileAlt, FaMoneyCheckAlt, FaPlane, FaChartBar, FaCalendarCheck, FaFileUpload, FaUserFriends, FaHome, FaQrcode, FaWpforms, FaUsers, FaChartLine, FaMapMarkerAlt, FaGlobe, FaMap, FaSearchLocation, FaCheckCircle, FaFilePdf, FaCogs, FaSitemap, FaEdit } from 'react-icons/fa';
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
    // url: 'https://mazia.odoo.com/',
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
];

export default function Project() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showContrib, setShowContrib] = useState(false);
  const [contribCount, setContribCount] = useState(0);
  const [isChartReady, setIsChartReady] = useState(false);

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
        Projects
      </motion.h2>
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
      <div className="mt-4 text-center text-purple-500 dark:text-purple-300 font-semibold text-base opacity-80 cursor-pointer underline" onClick={() => setShowContrib(true)}>
        And many more projects...
      </div>
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