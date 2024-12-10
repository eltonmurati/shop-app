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
      colors:{
        bwcred:"#F35C7A",
        bwcred_disabled: "#fbcfe8",
        bwcblue: "#2b298f",
        bwcblue_disabled: "#b3bdff",
        bwcgray: "#EBEDED",
      }
    },
  },
  plugins: [],
};
export default config;
