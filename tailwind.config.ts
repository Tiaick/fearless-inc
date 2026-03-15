import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060606",
          900: "#0b0b0b",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2a2a2a",
        },
        gold: {
          DEFAULT: "#c8a96a",
          light: "#dfc28e",
          dark: "#a8883f",
          muted: "#8a6e3a",
        },
        cream: {
          DEFAULT: "#f2f2f2",
          dim: "#c0b8a8",
          muted: "#8a8270",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "11xl": ["12rem", { lineHeight: "0.85", letterSpacing: "-0.05em" }],
        "12xl": ["14rem", { lineHeight: "0.85", letterSpacing: "-0.06em" }],
      },
      letterSpacing: {
        "widest-xl": "0.3em",
        "widest-2xl": "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-in-left": "slideInLeft 0.8s ease forwards",
        "grain": "grain 0.5s steps(1) infinite",
        "line-grow": "lineGrow 1.2s ease forwards",
        "cursor-blink": "cursorBlink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(2%, -1%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(1%, -2%)" },
          "70%": { transform: "translate(3%, 1%)" },
          "80%": { transform: "translate(-2%, 2%)" },
          "90%": { transform: "translate(2%, -3%)" },
        },
        lineGrow: {
          "0%": { width: "0", opacity: "0" },
          "100%": { width: "100%", opacity: "1" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        reveal: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(105deg, transparent 40%, rgba(200,169,106,0.2) 50%, transparent 60%)",
        "vignette": "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.9) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
