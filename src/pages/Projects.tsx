// src/pages/Projects.tsx

import React, { useEffect, useState } from 'react';
import { SimpleGrid, Heading, Box, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { ProjectCardPlus, SideBar } from '../components/index';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  buttonLink: string;
  badges?: string[];
  pButtonText?: string;
  pButtonLink?: string;
  sButtonText?: string;
  sButtonLink?: string;
  proFeatures?: string[];
  statusOverlay?: string;
  overlayColor?: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('All'); // Selected filter

  useEffect(() => {
    fetch('/content/Projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setFilteredProjects(data.projects); // Initially show all projects
      })
      .catch((error) => console.error('Error loading project data:', error));
  }, []);

  // Filter function based on selected category from badges or statusOverlay
  const handleFilter = (filter: string) => {
    setSelectedFilter(filter);
    
    if (filter === 'All') {
      setFilteredProjects(projects); // Show all projects
    } else {
      setFilteredProjects(
        projects.filter(
          (project) =>
            project.badges?.includes(filter) || project.statusOverlay === filter
        )
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Solutioneer - Projects</title>
        <meta 
          name="description" 
          content="Explore the projects built using various technologies." />
      </Helmet>

      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} display="flex" flexDirection={{ base: 'column', md: 'row' }}>
        {/* Sidebar - pass data and specify the field for filtering */}
        <SideBar
          onFilterSelect={handleFilter}
          selectedFilter={selectedFilter}
          data={projects} // Pass the projects data
          filterField="badges" // Filter based on badges (you can change this to statusOverlay)
        />

        {/* Main content section */}
        <Box
          ml={{ base: 0, md: 60 }} // Adjust margin to make room for the sidebar on larger screens
          p={6}
          my={5}
          flex="1"
        >
          <Heading textAlign="center" marginBottom={10}>
            Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing={6}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
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
                  proFeatures={project.proFeatures}
                  statusOverlay={project.statusOverlay}
                  overlayColor={project.overlayColor}
                />
              ))
            ) : (
              <Heading size="md" textAlign="center" color="gray.500">
                No projects found for the selected filter.
              </Heading>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Projects;
