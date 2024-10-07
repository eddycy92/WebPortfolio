// src/index.tsx

import { ChakraProvider } from "@chakra-ui/react"
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Theme from "./themes/Theme" // Import your custom theme

const container = document.getElementById('root');
const root = createRoot(container!);  // Create root
root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}> {/* Wrap your app in ChakraProvider and pass the custom theme */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
