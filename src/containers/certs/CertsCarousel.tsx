// /src/containers/certs/CertsCarousel.tsx

import { X3CardCarousel, CertCard } from '../../components/index'
import certificationsData from '../../../public/content/Certifications.json' // Import the JSON data
import React, { useEffect, useState } from 'react'
import { Container, Heading, Box, Text, Spinner,Flex } from '@chakra-ui/react' // Chakra UI components


function CertsCarousel() {
  const [certificationCards, setCertificationCards] = useState<JSX.Element[]>(
    [],
  )
  const [loading, setLoading] = useState<boolean>(true) // Loading state

  useEffect(() => {
    // Load the certification data from JSON
    const certificationData = certificationsData.certifications

    // Map the certifications into CertCard components
    const cards = certificationData.map((certification, index) => (
      <CertCard
        key={index}
        ImageSrc={certification.image} // Use image from JSON
        ImageAlt={certification.name} // Alt text for the image
        CertName={certification.name} // Certification name
        CertProvider={certification.provider} // Certification provider
      />
    ))

    setCertificationCards(cards)
    setLoading(false) // Done loading
  }, [])

  if (loading) {
    return (
      <Flex textAlign="center" py={5}>
        <Spinner size="xl" /> {/* Chakra's spinner component */}
        <Text mt={4}>Loading certifications...</Text>
      </Flex>
    )
  }

  return (
    <Flex
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems={'center'}
      height={{ base: 'auto', md: 'auto' }}
      flexDirection="column"
      gap={1}
    >
      <Heading as="h1" textAlign="center" mt={10} mb={4}>
        Certifications
      </Heading>

      {certificationCards.length > 0 ? (
        <X3CardCarousel X3CardCarousel_Children={certificationCards} />
      ) : (
        <Flex textAlign="center" py={10}>
          <Text>No certifications available to display.</Text>
        </Flex>
      )}
    </Flex>
  )
}

export default CertsCarousel
