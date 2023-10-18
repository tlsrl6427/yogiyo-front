import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yoblue: '#4286f5',
        yopink: '#f90050',
        yopink2: '#fff478',
        yogrey: '#f5f5f5',
        yogrey2: '#efefef'
      }
    },
  },
  plugins: [],
};
export default config;