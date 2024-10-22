import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-modern-warfare)"],
        modernistRegular: ["var(--font-modernist-regular)"],
      },
      colors: {
        white: "#ffffff",
        "dark-bg": "#000000",
        gray: "#919191",
        "green-bg": "#ACFF12",
      },
    },
  },
  plugins: [],
};
export default config;
