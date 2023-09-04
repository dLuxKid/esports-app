import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        popup: {
          from: {
            opacity: "0",
            scale: "0.8",
          },
          to: {
            opacity: "1",
            scale: "1",
            transform: "none",
          },
        },
      },
      animation: {
        fadein: "fadein 1s ease-in-out",
        fadeinslow: "fadein 0.5s ease-in-out",
        popup1: "popup .8s .2s cubic-bezier(0, 0.9, 0.3, 1.2) forwards",
        popup2: "popup .8s .4s cubic-bezier(0, 0.9, 0.3, 1.2) forwards",
      },
      colors: {
        "pry-black": "#0D0D0D",
        "pure-black": "#000",
        "pry-white": "#fff",
        "pry-grey": "#EFEFEF",
        "pry-green": "#00444D",
      },
      width: {
        "1/10": "10%",
      },
      screens: {
        nav: "992px",
      },
    },
  },
  plugins: [],
};
export default config;
