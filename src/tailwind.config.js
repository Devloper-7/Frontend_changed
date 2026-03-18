/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['var(--font-lexend)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
};
