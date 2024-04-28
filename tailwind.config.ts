import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
const colors = require("tailwindcss/colors");

export default <Partial<Config>>{
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      green: colors.green,
      red: colors.red,
      teal: colors.teal,
    },
  },
  darkMode: [],
};
