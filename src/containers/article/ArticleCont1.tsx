import React from 'react';
import { Heading, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';

// ArticleCont1Props interface
interface ArticleCont1Props {
  Title?: string;
  Subtitle?: string;
  Description?: string;
  TxtContent1?: string;
  TxtContent2?: string;
  TxtContent3?: string;
  ImageUrl1?: string;
  ImageUrl2?: string;
  ImageUrl3?: string;
  layoutType?: 'TextImageText' | 'TextText' | 'ImageText' | 'ArtImage'; // Added layoutType
  imagePosition?: 'left' | 'right'; // Optional for ImageText layout
  Badges?: string[];
  PButtonText?: string;
  PButtonLink?: string;
  SButtonText?: string;
  SButtonLink?: string;
  TButtonText?: string;
  FButtonText?: string;
  FButtonLink?: string;
  FiButtonText?: string;
  FiButtonLink?: string;
}

// Shared TextFormat logic
const getTextFormat = () => {
  const color = useColorModeValue('gray.700', 'gray.400');
  return {
    color,
    px: 3,
    flex: '1',
    w: ['100%', '100%', '45%'],
    textAlign: 'justify' as const,
  };
};

// 1. TextImageText layout
const TextImageText = ({
  TxtContent1,
  TxtContent2,
  ImageUrl1,
  Title,
}: {
  TxtContent1: string;
  TxtContent2: string;
  ImageUrl1: string;
  Title: string;
}) => {
  const textFormat = getTextFormat();
  return (
    <Flex flexDir="row" gap="20" alignItems="center">
      <Text {...textFormat}>{TxtContent1}</Text>
      <Image
        objectFit="cover"
        h={['30vh', '35vh', '40vh']}
        w={['100%', '100%', '30%']}
        src={ImageUrl1}
        alt={Title}
      />
      <Text {...textFormat}>{TxtContent2}</Text>
    </Flex>
  );
};

// 2. TextText layout
const TextText = ({ TxtContent1, TxtContent2 }: { TxtContent1: string; TxtContent2: string }) => {
  const textFormat = getTextFormat();
  return (
    <Flex flexDir="row" gap="20" alignItems="center">
      <Text {...textFormat}>{TxtContent1}</Text>
      <Text {...textFormat}>{TxtContent2}</Text>
    </Flex>
  );
};

// 3. ImageText layout
const ImageText = ({
  TxtContent,
  ImageUrl,
  imagePosition = 'left',
  Title,
}: {
  TxtContent: string;
  ImageUrl: string;
  imagePosition?: 'left' | 'right';
  Title: string;
}) => {
  const textFormat = getTextFormat();
  return (
    <Flex flexDir="row" gap="20" alignItems="center">
      {imagePosition === 'left' && (
        <Image
          objectFit="cover"
          h={['30vh', '35vh', '40vh']}
          w={['100%', '100%', '30%']}
          src={ImageUrl}
          alt={Title}
        />
      )}
      <Text {...textFormat}>{TxtContent}</Text>
      {imagePosition === 'right' && (
        <Image
          objectFit="cover"
          h={['30vh', '35vh', '40vh']}
          w={['100%', '100%', '30%']}
          src={ImageUrl}
          alt={Title}
        />
      )}
    </Flex>
  );
};

// 4. ArtImage layout
const ArtImage = ({ ImageUrl, Title }: { ImageUrl: string; Title: string }) => (
  <Image
    objectFit="cover"
    h={['30vh', '35vh', '40vh']}
    w={['100%', '100%', '45%']}
    src={ImageUrl}
    alt={Title}
  />
);

// Main Component for the Article Section
function ArticleCont1({
  Title = 'Article Title',
  Subtitle = 'Article Subtitle',
  TxtContent1 = 'This is an article that goes inside the article page...',
  TxtContent2 = 'This is the second paragraph...',
  TxtContent3 = 'One more paragraph...',
  ImageUrl1 = '/images/placeholders/placeholder.jpg',
  ImageUrl2 = '/images/placeholders/placeholder.jpg',
  ImageUrl3 = '/images/placeholders/placeholder.jpg',
  layoutType = 'TextImageText', // Default layout is TextImageText
  imagePosition = 'left', // Default image position for ImageText
}: ArticleCont1Props) {
  // Render different layouts based on the `layoutType` prop
  return (
    <Flex flexDir="column" bg="brand.100" justifyContent="center" w="90vw" alignItems="center" m="auto" p="20">
      <Heading m="5">{Title}</Heading>
      <Heading as="h2" size="1x1" m="5">
        {Subtitle}
      </Heading>

      {/* Render appropriate layout based on layoutType */}
      {layoutType === 'TextImageText' && (
        <TextImageText TxtContent1={TxtContent1} TxtContent2={TxtContent2} ImageUrl1={ImageUrl1} Title={Title} />
      )}
      {layoutType === 'TextText' && <TextText TxtContent1={TxtContent1} TxtContent2={TxtContent2} />}
      {layoutType === 'ImageText' && (
        <ImageText TxtContent={TxtContent1} ImageUrl={ImageUrl1} imagePosition={imagePosition} Title={Title} />
      )}
      {layoutType === 'ArtImage' && <ArtImage ImageUrl={ImageUrl1} Title={Title} />}
    </Flex>
  );
}

export default ArticleCont1;
