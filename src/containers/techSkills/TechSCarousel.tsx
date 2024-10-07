import React, { useEffect, useState } from "react";
import { TechSkillCard, X3CardCarousel } from "../../components/index";
import { Heading, Flex, Box } from "@chakra-ui/react";

interface Tech {
  name: string;
  imageSrc: string;
  imageAlt: string;
  ShowImage: boolean;
}

interface TechCategory {
  type: string;
  skills: Tech[];
}

function TechSCarousel() {
  const [techSkills, setTechSkills] = useState<TechCategory[]>([]);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/content/TechSkills.json") // Fetches data from JSON file
      .then((response) => response.json())
      .then((data) => {
        setTechSkills(data.techSkills);
      })
      .catch((error) => {
        console.error("Error loading Technologies", error);
        setLoadingError("Failed to load Technologies.");
      });
  }, []);

  if (loadingError) {
    return <div>Error: {loadingError}</div>;
  }

  return (
    <Flex flexDir="column" p={2} my={15} w={'50%'} h="50vh" overflow="hidden">
      <Heading textAlign="center" m={1} size={'xl'}>
        Technical Knowledge
      </Heading>

      {techSkills.length > 0 ? (
        techSkills.map((category, index) => (
          <Box key={index} m={2}>
            <Heading size="md" m={0} textAlign="center">
              {category.type}
            </Heading>
            <X3CardCarousel                              
              X3CardCarousel_Children={category.skills.map((tech, idx) => (
                <TechSkillCard
                  key={idx}
                  ImageSrc={tech.imageSrc}
                  ImageAlt={tech.imageAlt}
                  Name={tech.name}
                  ExpLength="" // Placeholder, can be replaced with actual experience length
                  ShowRelatedProjects={false}
                  ShowExp={false}
                  HeadingSize="xxs"
                  ShowImage={tech.ShowImage}
                />
              ))}
              columnsPerBreakpoint={{ base: 2, sm: 2, md: 3, lg: 3 }} // Adjust column layout
            />
          </Box>
        ))
      ) : (
        <div>No Tech Skills Found</div>
      )}
    </Flex>
  );
}

export default TechSCarousel;
