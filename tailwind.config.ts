import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/admin/ui/*.tsx",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|table|badge|card|date-picker|dropdown|modal|pagination|select|switch|tooltip|spinner|ripple).js",
  ],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: "#fff",
          },
        },
      },
    }),
  ],
};
export default config;
