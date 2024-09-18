// src/declarations.d.ts

import { ChakraProps } from '@chakra-ui/react';

// Image module declarations (unchanged)
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// Extend Chakra UI Props globally
declare module '@chakra-ui/react' {
  export interface ChakraProps {
    H_Align?: 'left' | 'center' | 'right' | 'apart' | 'equidistant' | 'stretch';  // Add Horizontal Alignment
    V_Align?: 'top' | 'center' | 'bottom' | 'stretch';  // Add Vertical Alignment
  }
}
