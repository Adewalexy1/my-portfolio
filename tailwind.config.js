/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
