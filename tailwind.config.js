module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        content: '#124E85',
        subtitle: '#9FA6B2',
      },
      backgroundColor: {
        'button-main': '#4CB4F6',
        content: '#2E3856',
        main: '#4CB4F6',
      },
      borderColor: {
        content: '#124E85',
      },
      width: {
        '574px': '574px',
        '4/5': '80%',
        '1/5': '20%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
