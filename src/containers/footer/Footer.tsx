// /src/components/Footer.tsx
import { NavList, ImageC, Button } from "../../components/index";
import MainMenu from '../../configuration/menus/MainMenu';
import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank, FaLink } from 'react-icons/fa'; // React Icons
import { Box, Icon, useToast, Flex, Input, Text, Heading, Grid, Link, Center } from '@chakra-ui/react'; // Chakra UI components

interface FooterProps {
  Footer_Style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
  Footer_Style,
}) => {
  const toast = useToast();  // Chakra UI's toast notification for feedback

  // Function to copy the URL to the clipboard
  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText("https://www.ccsolutioneer.com")
        .then(() => {
          toast({
            title: "Link copied!",
            description: "Website URL copied to clipboard.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        })
        .catch(() => {
          toast({
            title: "Clipboard failed.",
            description: "Unable to copy the link using the Clipboard API.",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = "https://www.ccsolutioneer.com";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
        toast({
          title: "Link copied!",
          description: "URL copied using the fallback method.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        document.body.removeChild(textArea);
        toast({
          title: "Failed to copy.",
          description: "There was an issue copying the link.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box 
      textAlign="center"
      as="footer" // Use the footer element for accessibility
      bg="gray.900" 
      color="white" 
      p={5}
      style={Footer_Style}>
      <Flex 
        justifyContent="space-between"  // Space between the sections
        alignItems="center"  // Align the sections vertically in the center
        maxW="7xl"
        mx="auto"
        flexWrap="wrap"  // Allow wrapping on smaller screens
        gap={5}          // Space between items on smaller screens
      >
        
        {/* Left Section: Logo and Quick Links */}
        <Box>
          <ImageC 
            ImageC_Src="images/marketing/Solutioneer.png" 
          />
        </Box>

          {/* Right Section: Social Links and Newsletter */}
        <Box >
          <NavList
              menuItems={MainMenu()}
              onSelectItem={(item) => console.log(item)}
            />
          <Box >
            <Heading as="h3" color="gray" size="md" mt={12} >
              Stay Connected
            </Heading>
            <Flex gap={4} m={5} justifyContent="center" >
              <Link href="https://www.linkedin.com/in/eduardo-caceres-young/" isExternal>
                <Icon as={FaLinkedin} boxSize={6} />
              </Link>
              <Link href="https://github.com/eddycy92" isExternal>
                <Icon as={FaGithub} boxSize={6} />
              </Link>
              <Link href="https://www.hackerrank.com/your-hackerrank" isExternal>
                <Icon as={FaHackerrank} boxSize={6} />
              </Link>
              <Box as="button" onClick={copyToClipboard}>
                <Icon as={FaLink} boxSize={6} />
              </Box>
          </Flex>
        </Box>

        {/* Newsletter Subscription */}
        {/* <Box mt={5} mb={5}>
          <Heading color='gray' as="h3" size="md" m={4}>
            Subscribe to our Newsletter
          </Heading>
          <Flex as="form" gap={2} m={4}>
            <Input placeholder="Your email" />
            <Button>Subscribe</Button>
          </Flex>
        </Box> */}
      </Box>

        {/* Right Section: Contact Form */}
        {/* <Box>
          <Heading color='gray' as="h3" size="md" m={4}>
            Contact Us
          </Heading>
          <Input placeholder="Your email" type="email" mb={2} />
          <Input placeholder="Your message" type="text" mb={2} />
          <Button>Send Message</Button>
        </Box> */}
        
      </Flex>

      {/* Copyright Section */}
      <Box textAlign="center" mt={10}>
        <Text color='gray' fontSize="sm">
          © 2024 Solutioneer. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;