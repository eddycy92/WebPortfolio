// src/pages/subPages/IndProject.tsx

import { Heading, Text, Flex, Image, useColorModeValue } from '@chakra-ui/react'

interface IndProjectProps {
    Title?: string
    Content?: string
    ImageURL?: string

}


function IndProject({
    Title="Title Sample | Your Title Goes Here",
    Content= 
        `Here is where the content goes, you can add a paragraph or two to describe the project. You can also add a list of features or technologies used in the project. There has to be a significant amount of text to fill the space and make it look good. 
        We can add more and more text to make it look like a real project description. Be very detailed and add a ton of words to bette explain things. This part should have atheast 5 paragraphs of text.
        In this new paragraph we can add more text to make it look like a real project description. Be very detailed and add a ton of words to better explain things. This part should have at least 5 paragraphs of text.
        Here is where the content goes, you can add a paragraph or two to describe the project. You can also add a list of features or technologies used in the project. There has to be a significant amount of text to fill the space and make it look good. 
        We can add more and more text to make it look like a real project description. Be very detailed and add a ton of words to bette explain things. This part should have atheast 5 paragraphs of text.
        In this new paragraph we can add more text to make it look like a real project description. Be very detailed and add a ton of words to better explain things. This part should have at least 5 paragraphs of text.
        Here is where the content goes, you can add a paragraph or two to describe the project. You can also add a list of features or technologies used in the project. There has to be a significant amount of text to fill the space and make it look good.`,
    ImageURL="/public/images/placeholders/placeholder.jpg"
}: IndProjectProps) {
  return (
    <Flex justify="center">
      <Flex
        direction="column"
        align="center"
        w={{ base: '90%', md: '80%', lg: '70%', xl: '60%' }}
        bg={useColorModeValue('gray.100', 'gray.800')}
        p={10} m={10} gap={5}
        rounded={10}
      >
        <Heading px={5} >{Title}</Heading>
        <Image src={ImageURL} />
        <Text px={5}>{Content}</Text>
        
      </Flex>
    </Flex>
  )
}

export default IndProject
