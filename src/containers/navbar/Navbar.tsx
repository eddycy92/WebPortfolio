import React from 'react';
import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  Text,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Icon,
  useColorMode,
  Switch,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from '../../configuration/WebsiteConfig';

interface NavbarProps {
  heading?: string;
  pageURL?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  heading = '', pageURL = '/' }) => {
  const { isOpen, onToggle } = useDisclosure(); // Handle mobile menu toggling
  const { colorMode, toggleColorMode } = useColorMode(); // Handle dark/light mode

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        
        {/* Logo and Heading */}
        <Flex flex={{ base: 1 }} align="center">
          <Link href={pageURL} display="flex" alignItems="center">
            <Image src={Logo} alt="Logo" boxSize="40px" mr={2} />
            <Text fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}>
              {heading}
            </Text>
          </Link>
        </Flex>

        {/* Desktop Navigation Menu */}
        <Flex display={{ base: 'none', md: 'flex' }} ml="auto" align="center">
          <DesktopNav />
          <Button as="a" variant="link" fontSize="sm" fontWeight={400} href="#" mr={4} ml={20}>
            Sign In
          </Button>
          <Button as="a" color="white" bg="pink.400" fontSize="sm" fontWeight={600} href="#" _hover={{ bg: 'pink.300' }}>
            Sign Up
          </Button>
          <Switch colorScheme="pink" ml={6} isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        </Flex>

        {/* Mobile Menu Toggle */}
        <Flex flex={{ base: 1, md: 'none' }} justify={'flex-end'}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;

// Desktop Navigation Component
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Link
          key={navItem.label}
          p={2}
          href={navItem.href ?? '#'}
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}>
          {navItem.label}
        </Link>
      ))}
    </Stack>
  );
};

// Mobile Navigation Component
const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Link
          key={navItem.label}
          py={2}
          href={navItem.href ?? '#'}
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {navItem.label}
        </Link>
      ))}
    </Stack>
  );
};

// Navigation Items Data
interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Guides', href: '/guides' },
];
