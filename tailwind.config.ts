import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
