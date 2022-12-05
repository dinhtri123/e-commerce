module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4575d8",
        black: "#000",
        dark: "#222222",
        text1: "#474747",
        text2: "#666666",
        text3: "#666666",
        white: "#fff",
        error: "#-webkit-box-shadow: 0px 20px 35px -16px rgba(255, 159, 16, 0.6);
        -moz-box-shadow: 0px 20px 35px -16px rgba(255, 159, 16, 0.6);
        box-shadow: 0px 20px 35px -16px rgba(255, 159, 16, 0.6);      
      }",
      },
      boxShadow: {
        sdprimary: "10px 10px 20px rgba(211, 211, 211, 0.25)",
      },
    },
  },
  plugins: [],
};
