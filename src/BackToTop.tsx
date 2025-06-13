import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 h-10 w-10 md:h-16 md:w-16 flex items-center justify-center rounded-full bg-purple-600 dark:bg-purple-500 text-white shadow-lg hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors animate-bounce"
      aria-label="Back to top"
    >
      <FaArrowUp className="w-5 h-5 md:w-8 md:h-8" />
    </button>
  ) : null;
} 