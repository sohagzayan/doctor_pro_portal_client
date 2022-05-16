module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#565acf",
          secondary: "#1f2278",
          accent: "#37CDBE",
          neutral: "#444",
          "base-100": "#FFFFFF",
          info: "#e1e2f6",
          
          success: "#36D399",
          warning: "#f17732",
          error: "#F87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
