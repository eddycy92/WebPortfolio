
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Articles, CheatSheets, Contact, Guides } from './pages/PagesIndex';
import { Navbar, Footer } from './containers';
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from 'react';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
