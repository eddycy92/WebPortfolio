// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // App already has ChakraProvider

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />  {/* No need for ChakraProvider here as it's in App.tsx */}
  </React.StrictMode>
);
