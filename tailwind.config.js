module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
