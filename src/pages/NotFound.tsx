// /src/pages/NotFound.tsx

import { Flex, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <Flex>
      <Helmet>
        <title>Solutioneer - 404</title>
        <meta name="description" content="404 Page Not Found" />
      </Helmet>
      <Flex>
        <Heading>404 - Not Found</Heading>
      </Flex>
    </Flex>
  )
}

export default NotFound
