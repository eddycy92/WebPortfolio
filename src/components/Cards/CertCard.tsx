import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

interface CertsCardProps {
  ImageC_Src?: string; // Image source
  ImageC_Alt?: string; // Alt text for the image
  CertsCard_CertName?: string; // Certification name
  CertsCard_CertProvider?: string; // Certification provider name
}

const CertCard: React.FC<CertsCardProps> = ({
  ImageC_Src = "placeholder.jpg", // Default image
  ImageC_Alt = "Placeholder image", 
  CertsCard_CertName = "Certification Name", 
  CertsCard_CertProvider = "Certification Provider"
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
          {CertsCard_CertName}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {CertsCard_CertProvider}
        </Text>
        <Box boxSize="150px">
          <Image
            src={ImageC_Src}
            alt={ImageC_Alt || `Image for ${CertsCard_CertName}`}
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
