/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Nunito', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-up': 'slide-in-up 0.6s ease-out',
        'slide-in-down': 'slide-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(147, 51, 234, 0.5)',
        'glow-lg': '0 0 40px rgba(147, 51, 234, 0.6)',
        'glow-xl': '0 0 60px rgba(147, 51, 234, 0.7)',
        'inner-glow': 'inset 0 0 20px rgba(147, 51, 234, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-responsive': {
          fontSize: theme('fontSize.sm'),
          '@screen sm': {
            fontSize: theme('fontSize.base'),
          },
          '@screen md': {
            fontSize: theme('fontSize.lg'),
          },
          '@screen lg': {
            fontSize: theme('fontSize.xl'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.2xl'),
          },
        },
        '.heading-responsive': {
          fontSize: theme('fontSize.2xl'),
          '@screen sm': {
            fontSize: theme('fontSize.3xl'),
          },
          '@screen md': {
            fontSize: theme('fontSize.4xl'),
          },
          '@screen lg': {
            fontSize: theme('fontSize.5xl'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.6xl'),
          },
        },
        '.container-responsive': {
          width: '100%',
          maxWidth: theme('maxWidth.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen sm': {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
          '@screen xl': {
            paddingLeft: theme('spacing.12'),
            paddingRight: theme('spacing.12'),
          },
        },
        '.section-responsive': {
          paddingTop: theme('spacing.16'),
          paddingBottom: theme('spacing.16'),
          '@screen sm': {
            paddingTop: theme('spacing.20'),
            paddingBottom: theme('spacing.20'),
          },
          '@screen lg': {
            paddingTop: theme('spacing.24'),
            paddingBottom: theme('spacing.24'),
          },
        },
        '.card-responsive': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(24px)',
          borderRadius: theme('borderRadius.2xl'),
          boxShadow: theme('boxShadow.xl'),
          border: `1px solid ${theme('colors.purple.200')}`,
          padding: theme('spacing.4'),
          '@screen sm': {
            padding: theme('spacing.6'),
          },
          '@screen md': {
            padding: theme('spacing.8'),
          },
          '@screen lg': {
            padding: theme('spacing.10'),
            borderRadius: theme('borderRadius.3xl'),
          },
          '@screen xl': {
            padding: theme('spacing.12'),
          },
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: 'rgba(17, 24, 39, 0.8)',
            borderColor: theme('colors.purple.700'),
          },
        },
        '.button-responsive': {
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.semibold'),
          borderRadius: theme('borderRadius.full'),
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.300'),
          '@screen sm': {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
            paddingTop: theme('spacing.3'),
            paddingBottom: theme('spacing.3'),
            fontSize: theme('fontSize.base'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
            paddingTop: theme('spacing.4'),
            paddingBottom: theme('spacing.4'),
            fontSize: theme('fontSize.lg'),
          },
        },
        '.input-responsive': {
          width: '100%',
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3'),
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
          borderWidth: '2px',
          borderColor: theme('colors.purple.200'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: 'transparent',
          fontSize: theme('fontSize.sm'),
          outline: 'none',
          transitionProperty: 'colors',
          transitionDuration: theme('transitionDuration.300'),
          '@screen sm': {
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            paddingTop: theme('spacing.3'),
            paddingBottom: theme('spacing.3'),
            fontSize: theme('fontSize.base'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.5'),
            paddingRight: theme('spacing.5'),
            borderRadius: theme('borderRadius.xl'),
            fontSize: theme('fontSize.lg'),
          },
          '&:focus': {
            borderColor: theme('colors.purple.500'),
          },
          '@media (prefers-color-scheme: dark)': {
            borderColor: theme('colors.purple.700'),
            color: theme('colors.gray.100'),
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
}; 