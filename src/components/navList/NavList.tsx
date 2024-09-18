// src/components/navbar/NavList.tsx
import React from 'react';
import { Link as ChakraLink, Flex, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavListProps {
  menuItems: { label: string; path: string }[];
  onSelectItem: (item: string) => void;
}

const NavList: React.FC<NavListProps> = ({ menuItems, onSelectItem }) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center">
      {menuItems.length === 0 && <Text>No Items Found</Text>}
      {menuItems.map((item) => (
        <ChakraLink
          as={RouterLink}
          key={item.label}
          to={item.path}
          p={2}
          mx={2}
          fontSize="lg"
          _hover={{ textDecoration: 'none', color: 'teal.500' }}
          onClick={() => onSelectItem(item.label)}
        >
          {item.label}
        </ChakraLink>
      ))}
    </Flex>
  );
};

export default NavList;