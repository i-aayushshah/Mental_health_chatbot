/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        century: ['Century Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-pink-50', 'bg-pink-100', 'bg-pink-600', 'bg-pink-700',
    'bg-blue-50', 'bg-blue-100', 'bg-blue-600', 'bg-blue-700',
    'text-pink-600', 'text-pink-700', 'text-blue-600', 'text-blue-700',
    'from-pink-500', 'to-pink-600', 'from-blue-500', 'to-blue-600',
  ],
}
