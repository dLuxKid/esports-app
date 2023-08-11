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
      },
      animation: {
        fadein: "fadein 1s ease-in-out",
        fadeinSlow: "fadein 0.5s ease-in-out",
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
    },
  },
  plugins: [],
};
export default config;
