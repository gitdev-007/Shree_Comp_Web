/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36abf7',
          500: '#0c8ee9',
          600: '#016fc7',
          700: '#0259a1',
          800: '#064b84',
          900: '#0b3f6e',
          950: '#07284a',
        },
        navy: {
          800: '#0f2038',
          900: '#0a1526',
          950: '#060d19'
        },
        accent: {
          amber: '#f59e0b',
          coral: '#ff5436',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'vista': '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        'vista-hover': '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
