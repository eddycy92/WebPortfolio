import { Carousel } from "../../components/index";
import React, { useEffect, useState } from "react";
import * as me from "../../../public/images/me/index";
import { Grid, GridItem, Box, Heading, Text, useColorModeValue} from "@chakra-ui/react"; // Chakra UI components

// Definition of the Header interface
interface HeaderProps {
  Container_Style?: React.CSSProperties;
  Grid_Style?: React.CSSProperties;
  Carousel_Style?: React.CSSProperties;
  Carousel_Interval?: number;
  Carousel_ID?: string;
}

type HeaderImagesType = Record<string, string>;

const Header: React.FC<HeaderProps> = ({
  Grid_Style = {},
  Carousel_Style = {},
  Carousel_Interval = 10000,
}) => {
  const [headerImagesSrc, setHeaderImagesSrc] = useState<string[]>([]);
  const [headerImagesAlt, setHeaderImagesAlt] = useState<string[]>([]);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const images = me as HeaderImagesType;

      if (Object.keys(images).length === 0) {
        setLoadingError("No images found in the people folder.");
        return;
      }

      const srcArray: string[] = [];
      const altArray: string[] = [];

      Object.keys(images).forEach((key) => {
        srcArray.push(images[key]);
        altArray.push(key);
      });

      setHeaderImagesSrc(srcArray);
      setHeaderImagesAlt(altArray);
    } catch (error) {
      console.error("Error loading header images:", error);
      setLoadingError("Failed to load header images.");
    }
  }, []);

  if (loadingError) {
    return <div>Error: {loadingError}</div>;
  }

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }} // 1 column on mobile, 2 on pc
      gap={5}
      textAlign={{ base: "left", md: "center" }} // Center text on mobile, left-align on pc
      placeItems="center"//Horizontal Alignment
      style={Grid_Style}
      bg={useColorModeValue("gray.200","gray.500")}
      w='90%'
      m='auto'
      border='md'
      borderColor={useColorModeValue('gray.500', 'gray.200')}
      borderRadius='md'
      borderWidth={1}
      p={5}
    >
      <GridItem>
        <Heading as="h1" textAlign="center" size="xxl" mb={4} fontWeight={300}>
          Solutioneer
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={2}>
          Welcome to Solutioneer, my personal sandbox of thoughts, projects,
          and the occasional sprinkle of madness.
        </Text>
        <Text fontSize="sm" color="gray.600" mb={2}>
          I'm a seasoned Technical Sales Professional, with a twist of
          Electrical Engineering, that stumbled over Software and
          Cybersecurity. Who knew that Software Sales, Sales Engineering, and
          Cybersecurity would turn out to be the perfect cocktail of my
          passions: Helping people find what they need and nerding out /
          showing off cutting edge technology.
        </Text>
        <Text fontSize="sm" color="gray.600" mb={2}>
          I am all about understanding how things work, dissecting them,
          reverse engineering them to then brew different explanations. If I
          talk to a whiskey sommelier, I would serve the information neat on
          a crystal glass. No ice or anything that could disturb the essence.
          Addressing a rookie? I'll whip up a root beer float of info,
          non-alcoholic, ice-cream optional. Just like the alcohol, we can
          hold the technical gibberish.
        </Text>
        <Text fontSize="sm" color="gray.600" mb={2}>
          Solutioneer is more than a glossy portfolio showcasing my work. It's
          also a treasure trove of unfolding projects, brain-tingling blogs,
          and the occasional lightbulb moments that strike at 3 a.m. because
          I drank too much coffee.
        </Text>
      </GridItem>
      
      <GridItem>
        {headerImagesSrc.length > 0 ? (
          <Carousel
            ImageC_Src={headerImagesSrc}
            ImageC_Alt={headerImagesAlt}
            Carousel_Interval={Carousel_Interval}
            Carousel_Style={Carousel_Style}
          />
        ) : (
          <Box>No images available to display.</Box>
        )}
      </GridItem>
    </Grid>
  );
};

export default Header;
