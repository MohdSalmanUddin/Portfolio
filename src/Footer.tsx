import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';  

export default function Footer() {
  return (
    <footer className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-t border-gradient-to-r from-purple-400 via-pink-300 to-blue-400 dark:from-purple-900 dark:via-purple-700 dark:to-blue-900 py-8 mt-16 relative" style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)', borderImage: 'linear-gradient(90deg, #a259c4 0%, #f06292 50%, #64b5f6 100%) 1' }}>
      {/* Animated Gradient Bar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 rounded-full animate-pulse" />
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="font-bold text-purple-700 dark:text-purple-300">Mohammed Salman Uddin</span>. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/MohdSalmanUddin" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-purple-400 hover:text-purple-700 dark:hover:text-purple-200">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/mohammedsalmanuddin" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-purple-400 hover:text-purple-700 dark:hover:text-purple-200">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.upwork.com/freelancers/~01294ae0bedb9ef675?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-purple-400 hover:text-purple-700 dark:hover:text-purple-200">
            <SiUpwork size={22} />
          </a>
          <a href="https://www.fiverr.com/s/e6A8x9D" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-purple-400 hover:text-purple-700 dark:hover:text-purple-200">
            <SiFiverr size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
} 