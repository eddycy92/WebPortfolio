// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'; // App already has ChakraProvider

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);
