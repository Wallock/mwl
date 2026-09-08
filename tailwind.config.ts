import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#FAF1ED",
        surface: "#F3E4DE",
        "surface-gold": "#F8F0DC",
        ink: "#231108",
        "ink-muted": "#7A5548",
        "ink-subtle": "#B89080",
        gold: "#C9A96E",
        "gold-dark": "#9E7D48",
        "gold-light": "#EAD9B0",
        rose: {
          DEFAULT: "#D4576E",
          hover: "#C04460",
          subtle: "#F0CDD4",
        },
        border: "#E2CAC0",
        cream: "#FDFAF8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-sarabun)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
