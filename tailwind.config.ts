import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        metropolis: ["var(--font-metropolis)", "sans-serif"],
      },
      fontSize: {
        sm: ["12px", "16px"],
        base: ["16px", "24px"],
        lg: ["22px", "30px"],
      },
    },
  },
  plugins: [],
} satisfies Config;
