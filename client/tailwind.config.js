/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Nunito Sans", "Nunito"],
    },
    extend: {
      boxShadow: {
        "tesla-sm": "#11253A 0px 8px 24px",
        "tesla-sm2": "#11253A 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
