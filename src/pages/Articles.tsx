import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Flex } from '@chakra-ui/react';
import { ArticleCont1 } from '../containers/index'; // Correct import for named export

function Articles() {
  const articles = [
    {
      title: 'Article Alpha',
      subtitle: 'AI Solution',
      txtContent1: 'This is the content for Article Alpha...',
      txtContent2: 'Second paragraph for Alpha...',
      txtContent3: 'Third paragraph for Alpha...',
      imageUrl1: '/images/projects/alpha.png',
      layoutType: 'TextImageText',
    },
    {
      title: 'Article Beta',
      subtitle: 'Data Science Insight',
      txtContent1: 'This is the content for Article Beta...',
      txtContent2: 'Second paragraph for Beta...',
      imageUrl1: '/images/projects/beta.png',
      layoutType: 'ImageText',
      imagePosition: 'right',
    },
    {
      title: 'Article Gamma',
      subtitle: 'Research Insight',
      txtContent1: 'This is the content for Article Gamma...',
      txtContent2: 'Second paragraph for Gamma...',
      layoutType: 'TextText',
    },
    {
      title: 'Article Delta',
      subtitle: 'Visual Article',
      imageUrl1: '/images/projects/delta.png',
      layoutType: 'ArtImage',
    },
  ];

  return (
    <Flex flexDir="column" w="100%" h="auto" textAlign="center" justifyContent="center">
      <Helmet>
        <title>Solutioneer - Articles</title>
        <meta name="description" content="Read my Articles" />
      </Helmet>
      <Heading m={10}>My Articles</Heading>

      {articles.map((article, index) => (
        <ArticleCont1
          key={index}
          Title={article.title}
          Subtitle={article.subtitle}
          TxtContent1={article.txtContent1}
          TxtContent2={article.txtContent2}
          TxtContent3={article.txtContent3}
          ImageUrl1={article.imageUrl1}
          layoutType={article.layoutType as "TextImageText" | "ImageText" | "TextText" | "ArtImage"}
          imagePosition={article.imagePosition as "right" | "left" | undefined}
        />
      ))}
    </Flex>
  );
}

export default Articles;
