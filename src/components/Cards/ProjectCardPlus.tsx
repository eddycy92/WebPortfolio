import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


interface ProjectCardPlusProps {
  projectTitle: string; // Project title
  projectSubtitle?: string; // Project subtitle, optional
  projectDescription: string; // Project description
  imageUrl: string; // Image URL for the project
  badges?: string[]; // List of badges (e.g., tags or categories)
  primaryButtonText?: string; // Text for the primary button (e.g., "Message" or "View")
  primaryButtonLink?: string; // Link for the primary button
  secondaryButtonText?: string; // Text for the secondary button (e.g., "Follow" or "More Info")
  secondaryButtonLink?: string; // Link for the secondary button
}

export default function ProjectCardPlus({
  projectTitle,
  projectSubtitle,
  projectDescription,
  imageUrl,
  badges = [],
  primaryButtonText = 'Learn More', // Default text for primary button
  primaryButtonLink = '#', // Default link for primary button
  secondaryButtonText = 'Follow', // Default text for secondary button
  secondaryButtonLink = '#', // Default link for secondary button
}: ProjectCardPlusProps) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        {/* Image Section */}
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={imageUrl}
            alt={projectTitle}
          />
        </Flex>

        {/* Content Section */}
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          {/* Title */}
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {projectTitle}
          </Heading>

          {/* Subtitle (Optional) */}
          {projectSubtitle && (
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {projectSubtitle}
            </Text>
          )}

          {/* Project Description */}
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {projectDescription}
          </Text>

          {/* Badge List */}
          {badges.length > 0 && (
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  px={2}
                  py={1}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  fontWeight={'400'}
                >
                  {badge}
                </Badge>
              ))}
            </Stack>
          )}

          {/* Buttons */}
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              as="a"
              href={primaryButtonLink}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'gray.200'}
              _focus={{ bg: 'gray.200' }}
            >
              {primaryButtonText}
            </Button>
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
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
