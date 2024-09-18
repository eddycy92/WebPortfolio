// src/components/navbar/Navbar.tsx

import React from 'react';
import { Box, Flex, Link, IconButton, Image, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavList } from "../../components";
import {Logo} from "../../configuration/WebsiteConfig";
import MainMenu from "../../configuration/menus/MainMenu";

interface NavbarProps {
  heading?: string;
  pageURL?: string;
  domain?: string;
}

const Navbar: React.FC<NavbarProps> = ({ heading = 'Solutioneer', pageURL = '/' }) => {
  const { isOpen, onToggle } = useDisclosure(); // Handle mobile menu toggling
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Articles', path: '/articles' },
    { label: 'CheatSheets', path: '/cheatsheets' },
    { label: 'Contact', path: '/contact' },
    { label: 'Guides', path: '/guides' },
  ]; // Static menu for now

  return (
    <Box as="nav" bg="gray.800" color="white" px={4} py={2} shadow="md">
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        {/* Logo and Heading */}
        <Flex align="center">
          <Link href={pageURL} display="flex" alignItems="center">
            <Image src={Logo} alt="Logo" boxSize="40px" mr={2} />
            <Text fontSize="xl" fontWeight="bold">{heading}</Text>
          </Link>
        </Flex>

        {/* Desktop NavList */}
        <Flex display={{ base: 'none', md: 'flex' }} align="center">
          <NavList menuItems={menuItems} onSelectItem={(item) => console.log(item)} />
        </Flex>

        {/* Mobile Menu Toggle */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile NavList */}
      {isOpen && (
        <Box display={{ md: 'none' }} pb={4} mt={2}>
          <NavList menuItems={menuItems} onSelectItem={(item) => console.log(item)} />
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
