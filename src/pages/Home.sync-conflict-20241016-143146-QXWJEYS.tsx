// src/pages/Home.tsx

import React, { lazy, Suspense } from 'react';
import { Header, CertsCarousel, TechSCarousel, ArticleMiniCont } from "../containers";
import { Box, Spinner, Flex, useColorModeValue } from '@chakra-ui/react'; 
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
      <Flex as="main" px={0} py={0}  mx="auto" flexDir={"column"} align={'center'}>
        <Header />
        <Suspense fallback={<Spinner size="xl" />}>
          <CertsCarousel />
          <Flex 
            flexDirection={{base:"column", md:"row", lg:"row", xl:"row"}}
            h="100%" maxH="1000px"w="90%" mx="auto"
          >
            <ArticleMiniCont />
            <TechSCarousel />
          </Flex>
          <ProjectCarousel />
        </Suspense>
      </Flex>
    </>
  );
}

export default Home;
