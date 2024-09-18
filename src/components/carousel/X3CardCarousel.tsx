import React, { ReactNode, useMemo, useState, useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  IconButton,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface CardCarouselProps {
  interval?: number; // Interval between slides (in milliseconds)
  pauseOnHover?: boolean; // Pause auto-slide on hover
  transitionSpeed?: number; // Speed of slide transitions (ms)
  resumeDelay?: number; // Delay before resuming after hover (ms)
  showIndicators?: boolean; // Show slide indicators (dots)
  showControls?: boolean; // Show previous/next controls
  autoPlay?: boolean; // Enable auto-slide
  X3CardCarousel_Children?: ReactNode; // Children components (e.g., ProjectCard components)
}

function X3CardCarousel({
  interval = 10000, // Default interval of 5 seconds
  pauseOnHover = true, // Pause on hover by default
  transitionSpeed = 3000, // Default transition speed (in ms)
  resumeDelay = 2000, // Default resume delay after hover (2 seconds)
  showIndicators = true, // Show indicators by default
  showControls = true, // Show controls by default
  autoPlay = true, // Enable auto-slide by default
  X3CardCarousel_Children, // Children components (e.g., ProjectCard components)
}: CardCarouselProps) {
  
  const columns = useBreakpointValue({
    base: 1, // 1 column on mobile
    sm: 2,   // 2 columns on small screens (tablets)
    md: 3,   // 3 columns on medium screens (desktop)
    lg: 4,   // 4 columns on large screens
  });

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
      mx="auto"
      pos="relative" // Control Position: static, fixed, absolute, relative, sticky, initial, inherit
      overflow="hidden"
      onMouseEnter={handleMouseEnter} // Trigger pause on hover
      onMouseLeave={handleMouseLeave} // Resume auto-slide after hover
    >
      {/* Wrapper Box to handle translation */}
      <Box
        display="flex"
        transition={`transform ${transitionSpeed}ms ease`} // Smooth transition for sliding
        transform={`translateX(-${currentSlide * 100}%)`} // Translate slide based on current slide index
      >
        {slides.map((slide, index) => (
          <Grid
            key={index}
            templateColumns={`repeat(${columns}, 1fr)`} // Dynamically adjust the columns
            gap={4}
            flexShrink={0} // Prevent grid from shrinking, ensuring all slides have the same width
            w="100%" // Each slide should take full width
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
