// src/pages/Home.tsx

import React, { lazy, Suspense } from 'react';
import { Header, CertsCarousel, TechSCarousel } from "../containers";
import { Box, Spinner } from '@chakra-ui/react'; // Chakra UI components
import { Helmet } from 'react-helmet'; // React Helmet for SEO and meta tags
import MainMenu from "../configuration/menus/MainMenu";

// Lazy load other components to optimize performance
const HomeFeatured = lazy(() => import('../containers/featured/HomeFeatured'));
const ProjectCarousel = lazy(() => import('../containers/projects/ProjectCarousel'));

function Home() {
  return (
    <>
      {/* Helmet for SEO and meta tags */}
      <Helmet>
        <title>Solutioneer - Home</title>
        <meta name="description" content="Welcome to Solutioneer, showcasing certifications, featured projects, and more." />
      </Helmet>

      {/* Wrap the entire page in a Box or Container for spacing and layout consistency */}
      <Box as="main" px={5} py={8}  mx="auto">
        <Header />
        <Suspense fallback={<Spinner size="xl" />}>
          <CertsCarousel />
          
          {/* Lazy load heavier components
          <Suspense fallback={<Spinner size="xl" />}>
            <HomeFeatured />
          </Suspense> */}

        
          <ProjectCarousel />
          <TechSCarousel />
        </Suspense>
      </Box>
    </>
  );
}

export default Home;
