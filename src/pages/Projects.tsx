import React from 'react';
import { SimpleGrid, Heading, Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { ProjectCardPlus } from '../components/index'; // Import the custom card component

function Projects() {
  // Define your project data manually
  const projects = [
    {
      title: 'Project Alpha',
      subtitle: 'AI Solution',
      description: 'An AI-powered solution to optimize workflows.',
      imageUrl: '/images/projects/alpha.png',
      buttonLink: '/projects/alpha',
      badges: ['test', 'python', 'TypeScript'],
      pButtonText: 'View Project',
      pButtonLink: 'https://myproject.com',
      sButtonText: 'Star on GitHub',
      sButtonLink: 'https://github.com/myproject',
    },
    {
      title: 'Project Beta',
      subtitle: 'Web Application',
      description: 'A full-stack web application for e-commerce.',
      imageUrl: '/images/projects/beta.png',
      buttonLink: '/projects/beta',
      badges: ['other', 'thing', 'TypeScript'],
      pButtonText: 'View Project',
      pButtonLink: 'https://myproject.com',
      sButtonText: 'Star on GitHub',
      sButtonLink: 'https://github.com/myproject',
    },
    {
      title: 'Project Gamma',
      subtitle: 'Cloud Infrastructure',
      description: 'A robust cloud infrastructure solution.',
      imageUrl: '/images/projects/gamma.png',
      buttonLink: '/projects/gamma',
      badges: ['React', 'Chakra UI', 'TypeScript'],
      pButtonText: 'View Project',
      pButtonLink: 'https://myproject.com',
      sButtonText: 'Star on GitHub',
      sButtonLink: 'https://github.com/myproject',
    },
    {
      title: 'Project Gamma',
      subtitle: 'Cloud Infrastructure',
      description: 'A robust cloud infrastructure solution.',
      imageUrl: '/images/projects/gamma.png',
      buttonLink: '/projects/gamma',
      badges: ['React', 'Chakra UI', 'TypeScript'],
      pButtonText: 'View Project',
      pButtonLink: 'https://myproject.com',
      sButtonText: 'Star on GitHub',
      sButtonLink: 'https://github.com/myproject',
    },
    // You can add more projects here
  ];

  return (
    <>
      <Helmet>
        <title>Solutioneer - Projects</title>
        <meta name="description" content="Explore the projects built using various technologies." />
      </Helmet>

      <Box p={6}>
        <Heading textAlign="center" marginBottom={10}>
          Projects
        </Heading>

        {/* SimpleGrid to render the project cards responsively */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }} // Responsive grid with 1 to 4 columns
          spacing={10} // Adjust spacing between cards
          alignItems="center" // Center the grid
          gap={20}
        >
          {projects.map((project, index) => (
            <ProjectCardPlus
              key={index}
              imageUrl={project.imageUrl}
              projectTitle={project.title}
              projectSubtitle={project.subtitle}
              projectDescription={project.description}
              primaryButtonLink={project.pButtonLink}
              primaryButtonText={project.pButtonText}
              secondaryButtonLink={project.sButtonLink}
              secondaryButtonText={project.sButtonText}
              badges={project.badges}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Projects;
