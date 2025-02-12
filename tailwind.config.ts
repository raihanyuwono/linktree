import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{jpg,jpeg,png,svg,webp}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          card: "var(--background-card)",
        },
        foreground: {
          primary: "var(--foreground-primary)",
          secondary: "var(--foreground-secondary)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
