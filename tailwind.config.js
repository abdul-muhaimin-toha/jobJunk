/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-banner.jpg')",
        "sectionHeader-pattern": "url('/src/assets/animatedBg.svg')",
        "sectionFooter-pattern": "url('/src/assets/footer.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "night"],
  },
};
