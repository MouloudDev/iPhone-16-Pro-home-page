/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const avMnImg = {
  xsm: '/assets/images/audio-video_main-img_xsmall.jpg',
  sm: '/assets/images/audio-video_main-img_small.jpg',
  md: '/assets/images/audio-video_main-img_medium.jpg',
  lg: '/assets/images/audio-video_main-img_large.jpg',
  xl: '/assets/images/audio-video_main-img_xlarge.jpg',
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    },
    screens: {
      'laptop': '833px', // Used in <Nav />
      '480px': '480px',
      '734px': '734px',
      '1068px': '1068px',
      '1440px': '1440px'
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // av for audio-video, mn for main.
      const newUtilities = {
        '.av-mn-img-xsm': {
          backgroundImage: `url(${avMnImg.xsm})`,
          backgroundSize: '480px 480px',
        },
        '.av-mn-img-sm': {
          backgroundImage: `url(${avMnImg.sm})`,
          backgroundSize: '734px 480px',
        },
        '.av-mn-img-md': {
          backgroundImage: `url(${avMnImg.md})`,
          backgroundSize: '1070px 700px',
        },
        '.av-mn-img-lg': {
          backgroundImage: `url(${avMnImg.lg})`,
          backgroundSize: '1440px 810px',
        },
        '.av-mn-img-lg': {
          backgroundImage: `url(${avMnImg.xl})`,
          backgroundSize: '1680px 946px',
        },
      };
      addUtilities(newUtilities);
    }),
  ]
}
