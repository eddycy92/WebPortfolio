// src/themes/Theme.ts
import { border, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { color } from "framer-motion";
import { brotliDecompressSync } from "zlib";

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
  gray: {
    50: "#f7fafc",
    100: "#edf2f7",
    200: "#e2e8f0",
    300: "#cbd5e0",
    400: "#a0aec0",
    500: "#718096",
    600: "#4a5568",
    700: "#2d3748",
    800: "#1a202c",
    900: "#171923",
  },
  teal: {
    50: "#e6fffa",
    100: "#b2f5ea",
    200: "#81e6d9",
    300: "#4fd1c5",
    400: "#38b2ac",
    500: "#319795",
    600: "#2c7a7b",
    700: "#285e61",
    800: "#234e52",
    900: "#1d4044",
  },
};

// 2. Define the config for light/dark mode
const config: ThemeConfig = {
  initialColorMode: "light", // Set the initial color mode (light or dark)
  useSystemColorMode: true, // Enable this if you want to use the system's preference
};

// 3. Extend the default Chakra theme
const Theme = extendTheme({
  config, // Include the color mode configuration
  colors, // Add your custom colors here

  fonts: {
    heading: `'Raleway', sans-serif`, // Custom font for heading
    body: `'Raleway', sans-serif`,      // Custom font for body
  },

  fontSizes: {
    xxs: "0.685rem", // Custom font size for xxs (10px)
    xs: "0.875rem",   // Override for extra small (12px)
    sm: "0.975rem",  // Override for small (14px)
    md: "1.140rem",      // Default medium (16px)
    lg: "1.205rem",  // Override for large (18px)
    xl: "1.8rem",   // Override for extra large (20px)
    "2xl": "2rem",
    "3xl": "2.25rem",
    "4xl": "2.5rem",
    "5xl": "3rem",
    "6xl": "3.5rem",
  },

  components: {
    Flex: {
      baseStyle: {
        m: 4,
        p: 0,
        justifyContent: 'center', // Center content by default
        alignItems: 'center', // Align items to the center
        bg: 'teal', // Default background color
        color: 'white',
        borderRadius: 2,
        gap:5,
      },
      variants: {
        cardLayout: {
          borderRadius: 'md',
          boxShadow: 'lg', // Card-like shadow
          borderColor:"black",
          p: 6,
          m: 5,
          bg: 'white',
        },
        pageHeader: {
          p: 4,
          bg: 'brand.100',
          borderBottom: '2px solid',
          borderColor: 'brand.500',
        },
      },
      sizes: {
        sm: { p: 2, borderRadius: 'sm' },
        md: { p: 4, borderRadius: 'md' },
        lg: { p: 6, borderRadius: 'lg' },
      },
      defaultProps: {
        size: 'md', // Default size
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "bold", // All headings will be bold by default
        lineHeight: "1.2", // Tighten up the line height for headings
        textAlign:'center',
        justifyContent:'center',
        alignItems: 'center',
      },
      sizes: {
        xxs: { fontSize: "xxs" },
        xs: { fontSize: "xs" },
        sm: { fontSize: "sm" },
        md: { fontSize: "md" },
        lg: { fontSize: "lg" },
        xl: { fontSize: "xl" },
        "2xl": { fontSize: "2xl" },
        "3xl": { fontSize: "3xl" },
        "4xl": { fontSize: "4xl" },
        "5xl": { fontSize: "5xl" },
        "6xl": { fontSize: "6xl" },
      },
      defaultProps: {
        size: "xl", // Default heading size
      },
    },
    

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
        padding: "1rem",
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
        fontSize: "xl", // Fixed typo: "x1" -> "xl"
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
