import React, { Suspense } from 'react';
import { Spinner, Flex, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { ProjectCardPlus } from '../components/index';
import { H_Align, V_Align } from '../utils/Alignment';

const Projects = () => (
  <>
    <Helmet>
      <title>Solutioneer - Projects</title>
      <meta name="description" content="Explore the projects built using various technologies." />
    </Helmet>

    {/* Flex container with horizontal alignment */}
    <Flex {...H_Align('center')} flexDirection="column">
      {/* Heading with horizontal alignment */}
      <Heading {...H_Align('center')} margin="10">
        Projects
      </Heading>

      <Suspense fallback={<Spinner size="xl" />}>
        <ProjectCardPlus projectDataPath={"../../public/images/projects/index.tsx"}/>
      </Suspense>
    </Flex>
  </>
);

export default Projects;
