/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Wix Madefor Display"', 'sans-serif']
      }
    },
  },
  plugins: [],
}