import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        golden: {
          100: '#FFF9DB',
          200: '#FFF3B7',
          300: '#FFEB8E',
          400: '#FFE265',
          500: '#FFD83C',
          600: '#DDBA31',
          700: '#B89D26',
          800: '#927F1B',
          900: '#746514',
        },
      },
    },
  },
  plugins: [],
};
export default config;
