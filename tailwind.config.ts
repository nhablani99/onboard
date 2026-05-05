import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Instrument Serif'", "Georgia", "serif"],
      },
      colors: {
        accent: "#4F6EF7",
        "accent-green": "#22C55E",
      },
      animation: {
        "float-1": "float1 6s ease-in-out infinite",
        "float-2": "float2 8s ease-in-out infinite",
        "float-3": "float3 7s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
