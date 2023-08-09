import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   codmbg: "url('/src/assets/codmbg.jpg')",
      // },
      colors: {
        "pry-black": "#0D0D0D",
        "pure-black": "#000",
        "pry-white": "#fff",
        "pry-grey": "#EFEFEF",
        "pry-green": "#00444D",
      },
    },
  },
  plugins: [],
};
export default config;
