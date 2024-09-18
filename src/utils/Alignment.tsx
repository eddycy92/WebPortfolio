import { ChakraProps, ComponentWithAs, useBreakpointValue, useColorMode, useTheme, HTMLChakraProps, ResponsiveValue } from '@chakra-ui/react';

// Extend ChakraProps to include 'as' and 'placement'
interface ExtendedChakraProps extends HTMLChakraProps<'div'> {
  placement?: string; // For overlay components like Popover, Tooltip, Menu
}

// Helper function to check if a component is flex-based (like Flex, Box, Stack, ButtonGroup)
const isFlexComponent = (props: ExtendedChakraProps): boolean => {
  return props.display === 'flex' || ['Flex', 'Box', 'Stack', 'ButtonGroup', 'AvatarGroup'].includes(props.as as string);
};

// Helper function to check if a component is text-based (like Text, Heading, Button, Link, Badge)
const isTextComponent = (props: ExtendedChakraProps): boolean => {
  return ['Text', 'Heading', 'Button', 'Link', 'Badge'].includes(props.as as string);
};

// Helper function to check if a component is grid-based (like Grid, SimpleGrid, GridItem)
const isGridComponent = (props: ExtendedChakraProps): boolean => {
  return ['Grid', 'SimpleGrid', 'GridItem'].includes(props.as as string);
};

// Helper function to check if a component is image-based (like Image, Avatar)
const isImageComponent = (props: ExtendedChakraProps): boolean => {
  return ['Image', 'Avatar'].includes(props.as as string);
};

// Function to log debug information with more insights (Advanced Debug Mode)
const logDebugMessage = (message: string, props: ExtendedChakraProps, debug?: boolean): void => {
  if (debug) {
    const componentType = props.as || 'unknown component';
    const display = props.display || 'unknown display';
    console.warn(`${message}\nComponent: ${componentType}\nDisplay: ${display}`);
    alert(`${message}\nComponent: ${componentType}\nDisplay: ${display}`);
  }
};

// RTL Support - Adjusts alignments based on text direction (rtl or ltr)
const adjustForRTL = (alignment: string | undefined, direction: string): string | undefined => {
  if (direction === 'rtl') {
    if (alignment === 'left') return 'right';
    if (alignment === 'right') return 'left';
  }
  return alignment;
};

// Ensure only valid `textAlign` values are passed
const isValidTextAlign = (value: any): value is 'left' | 'center' | 'right' | 'justify' => {
  return ['left', 'center', 'right', 'justify'].includes(value);
};

// Horizontal alignment options for flex, grid, text-based, image-based, and layout components
export const H_Align = (
  H_Align?: 'left' | 'center' | 'right' | 'apart' | 'equidistant' | 'stretch' | Record<string, any>, // Handle responsive objects
  props?: ExtendedChakraProps,
  debug?: boolean
): ExtendedChakraProps => {
  const theme = useTheme();
  const direction = theme.direction || 'ltr'; // Use theme direction ('ltr' or 'rtl')
  const alignment = useBreakpointValue(typeof H_Align === 'object' ? H_Align : { base: H_Align }) || H_Align;
  const adjustedAlignment = adjustForRTL(alignment, direction);

  if (isFlexComponent(props || {})) {
    return {
      justifyContent: adjustedAlignment,
    };
  } else if (isTextComponent(props || {})) {
    // Ensure we only pass valid `textAlign` values
    return {
      textAlign: isValidTextAlign(adjustedAlignment) ? (adjustedAlignment as ResponsiveValue<'left' | 'center' | 'right' | 'justify'>) : undefined,
    };
  } else if (isGridComponent(props || {})) {
    return {
      justifyContent: adjustedAlignment,
    };
  } else if (isImageComponent(props || {})) {
    return {
      alignSelf: adjustedAlignment,
      objectFit: 'cover', // Ensure objectFit is applied for image fitting
    };
  } else if (props?.placement) {
    return {
      placement: adjustedAlignment, // Overlay-specific alignment
    };
  } else {
    if (adjustedAlignment === 'center' && props?.m !== 'auto') {
      logDebugMessage('Horizontal alignment might not work because margin is not set to "auto".', props || {}, debug);
    }
    return {
      textAlign: isValidTextAlign(adjustedAlignment) ? (adjustedAlignment as ResponsiveValue<'left' | 'center' | 'right' | 'justify'>) : undefined,
      m: adjustedAlignment === 'center' ? 'auto' : undefined,
    };
  }
};

// Vertical alignment options for flex-based, grid-based, and non-flex components
export const V_Align = (
  V_Align?: 'top' | 'center' | 'bottom' | 'stretch' | Record<string, any>, // Handle responsive objects
  props?: ExtendedChakraProps,
  debug?: boolean
): ExtendedChakraProps => {
  const alignment = useBreakpointValue(typeof V_Align === 'object' ? V_Align : { base: V_Align }) || V_Align;

  if (isFlexComponent(props || {})) {
    return {
      alignItems: alignment,
    };
  } else if (isGridComponent(props || {})) {
    return {
      alignItems: alignment,
    };
  } else if (isImageComponent(props || {})) {
    return {
      alignSelf: alignment,
      objectFit: 'cover', // Ensure objectFit is applied
    };
  } else if (props?.placement) {
    return {
      placement: alignment, // Overlay-specific alignment
    };
  } else {
    logDebugMessage(
      'Vertical alignment (alignItems) only works with "display: flex" or grid components.',
      props || {},
      debug
    );
    return {
      marginTop: alignment === 'top' ? '0' : 'auto',
      marginBottom: alignment === 'bottom' ? '0' : 'auto',
    };
  }
};
