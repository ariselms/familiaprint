import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        passiondark: "#A7163D",
        passionlight: "#BA525E",
        marinedark: "#013E9F",
        marinelight: "#5268BA",
      },
    },
  },
  plugins: [],
} satisfies Config;
