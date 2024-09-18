import { Badge, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue, ChakraProps } from "@chakra-ui/react";
import React from "react";
import { Spinner } from "@chakra-ui/react";
import useContentFetcher from "../../utils/ContentFetcher";

interface ProjectCardPlusProps {
  cardWidth?: ChakraProps["width"];
  cardHeight?: ChakraProps["height"];
  buttonTxt?: string;
  fallbackImg?: string;
  onPrimaryButtonClick?: () => void;
  projectLink?: string;
  projectDataPath: string;
  isLocal?: boolean;
}

const ProjectCardPlus: React.FC<ProjectCardPlusProps> = ({
  cardWidth = { base: "100%", md: "600px" },
  cardHeight = { base: "476px", md: "20rem" },
  buttonTxt = "View Project",
  fallbackImg = 'placeholder.png',
  onPrimaryButtonClick,
  projectLink = '#',
  projectDataPath,
  isLocal = true,
}) => {
  // Call hooks at the top level, unconditionally
  const { data: projectData, isLoading, error } = useContentFetcher<any>(projectDataPath, isLocal);

  // Conditional rendering logic comes AFTER hooks are called
  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Error loading project data: {error.message}</Text>;

  // Assuming 'projectData' contains 'images' property
  const imageSrc = projectData?.images ? projectData.images[projectData.imageSrc] || fallbackImg : fallbackImg;

  return (
    <Center m={10}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={cardWidth}
        h={cardHeight}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="gray.200">
          <Image objectFit="cover" boxSize="100%" src={imageSrc} alt="Project Image" />
        </Flex>
        <Stack flex={1} p={4} justify="center" align="center">
          <Heading fontSize="2xl">{projectData?.name || 'Project Name'}</Heading>
          <Text fontWeight={600} color="gray.500" mb={4}>
            {projectData?.tag || 'Web Application'}
          </Text>
          <Text textAlign="center" color={useColorModeValue("gray.700", "gray.400")}>
            {projectData?.description || 'Project description goes here.'}
          </Text>
          <Stack align="center" direction="row" mt={6}>
            {projectData?.badges?.map((badge: string, index: number) => (
              <Badge key={index} px={2} py={1} fontWeight="400">
                {badge}
              </Badge>
            ))}
          </Stack>
          <Button as="a" href={projectLink} onClick={onPrimaryButtonClick} bg="blue.400" color="white" _hover={{ bg: "blue.500" }}>
            {buttonTxt}
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProjectCardPlus;
