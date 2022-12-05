module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
      colors: {
        primary: "#4575d8",
        'black'
        text1: "#474747",
        text2: "#666666",
        text3: "#666666",
        white: "#fff",
        error: "#f14550",
      },
      boxShadow: {
        sdprimary: "10px 10px 20px rgba(211, 211, 211, 0.25)",
      },
    },
  },
  plugins: [],
};
