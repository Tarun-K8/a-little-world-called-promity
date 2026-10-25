/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FCFBF7',
          100: '#F9F5EC',
          200: '#F3ECE0',
          300: '#E8DCB9',
          400: '#D9C594',
          500: '#C7AD70',
        },
        sandstone: {
          50: '#FBF9F5',
          100: '#F4ECE0',
          200: '#E7D8C0',
          300: '#D5BE9B',
          400: '#C0A074',
          500: '#A48253',
          600: '#84663E',
          700: '#644C2D',
          800: '#46341F',
          900: '#2C2013',
        },
        indigo: {
          deep: '#0B0D17',
          night: '#111528',
          card: '#161B33',
          muted: '#1E2545',
          border: '#2A335E',
        },
        gold: {
          50: '#FBF8EE',
          100: '#F6EFCB',
          200: '#ECDD94',
          300: '#DFC558',
          400: '#D4AF37', // classic antique gold
          500: '#B89226',
          600: '#947018',
        },
        dusty: {
          blue: '#7C8BA1',
          light: '#A3B0C4',
          dark: '#3F4A5E',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'mandala-glow': 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(17,21,40,0) 70%)',
        'moon-glow': 'radial-gradient(circle at 50% 30%, rgba(246,239,203,0.15) 0%, rgba(17,21,40,0) 65%)',
        'parchment-pattern': 'radial-gradient(#d4af37 0.5px, transparent 0.5px)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
