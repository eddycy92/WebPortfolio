// src/pages/Home.tsx

import React, { lazy, Suspense } from 'react';
import { Header, CertsCarousel, TechSCarousel } from "../containers";
import { Box, Spinner, Flex} from '@chakra-ui/react'; // Chakra UI components
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
          <Flex 
          flex-basis={{base:"25%", md:"25%", lg:"25%", xl:"25%"}}
            flexDirection={{base:"column", md:"row", lg:"row", xl:"row"}}
          >
            <TechSCarousel />

          </Flex>

        
          <ProjectCarousel />

        </Suspense>
      </Box>
    </>
  );
}

export default Home;
