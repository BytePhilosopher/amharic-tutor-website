/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#14261E',
          light: '#1E3D30',
          dark: '#0B1A12',
        },
        gold: {
          DEFAULT: '#B08D3A',
          light: '#CDA85C',
          dark: '#8F7028',
        },
        sage: {
          DEFAULT: '#5D7E60',
          light: '#7A9B7D',
          dark: '#456548',
        },
        cream: {
          DEFAULT: '#F8F7F4',
          dark: '#EFEEE8',
        },
        parchment: '#EDECE6',
        terracotta: '#B5451B',
        ivory: '#FFFDF5',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
