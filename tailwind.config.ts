import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        primary: "#0A2647",
        primary_color_light: "#144272",
        primary_color_light_2: "#205295",
        primary_color_light_3: "#2C74B3",
        accent: "#FCFFFD",
        primary_gray: "#A0AAC0",
        gray_light: "#DADADA",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
