// /src/components/button/RowTagButtons.tsx

import React from 'react';
import { Button, Stack } from '@chakra-ui/react';

// Accept 'proFeatures' as a prop
interface RowTagButtonsProps {
  proFeatures?: string[];
  variant?: "outline" | "solid" | "ghost" ;
  color?: string ; 
}

function RowTagButtons({ 
  proFeatures= [],
  variant= 'outline',
  color= 'gray'
}: RowTagButtonsProps) {
  return (
    <Stack direction="row" spacing={1} wrap="wrap">
      {proFeatures.map((feature, index) => (
        <Button
          key={index}
          size="sm"
          variant={variant}
          colorScheme={color}
          _hover={{ bg: 'blue.500', color: 'white' }}
          fontSize={"xs"}
          p={1}
        >
          {feature}
        </Button>
      ))}
    </Stack>
  );
}

export default RowTagButtons;
