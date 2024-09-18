// src/components/Cards/SocialProfile.tsx
import {Badge,Button,Center,Flex,Heading,Image,Stack,Text,useColorModeValue, ChakraProps} from "@chakra-ui/react";



interface SocialProfileProps {
  cardWidth?: ChakraProps["width"];
  cardHeight?: ChakraProps["height"];
  buttonTxt?: string;
  secButtonTxt?: string;
  imageSrc?: string;
  userName?: string; // Optional username
  userTag?: string; // Optional user tag
  description?: string; // Optional user description
  badges?: string[]; // Optional list of badges
  onPrimaryButtonClick?: () => void; // Optional click handler for the primary button
  onSecondaryButtonClick?: () => void; // Optional click handler for the secondary button
}

function SocialProfile({
  cardWidth = { base: "100%", md: "540px" },
  cardHeight = { base: "476px", md: "20rem" },
  buttonTxt = "Learn More",
  secButtonTxt = "Message",
  imageSrc = "images/placeholders/placeholder.jpg",
  userName = "Lindsey James",
  userTag = "@lindsey_jam3s",
  description = "Actress, musician, songwriter and artist. PM for work inquiries or #tag me in your posts",
  badges = ["#art", "#photography", "#music"],
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: SocialProfileProps) {
  return (
    <Center m={20}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={cardWidth}
        h={cardHeight}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="brand.200">
          <Image objectFit="cover" boxSize="100%" src={imageSrc} alt="Profile" />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {userName}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {userTag}
          </Text>
          <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
            {description}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {badges.map((badge, index) => (
              <Badge
                key={index}
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                {badge}
              </Badge>
            ))}
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={onSecondaryButtonClick}
            >
              {secButtonTxt}
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              onClick={onPrimaryButtonClick}
            >
              {buttonTxt}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}

export default SocialProfile;