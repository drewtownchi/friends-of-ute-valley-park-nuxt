import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        green: {
          50: "#E0FAEA",
          100: "#C2F5D4",
          200: "#84EBAA",
          300: "#47E17F",
          400: "#1FBC59",
          500: "#15803D",
          600: "#11652F",
          700: "#0D4F25",
          800: "#093519",
          900: "#041A0C",
          950: "#020D06"
        }
      }
    }
  }
}