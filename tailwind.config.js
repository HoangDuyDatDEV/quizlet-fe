module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        content: '#124E85',
        subtitle: '#9FA6B2',
        brand: '#4C6FFF',
        subContent: '#292929',
        danger: '#EA5455',
        warning: '#ffcd1f',
        success: '#3ccfcf',
      },
      backgroundColor: {
        'button-main': '#4CB4F6',
        content: '#2E3856',
        main: '#4CB4F6',
        subMain: '#0A092D',
        hover: '#F6F7FB',
      },
      borderColor: {
        content: '#124E85',
      },
      width: {
        '574px': '574px',
        '4/5': '80%',
        '1/5': '20%',
      },
      zIndex: {
        999: 999,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
