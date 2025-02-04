/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnightBlack: '#02000E',
        deepCharcoal: '#181D26',
        steelGray: '#67666E',
        neutralGray: '#828282',
        slateBlue: '#8C92AB',
        silverGray: '#A3A5A8',
        softWhite: '#F7F7F8',
        coralRed: '#F96D69',
        pinkPunch: '#FE5493',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'], // Pretendard 폰트 추가
      },
      letterSpacing: {
        '5-percent': '0.05em', // Letter spacing 5%
        '2-percent': '0.02em', // Letter spacing 2%
        'minus-0.17px': '-0.17px', // Letter spacing -0.17px
      },
      screens: {
        pc: '1200px',
        tablet: '768px',
        mobile: '375px',
      },
      backgroundImage: {
        mainSectionBackgroundImage1:
          "url('/src/assets/images/mainSectionBackgroundImage1.webp')",
        mainSectionBackgroundImage2:
          "url('/src/assets/images/mainSectionBackgroundImage2.webp')",
        mainSectionBackgroundImage3:
          "url('/src/assets/images/mainSectionBackgroundImage3.webp')",
        'radial-black':
          'radial-gradient(circle, rgba(2,0,14,0) 0%, rgba(2,0,14,0.5) 18%, rgba(2,0,14,1) 60%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
