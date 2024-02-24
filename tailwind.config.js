/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          100: '#ee757e',
          200: '#eb626b',
          300: '#e94e59',
          400: '#cf353f',
          500: '#b82f38',
          600: '#a12931',
          700: '#8a232a',
          800: '#731d23',
          'default': '#e73b47',
        },
        'main-dark': '#7f2c26',
        'second': '#1c4054',
      },
    },
    container: {
      center: true,
      padding: '0.5rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2560px',
        '7xl': '2816px',
        '8xl': '3072px',
        '9xl': '3328px',
        '10xl': '3584px',
        '11xl': '3840px',
        '12xl': '4096px',
        '13xl': '4352px',
        '14xl': '4608px',
        '15xl': '4864px',
        '16xl': '5120px',
        '17xl': '5376px',
        '18xl': '5632px',
        '19xl': '5888px',
        '20xl': '6144px',
        '21xl': '6400px',
        '22xl': '6656px',
        '23xl': '6912px',
        '24xl': '7168px',
        '25xl': '7424px',
        '26xl': '7680px',
        '27xl': '7936px',
        '28xl': '8192px',
        '29xl': '8448px',
        '30xl': '8704px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

