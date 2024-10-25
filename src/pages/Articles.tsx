import React from 'react'
import { Helmet } from 'react-helmet'
import { Heading, Flex } from '@chakra-ui/react'
import { ArticleCont1 } from '../containers/index' // Correct import for named export

function Articles() {
  
  return (
    <Flex
      flexDir="column"
      textAlign="center"
      justifyContent="center"
      p={0}
      m={0}
    >
      <Helmet>
        <title>Solutioneer - Articles</title>
        <meta name="description" content="Read my Articles" />
      </Helmet>
      <Heading m={10}>My Articles</Heading>
      <ArticleCont1 />
    </Flex>
  )
}

export default Articles
