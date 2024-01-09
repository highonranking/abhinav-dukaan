/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-800": "#1e2640",
        "custom-blue-600": "#0e4f82",
        "custom-blue-400": "#146eb4",
        "custom-blue-500": "#216eb4",
        "custom-gray-800": "#4d4d4d",
        "custom-gray-700": "#3f3f46",
        "custom-gray-600": "#71717a",
        "custom-gray-300": "#ccc",
        "custom-gray-200": "#dfdddd",
        "custom-gray-100": "#f7f7f7",
        "custom-white-100": "#fafafa",
        "custom-white-800": "#ffffff",
      },
    },
  },
  plugins: [],
};
