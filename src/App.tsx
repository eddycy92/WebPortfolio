// /src/App.tsx

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Spinner, extendTheme } from '@chakra-ui/react';
import Theme from './themes/Theme.tsx'; // custom theme
import {Navbar, Footer} from './containers/index.tsx'; 

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Articles = lazy(() => import('./pages/Articles'));
const CheatSheets = lazy(() => import('./pages/CheatSheets'));
const Contact = lazy(() => import('./pages/Contact'));
const Guides = lazy(() => import('./pages/Guides'));

console.log(extendTheme(Theme)); // Log the final theme to the console

function App() {
  return (
    <ChakraProvider  theme={Theme}>
      <Router>
        <Navbar heading="Solutioneer" pageURL="/" />  {/* Pass the correct props */}
        <Suspense fallback={<Spinner />}>  {/* Wrap your routes in Suspense for lazy loading */}
          <Routes>
            <Route path="/" element={<Home />} />  {/* Render Home component */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/cheatsheets" element={<CheatSheets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="*" element={<div>404 - Not Found</div>} />  {/* Fallback for undefined routes */}
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
