// /src/components/Cards/CertCard.tsx

import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

interface CertsCardProps {
  ImageSrc?: string; // Image source
  ImageAlt?: string; // Alt text for the image
  CertName?: string; // Certification name
  CertProvider?: string; // Certification provider name
}

const CertCard: React.FC<CertsCardProps> = ({
  ImageSrc = "placeholder.jpg", // Default image
  ImageAlt = "Placeholder image", 
  CertName = "Certification Name", 
  CertProvider = "Certification Provider"
}) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
      bg="white"
      _hover={{ boxShadow: "xl" }} // Hover effect for visual feedback
      w="100%" // Full width
      h="300px" // Fixed height to make cards the same size
    >
      <Flex direction="column" alignItems="center" justifyContent="center" h="100%">
        <Heading as="h3" size="md" color="teal.600" mb={2}>
          {CertName}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {CertProvider}
        </Text>
        <Box boxSize="150px">
          <Image
            src={ImageSrc}
            alt={ImageAlt || `Image for ${CertName}`}
            borderRadius="md"
            objectFit="contain" //options: fill, contain, cover, none, scale-down
            boxSize="100%" // Ensures image takes up full space of the box
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CertCard;
