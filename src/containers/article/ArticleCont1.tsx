import { useEffect, useState } from 'react';
import {
  Heading,
  Flex,
  Image,
  Text,
  List,
  ListItem,
  Link,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import ArticlesData from '../../../public/content/Articles.json';

// Define types for sections
type SectionType = 'paragraph' | 'image' | 'subtitle' | 'list' | 'link';

interface Section {
  type: SectionType;
  content?: string;
  src?: string;
  alt?: string;
  items?: string[];
}

interface Article {
  id: number;
  title: string;
  published: string;
  sections: Section[];
}

// Helper function to render a bulleted list
const renderBulletedList = (items: string[]) => (
  <List spacing={1} as="ul" styleType="disc" py={5} m={0}>
    {items.map((item, index) => (
      <ListItem key={index} fontSize="sm" color={useColorModeValue('gray.800', 'gray.600')} textAlign="left">
        {item}
      </ListItem>
    ))}
  </List>
);

// Simplified render function for each section
const renderSection = (section: Section, index: number) => {
  const TextStyle = {
    px: 10,
    m: 0,
    w: '100%',
    textAlign: 'left' as const,
    fontSize: 'sm',
    color: useColorModeValue('gray.700', 'gray.400'),
  };

  if (section.type === 'paragraph') {
    return (
      <Text {...TextStyle} key={index}>
        {section.content}
      </Text>
    );
  }

  if (section.type === 'subtitle') {
    return (
      <Heading
        as="h3"
        size="lg"
        mt={10}
        mb={0}
        mx="auto"
        color={useColorModeValue('gray.800', 'gray.100')}
        key={index}
      >
        {section.content}
      </Heading>
    );
  }

  if (section.type === 'list') {
    return (
      <Flex key={index} pl={20} pb={1} m={0} flexDir="column"
      >
        {renderBulletedList(section.items || [])}
      </Flex>
    );
  }

  if (section.type === 'image') {
    return (
      <Flex justifyContent="center" alignItems="center" key={index} w="100%" p={1} my={2} flexDir={"row"}>
        <Image
          objectFit="cover"
          maxW={{ base: "90%", md: "90%" }}
          src={section.src}
          alt={section.alt}
          borderRadius="md"
          shadow="md"
        />
      </Flex>
    );
  }

  if (section.type === 'link') {
    return (
      <Box key={index} m={0} pl={20} py={1}>
        <Link
          href={section.content}
          isExternal
          color="blue.500"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          fontSize="xs"
        >
          {section.content}
        </Link>
      </Box>
    );
  }

  return null; // Fallback for unhandled section types
};

// Main component
const ArticleCont1 = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  // Load articles data
  useEffect(() => {
    setArticles(ArticlesData.Articles as Article[]); // Load data from JSON file
  }, []);

  if (articles.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex flexDir="column" w="100%" maxW="90%" mx="auto" p={0} bg="gray.50" rounded="xl" mb={10}>
      {articles.map((article, articleIndex) => (
        <Flex
          key={articleIndex}
          flexDir="column"
          mb={20}
          p={0}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="lg"
          bg="white"
          shadow="xl"
        >
          {/* Article Title */}
          <Heading alignSelf="center" size="xl" mt={10} color={useColorModeValue('gray.900', 'gray.200')}>
            {article.title}
          </Heading>

          {/* Published Date */}
          <Text fontSize="sm" color={useColorModeValue('gray.400', 'gray.300')} mb={5} p={0} textAlign="center">
            Published: {article.published}
          </Text>

          {/* Article Sections */}
          <Flex
            flexWrap="wrap" // Allow wrapping of sections into multiple rows
            w="100%"
            h="150vh"
            m={0}
            px={10}
            justifyContent="" // Align items to the start of the row
            textAlign="center"
            gap={2} // Gap between each section
            flexDir="column"
            overflow="scroll"
          >
            {article.sections.map((section, index) => (
              <Flex key={index} w={{ base: "100%", md: "48%" }} minH="50px" >
                {renderSection(section, index)}
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default ArticleCont1;
