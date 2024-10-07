// /src/components/Cards/TechSkillCard.tsx

import React from 'react'
import { Flex, Image, Heading, useColorModeValue } from '@chakra-ui/react'
import { RowTagButtons } from '../index'

interface TechSkillCardProps {
  // General Settings
  ImageSrc?: string
  ImageAlt?: string
  Name?: string
  ExpLength?: string
  RelatedProjects?: string[]

  // Styling
  Width?: { base: string; sm: string; md: string; lg: string }
  Height?: { base: string; sm: string; md: string; lg: string }
  HeadingSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

  // Optional:
  ShowRelatedProjects?: boolean
  ShowExp?: boolean
  ShowImage?:boolean
}

function TechSkillCard({
  ImageSrc = '/images/placeholders/placeholder.jpg',
  ImageAlt = 'Placeholder image',
  Name = 'Skill Name',
  ExpLength = '10000 years',
  RelatedProjects = ['Project 1', 'Project 2'],
  Width = { base: '100%', sm: '80&', md: '80%', lg: '100%' },
  Height = { base: '100%', sm: '80&', md: '70%', lg: '70%' },
  ShowRelatedProjects = true,
  ShowExp = true,
  HeadingSize = 'sm',
  ShowImage = true
  
}: TechSkillCardProps) {
  if (ShowRelatedProjects === false) {
    RelatedProjects = []
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      p={4}
      bg={useColorModeValue('white', 'gray.900')}
      borderWidth="1px"
      borderRadius="lg"
      w={Width}
      h={Height}
      justifyContent="start"
      textAlign="center"
    >
      <Heading size={HeadingSize} m={0} p={1}>
        {Name}
      </Heading>
      {ShowImage && (
      <Image src={ImageSrc} borderRadius="lg" alt={ImageAlt} w="80%" p={4} />
      )}
      {ShowExp && (
        <Heading size="xs" mt={4}>
          {`Experience: ${ExpLength}`}
        </Heading>
      )}
      <RowTagButtons variant="solid" proFeatures={RelatedProjects} />
    </Flex>
  )
}

export default TechSkillCard
