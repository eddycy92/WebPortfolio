// src/components/DebugTheme.tsx
import { useEffect } from 'react';
import { useTheme } from '@chakra-ui/react';

function DebugTheme() {
  const theme = useTheme(); // Fetch the current theme

  // Log the theme when the component mounts
  useEffect(() => {
    console.log('Current Theme:', theme);
  }, [theme]);

  return null; // This component doesn't need to render anything
}

export default DebugTheme;
