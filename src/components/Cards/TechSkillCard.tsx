// /src/components/Cards/TechSkillCard.tsx

import { Flex, Image, Heading, useColorModeValue } from '@chakra-ui/react'
import { RowTagButtons } from '../index'

interface TechSkillCardProps {
  ImageSrc?: string;
  ImageAlt?: string;
  Name?: string;
  ExpLength?: string;
  RelatedProjects?: string[];
  HeadingSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  ShowRelatedProjects?: boolean;
  ShowExp?: boolean;
  ShowImage?: boolean;
}

function TechSkillCard({
  ImageSrc = '/images/placeholders/placeholder.jpg',
  ImageAlt = 'Placeholder image',
  Name = 'Skill Name',
  ExpLength = '10000 years',
  RelatedProjects = ['Project 1', 'Project 2'],
  ShowRelatedProjects = true,
  ShowExp = true,
  HeadingSize = 'xxs',
  ShowImage = true,
}: TechSkillCardProps) {

  const filteredProjects = ShowRelatedProjects ? RelatedProjects : [];

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderWidth="1px"
      borderColor={useColorModeValue('gray.300', 'white')}
      borderRadius="lg"
      p={2} m={0}

      // Card Size
      w="100%" h="100%"
      maxH="90px" minH="50px"
      maxW="90px" minW="50px"
    >
      {/* Skill Name Heading */}
      <Heading size={HeadingSize} m={0} p={0} >
        {Name}
      </Heading>

      {/* Image, with responsive height adjustments */}
      {ShowImage && (
        <Image
          src={ImageSrc}
          alt={ImageAlt}
          p={1} m={0}          
          w="90%" h="90%"
          objectFit="contain"
        />
      )}

      {/* Experience length */}
      {ShowExp && (
        <Heading size="xs" mt={2}>
          {`Experience: ${ExpLength}`}
        </Heading>
      )}

      {/* Related Projects (Hidden if ShowRelatedProjects is false) */}
      <RowTagButtons variant="solid" proFeatures={filteredProjects} />
    </Flex>
  );
}

export default TechSkillCard;
