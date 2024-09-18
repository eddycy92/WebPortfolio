// src/containers/featured/TitleTextImage.tsx

import React, { ReactElement } from 'react';
import { H_Align, V_Align } from '../../utils/Alignment'; //Alignment-extended components
import { ChakraProps, FlexProps,ResponsiveValue,Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

interface TitleTextImageProps {
  title?: string;
  text?: React.ReactNode;
  textWidth?: ChakraProps['width']; // Optional width for text
  imageSrc?: string;
  imageAlt?: string; // Optional alt text for image
  imageLocation?: 'left' | 'right'; // Option to position the image
  imageHeight?: ChakraProps['height']; // Optional height for the image
  boxMaxHeight?: ChakraProps['maxH']; // Optional max height for the box
  noImage?: boolean; // Option to hide the image
}

const TitleTextImage: React.FC<TitleTextImageProps> = ({
  title = 'Title',
  text = 'Here is where you can add your text content. Then you can add some more text to make it look like a paragraph...',
  imageSrc = '../../../public/images/placeholders/placeholder.jpg',
  imageAlt,
  imageLocation = 'right', // Default image location is 'right'
  imageHeight = { base: '40vh', md: '50vh' },
  textWidth = { base: '100%', md: '60%' }, // Default text width is 60% on desktop
  boxMaxHeight = '600px',
  noImage = false,
  ...props
}) => {
  // Set flexDirection: 'column' for mobile, and 'row' or 'row-reverse' for desktop
  const flexDirection: FlexProps['flexDirection'] = {
    base: 'column', // Stack vertically on small screens (mobile)
    md: imageLocation === 'right' ? 'row-reverse' : 'row', // Horizontal on larger screens (Desktop)
  };

  return (
    <>
      <Box 
        ml={'auto'} 
        mr={'auto'}
        mt={{ base: 5, md: 10 }}
        mb={{ base: 5, md: 10 }}
        p={10} 
        bg="brand.100" 
        rounded="lg" 
        shadow="md"  
        maxH={boxMaxHeight} 
        width={{ base: '95%', md: '70%' }} 
        H_Align="center" 
        {...props}
      >
        <Heading H_Align="center" mb={8} >
          {title}
        </Heading>
        <Flex H_Align="apart" V_Align="center" flexDirection={flexDirection}>
          {/* Image is rendered before text to ensure it appears on top on mobile */}
          {!noImage && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            height= {imageHeight}
            rounded="lg"
            maxH={{base: '55vh', md:'380px'}}
            p={5}
            objectFit={{ base: 'contain', md: 'contain' }}
          />  )}
          <Box width={textWidth} m={'auto'} H_Align='center'>
            {text}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TitleTextImage;
