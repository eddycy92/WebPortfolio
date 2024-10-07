import { Badge, Button, Center, Flex, Heading, Image, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { RowTagButtons } from '../../components/index';

interface ProjectCardPlusProps {
  // Main Settings
  projectTitle: string; // Project title
  projectSubtitle?: string; // Project subtitle, optional
  projectDescription: string; // Project description
  imageUrl: string; // Image URL for the project
  badges?: string[]; // List of badges (e.g., tags or categories)
  showPrimaryButton?: boolean; // Enable/disable the primary button
  primaryButtonText?: string; // Text for the primary button
  primaryButtonLink?: string; // Link for the primary button
  showSecondaryButton?: boolean; // Enable/disable the secondary button
  secondaryButtonText?: string; // Text for the secondary button
  secondaryButtonLink?: string; // Link for the secondary button
  proFeatures?: string[];
  statusOverlay?: string;
  overlayColor?: string;

  // Advanced Settings
  showThirdButton?: boolean; // Enable/disable the third button
  thirdButtonText?: string; // Text for the third optional button
  thirdButtonLink?: string; // Link for the third optional button

  // Formating and layout options
  imageSize?: string; // Control the image size
  componentSize?: 'xs' | 'sm' | 'md' | 'lg'; 
  fontSize?: string; // Control the font size for the text
  TextBoxWidth?: string;

}

export default function ProjectCardPlus({
  // Main Settings
  projectTitle,
  projectSubtitle,
  projectDescription,
  imageUrl,
  badges = [],

  // Buttons
  showPrimaryButton = true, // Show primary button by default
  primaryButtonText = 'Learn More',
  primaryButtonLink = '#',
  showSecondaryButton = true, // Show secondary button by default
  secondaryButtonText = 'Follow',
  secondaryButtonLink = '#',
  proFeatures = [],
  statusOverlay = '',
  overlayColor = 'red.500',

  // Advanced Settings
  showThirdButton = false, // Hide third button by default
  thirdButtonText = 'Go to Project', // Default text for third button
  thirdButtonLink = '#', // Default link for third button

  //Formating and layout options
  imageSize = '90%', // Default image size is 100%
  componentSize = 'md', // Default component size
  fontSize = 'sm', // Default font size
  TextBoxWidth= '100%',

}: ProjectCardPlusProps) {
  // Dynamically adjust size of the component for responsiveness
  const componentSizes = {
    xs: { width: '100%', maxWidth: '400px', height: '300px', headingFontSize: 'md', descriptionFontSize: 'xs' },
    sm: { width: '580px', maxWidth: '600px', height: '400px', headingFontSize: 'lg', descriptionFontSize: 'sm' },
    md: { width: '100%', maxWidth: '800px', height: '500px', headingFontSize: 'xl', descriptionFontSize: 'sm' },
    lg: { width: '100%', maxWidth: '800px', height: '500px', headingFontSize: '2xl', descriptionFontSize: 'md' },
  };

  const currentSize = componentSizes[componentSize];

  return (
    <Center p={1} gap={2} m={0}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={currentSize.width}
        maxW={currentSize.maxWidth}
        height={currentSize.height} // Fixed height for uniformity
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
        position="relative"
        fontSize={fontSize} // Control the font size
      >
        {/* Status Overlay */}
        {statusOverlay && (
          <Flex
            position="absolute"
            top={0}
            left={-2}
            zIndex={1}
            bg={overlayColor}
            color="white"
            fontSize="xs"
            fontWeight="bold"
            transform="rotate(-45deg)"
            transformOrigin="bottom right"
            width="120px"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            m={0}
            p={1}
          >
            {statusOverlay}
            <Box
              position="absolute"
              top={0}
              left="-29px"
              width="30px"
              height="100%"
              bg={overlayColor}
              clipPath="polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 50% 50%)"
              boxShadow="md"
            />
            <Box
              position="absolute"
              top={0}
              right="-29px"
              width="30px"
              height="100%"
              bg={overlayColor}
              clipPath="polygon(100% 0, 0 0, 0 50%, 0 100%, 100% 100%, 50% 50%)"
              boxShadow="md"
            />
          </Flex>
        )}

        {/* Image Section */}
        <Flex
          flex={1}
          bg="white"
          w={{ base: '100%', sm:'80%', md: '90%', lg: '100%' }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={2}
        >
          <Image
            objectFit="contain"
            boxSize={imageSize} // Ensure consistent image size
            src={imageUrl}
            alt={projectTitle}
          />
          {proFeatures.length > 0 && (
            <Flex direction="column" mt={2}>
              <Heading fontSize={currentSize.headingFontSize}>Resources</Heading>
              <RowTagButtons proFeatures={proFeatures} />
            </Flex>
          )}
        </Flex>

        {/* Content Section */}
        <Stack
          flex={1}
          flexDirection="column"
          //justifyContent="center" // Set the justifyContent prop to "center"
          alignItems="center"
          textAlign={{ base: 'center', sm: 'left', md: 'left', lg:'left' }}
          p={3}
          pt={2}
        >
          {/* Title */}
          <Heading fontSize={currentSize.headingFontSize} m="1">
            {projectTitle}
          </Heading>

          {/* Subtitle (Optional) */}
          {projectSubtitle && (
            <Text fontWeight={500} color={useColorModeValue('gray.500','gray.400')} size="sm" mb={1}>
              {projectSubtitle}
            </Text>
          )}

          {/* Project Description */}
          <Text
            color={useColorModeValue('gray.700', 'gray.400')}
            px={1}
            fontSize={currentSize.descriptionFontSize}
            mb={2}
            overflowY="auto" // Enable vertical scrolling
            textOverflow="ellipsis"
            maxHeight="20rem" // Limit the height to maintain uniformity
            width={TextBoxWidth}
            css={{
              '&::-webkit-scrollbar': {
                width: '6px', // Customize scrollbar width
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1', // Customize scrollbar track
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888', // Customize scrollbar thumb color
                borderRadius: '24px', // Round the edges of the scrollbar thumb
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555', // Change color on hover
              },
            }}
          >
            {projectDescription}
          </Text>

          {/* Badge List */}
          {badges.length > 0 && (
            <Stack align={'center'} justify={'center'} direction={'row'} mt={2}>
              {badges.map((badge, index) => (
                <Badge key={index} px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                  {badge}
                </Badge>
              ))}
            </Stack>
          )}

          {/* Buttons */}
          <Stack
            width={'100%'}
            mt={'auto'} // Push buttons to the bottom
            direction={{ base: 'column', md: 'row' }}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            {showPrimaryButton && (
              <Button
                as="a"
                href={primaryButtonLink}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'gray.200'}
                _focus={{ bg: 'gray.200' }}
                mb={{ base: 2, md: 0 }}
              >
                {primaryButtonText}
              </Button>
            )}
            {showSecondaryButton && (
              <Button
                as="a"
                href={secondaryButtonLink}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{ bg: 'blue.500' }}
                _focus={{ bg: 'blue.500' }}
              >
                {secondaryButtonText}
              </Button>
            )}
            {showThirdButton && (
              <Button
                as="a"
                href={thirdButtonLink}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                _hover={{ bg: 'green.500' }}
              >
                {thirdButtonText}
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
