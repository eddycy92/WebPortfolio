import React, { ReactNode, useMemo, useState, useEffect, useRef } from 'react';
import { Box, Grid, IconButton, Flex, useBreakpointValue } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface ColumnBreakpoints {
  base?: number; // Number of columns on mobile
  sm?: number;   // Number of columns on small screens
  md?: number;   // Number of columns on medium screens
  lg?: number;   // Number of columns on large screens
}

interface CardCarouselProps {
  interval?: number; // Interval between slides (in milliseconds)
  pauseOnHover?: boolean; // Pause auto-slide on hover
  transitionSpeed?: number; // Speed of slide transitions (ms)
  resumeDelay?: number; // Delay before resuming after hover (ms)
  showIndicators?: boolean; // Show slide indicators (dots)
  showControls?: boolean; // Show previous/next controls
  autoPlay?: boolean; // Enable auto-slide
  X3CardCarousel_Children?: ReactNode; // Children components (e.g., ProjectCard components)
  columnsPerBreakpoint?: ColumnBreakpoints; // Allow passing column count dynamically per breakpoint
  cardGap?: number; // Gap between cards
}

function X3CardCarousel({
  interval = 10000, // Default interval of 10 seconds
  pauseOnHover = true, // Pause on hover by default
  transitionSpeed = 3000, // Default transition speed (in ms)
  resumeDelay = 2000, // Default resume delay after hover (2 seconds)
  showIndicators = true, // Show indicators by default
  showControls = true, // Show controls by default
  autoPlay = true, // Enable auto-slide by default
  X3CardCarousel_Children, // Children components (e.g., ProjectCard components)
  columnsPerBreakpoint = { base: 1, sm: 2, md: 3, lg: 4 }, // Default to 1-4 columns
  cardGap=1,
}: CardCarouselProps) {
  
  // Use `useBreakpointValue` to get column count dynamically based on screen size
  const columns = useBreakpointValue(columnsPerBreakpoint);

  // Convert children into an array
  const childrenArray = React.Children.toArray(X3CardCarousel_Children) as ReactNode[];

  // Group children into slides based on the number of columns
  const slides = useMemo(() => {
    const slideGroups = [];
    for (let i = 0; i < childrenArray.length; i += columns!) {
      slideGroups.push(childrenArray.slice(i, i + columns!));
    }
    return slideGroups;
  }, [childrenArray, columns]);

  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const totalSlides = slides.length;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null); // Ref to control autoplay
  const isHoveredRef = useRef(false); // Ref to track hover status

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  // Handle auto-slide logic
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        if (!isHoveredRef.current) {
          nextSlide();
        }
      }, interval);

      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }
  }, [interval, autoPlay, currentSlide, totalSlides]);

  // Hover pause functionality
  const handleMouseEnter = () => {
    if (pauseOnHover && autoPlayRef.current) {
      isHoveredRef.current = true;
      clearInterval(autoPlayRef.current); // Stop auto-slide on hover
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      isHoveredRef.current = false;
      setTimeout(() => {
        if (!isHoveredRef.current && autoPlay) {
          autoPlayRef.current = setInterval(() => {
            nextSlide();
          }, interval);
        }
      }, resumeDelay); // Delay resuming auto-slide after hover
    }
  };

  return (
    <Box
      maxW="7xl"
      pos="relative"
      overflow="hidden" // Ensure the carousel doesn't overflow
      onMouseEnter={handleMouseEnter} // Trigger pause on hover
      onMouseLeave={handleMouseLeave} // Resume auto-slide after hover
    >
      {/* Wrapper Box to handle translation */}
      <Box
        display="flex"
        transition={`transform ${transitionSpeed}ms ease`}
        transform={`translateX(-${currentSlide * 100}%)`} // Translate slide based on current index
      >
        {slides.map((slide, index) => (
          <Grid
            key={index}
            templateColumns={`repeat(${columns}, 1fr)`} // Adjust columns based on breakpoints
            gap={cardGap}
            flexShrink={0} // Prevent grid from shrinking
            w="100%" // Ensure the grid takes full width
          >
            {slide.map((child, childIndex) => (
              <Box key={childIndex} p={4}>
                {child}
              </Box>
            ))}
          </Grid>
        ))}
      </Box>

      {/* Indicators */}
      {showIndicators && (
        <Flex justify="center" mt={4}>
          {slides.map((_, index) => (
            <Box
              key={index}
              h={3}
              w={3}
              borderRadius="50%"
              bg={index === currentSlide ? 'teal.400' : 'gray.300'}
              mx={2}
              cursor="pointer"
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Flex>
      )}

      {/* Controls */}
      {showControls && (
        <>
          <IconButton
            aria-label="Previous Slide"
            icon={<ArrowBackIcon />}
            pos="absolute"
            top="50%"
            left={2}
            transform="translateY(-50%)"
            zIndex={2}
            onClick={prevSlide}
          />
          <IconButton
            aria-label="Next Slide"
            icon={<ArrowForwardIcon />}
            pos="absolute"
            top="50%"
            right={2}
            transform="translateY(-50%)"
            zIndex={2}
            onClick={nextSlide}
          />
        </>
      )}
    </Box>
  );
}

export default X3CardCarousel;
