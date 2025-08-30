// Modern responsive design utilities
export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Responsive value helper
export function responsiveValue<T>(
  values: Partial<Record<Breakpoint, T>>,
  defaultValue: T
): T {
  if (typeof window === 'undefined') return defaultValue;
  
  const sortedBreakpoints = Object.entries(breakpoints).sort((a, b) => a[1] - b[1]);
  
  for (let i = sortedBreakpoints.length - 1; i >= 0; i--) {
    const [breakpoint, width] = sortedBreakpoints[i];
    if (window.innerWidth >= width && values[breakpoint as Breakpoint] !== undefined) {
      return values[breakpoint as Breakpoint]!;
    }
  }
  
  return defaultValue;
}

// Responsive hook for React
export function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('lg');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < breakpoints.md) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
        setIsLargeDesktop(false);
        setCurrentBreakpoint('sm');
      } else if (width < breakpoints.lg) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
        setIsLargeDesktop(false);
        setCurrentBreakpoint('md');
      } else if (width < breakpoints.xl) {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
        setIsLargeDesktop(false);
        setCurrentBreakpoint('lg');
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
        setIsLargeDesktop(true);
        setCurrentBreakpoint('xl');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    currentBreakpoint,
    breakpoints,
  };
}

// Responsive class generator
export function responsiveClasses(
  baseClasses: string,
  responsiveVariants: Partial<Record<Breakpoint, string>>
): string {
  const classes = [baseClasses];
  
  Object.entries(responsiveVariants).forEach(([breakpoint, variant]) => {
    if (variant) {
      classes.push(`${breakpoint}:${variant}`);
    }
  });
  
  return classes.join(' ');
}

// Responsive spacing generator
export function responsiveSpacing(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  const classes = [base];
  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`);
  return classes.join(' ');
}

// Responsive text generator
export function responsiveText(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  return responsiveSpacing(base, sm, md, lg, xl);
}

// Responsive padding generator
export function responsivePadding(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  return responsiveSpacing(base, sm, md, lg, xl);
}

// Responsive margin generator
export function responsiveMargin(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  return responsiveSpacing(base, sm, md, lg, xl);
}

// Responsive grid generator
export function responsiveGrid(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  return responsiveSpacing(base, sm, md, lg, xl);
}

// Responsive flex generator
export function responsiveFlex(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  return responsiveSpacing(base, sm, md, lg, xl);
}

// Responsive visibility helpers
export const responsiveVisibility = {
  mobile: 'block lg:hidden',
  desktop: 'hidden lg:block',
  tablet: 'hidden md:block lg:hidden',
  mobileTablet: 'block lg:hidden',
  tabletDesktop: 'hidden md:block',
} as const;

// Responsive layout helpers
export const responsiveLayout = {
  container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12',
  section: 'py-16 sm:py-20 lg:py-24',
  card: 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-xl rounded-2xl sm:rounded-3xl border border-purple-200 dark:border-purple-700 p-4 sm:p-6 md:p-8 lg:p-10',
  button: 'px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300',
  input: 'w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg sm:rounded-xl bg-transparent text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors',
} as const;

// Responsive animation helpers
export const responsiveAnimation = {
  fadeIn: 'animate-fade-in',
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  float: 'animate-float',
  floatSlow: 'animate-float-slow',
  floatMedium: 'animate-float-medium',
  floatFast: 'animate-float-fast',
} as const;

// Responsive transition helpers
export const responsiveTransition = {
  all: 'transition-all duration-300 ease-in-out',
  transform: 'transition-transform duration-300 ease-in-out',
  colors: 'transition-colors duration-300 ease-in-out',
  opacity: 'transition-opacity duration-300 ease-in-out',
} as const;

// Responsive hover helpers
export const responsiveHover = {
  lift: 'hover-lift',
  scale: 'hover-scale',
  rotate: 'hover-rotate',
} as const;

// Responsive focus helpers
export const responsiveFocus = {
  ring: 'focus-ring',
  ringResponsive: 'focus-ring-responsive',
} as const;

// Responsive utility classes
export const responsiveUtils = {
  // Typography
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  },
  
  // Spacing
  spacing: {
    xs: 'space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4',
    sm: 'space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5',
    base: 'space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6',
    lg: 'space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7',
    xl: 'space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8',
    '2xl': 'space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9',
  },
  
  // Gaps
  gap: {
    xs: 'gap-1 sm:gap-2 md:gap-3 lg:gap-4',
    sm: 'gap-2 sm:gap-3 md:gap-4 lg:gap-5',
    base: 'gap-3 sm:gap-4 md:gap-5 lg:gap-6',
    lg: 'gap-4 sm:gap-5 md:gap-6 lg:gap-7',
    xl: 'gap-5 sm:gap-6 md:gap-7 lg:gap-8',
    '2xl': 'gap-6 sm:gap-7 md:gap-8 lg:gap-9',
  },
  
  // Padding
  padding: {
    xs: 'p-2 sm:p-3 md:p-4 lg:p-5',
    sm: 'p-3 sm:p-4 md:p-5 lg:p-6',
    base: 'p-4 sm:p-5 md:p-6 lg:p-7',
    lg: 'p-5 sm:p-6 md:p-7 lg:p-8',
    xl: 'p-6 sm:p-7 md:p-8 lg:p-9',
    '2xl': 'p-8 sm:p-9 md:p-10 lg:p-12',
  },
  
  // Margin
  margin: {
    xs: 'm-2 sm:m-3 md:m-4 lg:m-5',
    sm: 'm-3 sm:m-4 md:m-5 lg:m-6',
    base: 'm-4 sm:m-5 md:m-6 lg:m-7',
    lg: 'm-5 sm:m-6 md:m-7 lg:m-8',
    xl: 'm-6 sm:m-7 md:m-8 lg:m-9',
    '2xl': 'm-8 sm:m-9 md:m-10 lg:m-12',
  },
  
  // Border radius
  rounded: {
    sm: 'rounded sm:rounded-md md:rounded-lg lg:rounded-xl',
    base: 'rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl',
    lg: 'rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl',
    xl: 'rounded-xl sm:rounded-2xl md:rounded-3xl',
  },
  
  // Shadows
  shadow: {
    sm: 'shadow-sm sm:shadow md:shadow-lg',
    base: 'shadow sm:shadow-md md:shadow-lg lg:shadow-xl',
    lg: 'shadow-lg sm:shadow-xl md:shadow-2xl',
    xl: 'shadow-xl sm:shadow-2xl',
  },
  
  // Backdrop blur
  backdrop: {
    sm: 'backdrop-blur-sm sm:backdrop-blur-md md:backdrop-blur-lg',
    base: 'backdrop-blur-md sm:backdrop-blur-lg md:backdrop-blur-xl',
    lg: 'backdrop-blur-lg sm:backdrop-blur-xl',
    xl: 'backdrop-blur-xl',
  },
} as const;

// Import React hooks
import { useState, useEffect } from 'react';

// Export all utilities
export default {
  breakpoints,
  responsiveValue,
  useResponsive,
  responsiveClasses,
  responsiveSpacing,
  responsiveText,
  responsivePadding,
  responsiveMargin,
  responsiveGrid,
  responsiveFlex,
  responsiveVisibility,
  responsiveLayout,
  responsiveAnimation,
  responsiveTransition,
  responsiveHover,
  responsiveFocus,
  responsiveUtils,
};
