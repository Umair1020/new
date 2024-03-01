/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          100: "#505050",
          200: "rgba(80, 80, 80, 0.5)",
        },
        gray: {
          100: "#fafafa",
          200: "#111827",
          300: "rgba(255, 255, 255, 0.5)",
        },
        mediumslateblue: "#6366f1",
        blueviolet: "#7150f5",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        jomolhari: "Jomolhari",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "6xl": "25px",
      "26xl": "45px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
