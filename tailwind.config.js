/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'bright-blue': 'hsl(220, 98%, 61%)',
          // 'check-bg': linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)
        },
        neutral: {
          'vl-light-gray': 'hsl(0, 0%, 98%)',
          'vl-grayish-blue': 'hsl(236, 33%, 92%)',
          'light-grayish-blue': 'hsl(233, 11%, 84%)', //when task is done
          'dark-grayish-blue': 'hsl(236, 9%, 61%)', // for filter tasks 
          'very-dark-grayish-blue': 'hsl(235, 19%, 35%)', //to do task
          'dt-very-dark-blue': 'hsl(235, 21%, 11%)',
          'dt-very-dark-desat-blue': 'hsl(235, 24%, 19%)',
          'dt-light-grayish-blue': 'hsl(234, 39%, 85%)',
          'dt-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
          'dt-dark-grayish-blue': 'hsl(234, 11%, 52%)',
          'dt-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
          'dt-very-dark-grayish-blue2': 'hsl(237, 14%, 26%)',
        },
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
