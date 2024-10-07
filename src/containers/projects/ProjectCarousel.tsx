import { X3CardCarousel, ProjectCardPlus } from "../../components/index";
import React, { useEffect, useState } from "react";
import { Heading, Flex } from "@chakra-ui/react";

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  badges?: string[];
  pButtonText?: string;
  pButtonLink?: string;
  sButtonText?: string;
  sButtonLink?: string;
  proFeatures?: string[];
  statusOverlay?: string;
  overlayColor?: string;
}

function ProjectCarousel() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectCards, setProjectCards] = useState<JSX.Element[]>([]);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/content/Projects.json") // Fetches data from json file
      .then((response) => response.json())
      .then((data) => {
        const fetchedProjects: Project[] = data.projects;

        const cards = fetchedProjects.map((project, index) => (
          <ProjectCardPlus
            // Gets data from json file
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

            // Advanced Settings
            thirdButtonLink={project.pButtonLink}

            //Formating and layout options
            fontSize="xs"
            showThirdButton={false}
            thirdButtonText="Go to Project"
            componentSize="sm"
            
          />
        ));

        setProjectCards(cards);
      })
      .catch((error) => {
        console.error("Error loading project data:", error);
        setLoadingError("Failed to load project data.");
      });
  }, []);

  if (loadingError) {
    return <div>Error: {loadingError}</div>;
  }

  return (
    <Flex flexDir='column' p={2}>
      <Heading textAlign="center" m={10}>Projects</Heading>
      {projectCards.length > 0 ? (
        <X3CardCarousel
          X3CardCarousel_Children={projectCards}
          columnsPerBreakpoint={{ base: 1, sm: 2, md: 2, lg: 2 }} // Dynamic columns
        />
      ) : (
        <div>No projects available to display.</div>
      )}
    </Flex>
  );
}

export default ProjectCarousel;
