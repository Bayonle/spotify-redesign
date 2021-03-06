// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-deepblue': {
          'background-image': 'linear-gradient(to top, #010b1e, #020b1c 100%)',
          'backdrop-filter': 'blur(11.1px)'
        },
        '.gradient-blue-to-green': {
          'background-image': 'linear-gradient(to left, #1ed761, #1e64d7)'
        },
        '.gradient-footer': {
          'background-image': 'linear-gradient(to top, #020814, #030d20)'    
        },
        '.gradient-green-to-blue': {
          'background-image': 'linear-gradient(to left, #1ed761, #1e64d7)'
        },

      }

      addUtilities(newUtilities) 
    }
  ],
  theme: {
    extend: {
      colors: {
        'color-grey-800': '#575757',
        'color-grey-700': '#3b4c64',
        'color-grey-300': '#597193',
        'color-grey-600': '#d8d8d8',
        'color-grey-500': '#c3c8d5',
        'color-grey-400': '#afafaf',
        'color-grey-200': '#a9a9a9',
        'color-grey-100': '#d4d4d4',
        'color-grey-900': '#ababab',
        'color-grey': '#787878',
        'color-black-1000': '#020916',
        'color-gray': '#747474',
        'color-black':'#212020',
        'color-black-400':'#454545',
        'color-black-300':'#454545',
        'color-teal':'#246b85'
      }
    }
  },
  variants: {}
}
