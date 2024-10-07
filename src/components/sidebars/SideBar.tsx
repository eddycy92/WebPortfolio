// src/components/sidebars/SideBar.tsx

import {
    Box,
    CloseButton,
    Flex,
    Text,
    useColorModeValue,
    Drawer,
    DrawerContent,
    IconButton,
    useDisclosure,
    BoxProps,
    FlexProps,
  } from '@chakra-ui/react';
  import { FiMenu } from 'react-icons/fi';
  import { useEffect, useState } from 'react';
  
  interface SidebarProps extends BoxProps {
    onFilterSelect: (filter: string) => void; // Prop to pass the selected filter to the parent
    selectedFilter: string; // Currently selected filter
    data: any[]; // The array of items from the JSON file (projects, articles, etc.)
    filterField: string; // The field in the JSON items to generate filter categories
  }
  
  const SideBar = ({ onFilterSelect, selectedFilter, data, filterField, ...rest }: SidebarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [categories, setCategories] = useState<string[]>([]);
  
    // Extract categories from the specified field in the JSON data
    useEffect(() => {
      const allCategories = new Set<string>();
  
      // Collect all unique categories from the provided field (e.g., 'badges' or 'statusOverlay')
      data.forEach((item) => {
        const fieldValue = item[filterField];
  
        if (Array.isArray(fieldValue)) {
          // If the field is an array (like badges), add each value
          fieldValue.forEach((value) => allCategories.add(value));
        } else if (fieldValue) {
          // Otherwise, just add the field value (like statusOverlay)
          allCategories.add(fieldValue);
        }
      });
  
      setCategories(['All', ...Array.from(allCategories)]);
    }, [data, filterField]);
  
    const SidebarContent = (
      <Box
        transition="0.3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        zIndex="overlay" // Ensure sidebar is above the content
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Filters
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
  
        {/* Dynamically render categories */}
        {categories.map((category) => (
          <Box
            key={category}
            p={4}
            mx={4}
            borderRadius="lg"
            role="button"
            cursor="pointer"
            bg={selectedFilter === category ? 'cyan.400' : 'transparent'}
            color={selectedFilter === category ? 'white' : 'black'}
            _hover={{ bg: 'cyan.400', color: 'white' }}
            onClick={() => onFilterSelect(category)}
          >
            {category}
          </Box>
        ))}
      </Box>
    );
  
    return (
      <>
        {/* Mobile drawer implementation */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerContent>{SidebarContent}</DrawerContent>
        </Drawer>
  
        {/* Mobile menu button */}
        <IconButton
          aria-label="Open menu"
          icon={<FiMenu />}
          onClick={onOpen}
          display={{ base: 'flex', md: 'none' }}
          variant="outline"
          position="fixed"
          top="4"
          left="4"
          zIndex="overlay" // Ensure button is above content
        />
  
        {/* Desktop sidebar */}
        <Box display={{ base: 'none', md: 'block' }}>
          {SidebarContent}
        </Box>
      </>
    );
  };
  
  export default SideBar;
  