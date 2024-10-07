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
    <Flex flexDir="column" p={2} my={20}>
      <Heading textAlign="center" m={1} size={'xl'}>
        Technical Knowledge
      </Heading>

      {techSkills.length > 0 ? (
        techSkills.map((category, index) => (
          <Box key={index} mb={8}>
            <Heading size="md" my={5} textAlign="center">
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
                  RelatedProjects={["Project 1", "Project 2"]} // Optional projects
                  Width={{ base: "100%", sm: "55%", md: "55%", lg: "60%" }}
                  Height={{ base: "100%", sm: "80%", md: "80%", lg: "90%" }}
                  ShowRelatedProjects={false}
                  ShowExp={false}
                  HeadingSize="xxs"
                  ShowImage={tech.ShowImage}
                />
              ))}
              columnsPerBreakpoint={{ base: 1, sm: 4, md: 4, lg: 4 }} // Adjust column layout
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
