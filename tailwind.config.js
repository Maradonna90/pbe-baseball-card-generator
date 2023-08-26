/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pbe-red': {
          50: '#fff0f1',
          100: '#ffe1e4',
          200: '#ffc8cf',
          300: '#ff9ba8',
          400: '#ff637b',
          500: '#ff2c52',
          600: '#f6083c',
          700: '#cc0032', // default
          800: '#ae0332',
          900: '#940732',
          950: '#530016',
        },
        'pbe-blue': {
          50: '#eef9ff',
          100: '#d8f0ff',
          200: '#bae5ff',
          300: '#8ad6ff',
          400: '#53bfff',
          500: '#2b9fff',
          600: '#1481fc',
          700: '#0d68e8',
          800: '#1154bc',
          900: '#14478f', // default
          950: '#122d59',
        },
        'pbe-white': {
          50: '#fafbfc', // default
          100: '#ebeff3',
          200: '#d3dce4',
          300: '#adbfcc',
          400: '#809cb0',
          500: '#608097',
          600: '#4c677d',
          700: '#3e5466',
          800: '#364856',
          900: '#313e49',
          950: '#202831',
        },
      },
    },
  },
  plugins: [],
}
