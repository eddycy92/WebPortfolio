// src/themes/Theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 1. Define custom color palette, typography, etc.
const colors = {
  brand: {
    50: "#e3f9e5",
    100: "#c0d1f8",
    200: "#a3d9a5",
    300: "#7bc47f",
    400: "#57ae5b",
    500: "#2b6f9d", // Primary brand color
    600: "#2f8132",
    700: "#373b63",
    800: "#0e5814",
    900: "#05400a",
  },
};

// 2. Define the config for light/dark mode
const config: ThemeConfig = {
  initialColorMode: "light", // Set the initial color mode (light or dark)
  useSystemColorMode: false, // Enable this if you want to use the system's preference
};

// 3. Extend the default Chakra theme
const Theme = extendTheme({
  config, // Include the color mode configuration
  colors, // Add your custom colors here
  fonts: {
    heading: `'Open Sans', sans-serif`, // Custom font for heading
    body: `'Raleway', sans-serif`,      // Custom font for body
  },


  styles: {
    global: {
      "html, body": {
        fontSize: "16px",
        color: "gray.800",
        bg: "gray.50",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
      h1: {
        fontSize: "4xl",
        fontWeight: "bold",
        color: "brand.700", // Use your custom brand color
        padding:"1rem",
      

      },
      h2: {
        fontSize: "3xl",
        fontWeight: "semibold",
        color: "brand.700",
      },
      h3: {
        fontSize: "2xl",
        fontWeight: "bold",
        color: "brand.700",
      },
      h4: {
        fontSize: "x1", // "lg" is equivalent to the "large" size),
        fontWeight: "medium",
        color: "brand.700",
      },
      p: {
        fontSize: "md",
        color: "gray.600",
        lineHeight: "tall",
        marginBottom: "1rem", // Spacing after paragraphs
      },  
    },
  },

});

export default Theme;