import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        // primary
        deepRed: "#E63946",

        // secondary
        freshGreen: "#A8DADC",
        creamyWhite: "#F1FAEE",

        // accent
        vibrantOrange: "#F4A261",
        earthBrown: "#6D6875",

        // neutral
        softGray: "#1D3557",
      },
    },
  },
  plugins: [],
};
export default config;
