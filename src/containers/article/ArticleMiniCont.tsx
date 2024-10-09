// /src/containers/article/ArticleMiniCont.tsx

import React, { useEffect, useState } from 'react';
import { ArticlePreviewCard } from '../../components/index';
import { Flex, Heading, Box, Spinner, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Use motion.create() to properly wrap Chakra components with framer-motion

interface Article {
  title: string;
  summary: string;
  imageOn: boolean;
  imageSrc: string;
  articleLink: string;
}

function ArticleMiniCont() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/content/Articles.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.Articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading Articles", error);
        setLoadingError("Failed to load Articles.");
        setLoading(false);
      });
  }, []);

  if (loadingError) {
    return <Box textAlign="center">{loadingError}</Box>;
  }

  return (
    <Flex flexDir="column" mx="auto" my={10} w="60%" gap={8} overflow="scroll">
      <Heading textAlign="center" mb={6} fontSize="2xl" color="brand.700">
        Latest Articles
      </Heading>

      {loading ? (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <Flex
            key={index}
            flexDir="row"
            bg="white"
            cursor="pointer"
            _hover={{ bg: "gray.50", transform: "translateY(-5px)" }} // Lift on hover
            m={2} p={0}
          >
            <ArticlePreviewCard
              title={article.title}
              summary={article.summary}
              imageOn={article.imageOn}
              imageSrc={article.imageSrc}
              articleLink={article.articleLink}
            />
          </Flex>
        ))
      ) : (
        <Box textAlign="center">No articles found.</Box>
      )}
    </Flex>
  );
}

export default ArticleMiniCont;
