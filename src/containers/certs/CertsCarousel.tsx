import { X3CardCarousel, CertCard } from "../../components/index";
import * as certifications from "../../../public/images/certifications"; // Import images dynamically
import React, { useEffect, useState } from "react";
import { extractFileInfoFromName } from "../../utils/filenameParser"; // Import the generic filename parser
import { Container, Heading, Box, Text, Spinner } from "@chakra-ui/react"; // Chakra UI components

type CertificationImagesType = Record<string, string>;

function CertsCarousel() {
  const [certificationCards, setCertificationCards] = useState<JSX.Element[]>([]);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    // Simulating async loading (assuming image fetching is async)
    try {
      const images = certifications as CertificationImagesType;

      if (Object.keys(images).length === 0) {
        setLoadingError("No images found in the certifications folder.");
        setLoading(false);
        return;
      }

      const certificationData = Object.keys(images).map((key) => {
        const { formattedPrimaryName, formattedSecondaryName } = extractFileInfoFromName(key);

        return {
          provider: formattedPrimaryName,
          certName: formattedSecondaryName,
          ImageC_Src: images[key],
          ImageC_Alt: key,
        };
      });

      const cards = certificationData.map((certification, index) => (
        <CertCard
          key={index}
          ImageC_Src={certification.ImageC_Src} // No need for array wrapping
          ImageC_Alt={certification.ImageC_Alt}
          CertsCard_CertName={certification.certName}
          CertsCard_CertProvider={certification.provider}
        />
      ));

      setCertificationCards(cards);
      setLoading(false); // Done loading
    } catch (error) {
      console.error("Error loading certification images:", error);
      setLoadingError("Failed to load certification images.");
      setLoading(false); // Stop loading on error
    }
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={5}>
        <Spinner size="xl" /> {/* Chakra's spinner component */}
        <Text mt={4}>Loading certifications...</Text>
      </Box>
    );
  }

  if (loadingError) {
    return (
      <Box textAlign="center" py={5}>
        <Text fontSize="lg" color="red.500">
          Error: {loadingError}
        </Text>
      </Box>
    );
  }

  return (
    <Box
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
      height={{ base: "auto", md: "auto" }}
    >
      <Heading as="h1" textAlign="center" mt={10} mb={4}>
        Certifications
      </Heading>

      {certificationCards.length > 0 ? (
        <X3CardCarousel X3CardCarousel_Children={certificationCards} />
      ) : (
        <Box textAlign="center" py={10}>
          <Text>No certifications available to display.</Text>
        </Box>
      )}
    </Box>
  );
}

export default CertsCarousel;
