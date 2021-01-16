module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
      options: {
        whitelist: [],
      }
  },
  theme: {
    fontFamily: {
        body: ['Roboto', 'sans-serif'],
        display: ['Rubik', 'sans-serif'],
    },
    extend: {
        colors: {
            primary: '#033860',
            secondary: '#065A84',
            tertiary: '#087CA7',
            error: '#FF6363',
            white: '#FFFFFF',
            lightGray: '#F9F9F9',
            gray: '#F3F3F3',
            transparent: 'transparent'
        }
    },
  },
  variants: {},
  plugins: [],
}
