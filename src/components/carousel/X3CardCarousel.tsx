import React, { ReactNode, useMemo, useState, useEffect, useRef } from 'react';
import { Box, IconButton, Flex, useBreakpointValue, Fade, SlideFade } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface ColumnBreakpoints {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

interface CardCarouselProps {
  interval?: number; // Auto-slide interval
  pauseOnHover?: boolean; // Pause on hover
  transitionSpeed?: number; // Slide transition speed
  resumeDelay?: number; // Delay before resuming auto-slide
  showIndicators?: boolean; // Show slide indicators
  showControls?: boolean; // Show prev/next controls
  autoPlay?: boolean; // Enable auto-slide
  X3CardCarousel_Children?: ReactNode; // Children components
  columnsPerBreakpoint?: ColumnBreakpoints; // Dynamic column count per breakpoint
  cardGap?: number; // Gap between cards
  transitionType?: 'slide' | 'fade'; // Transition type (slide or fade)
}

function X3CardCarousel({
  interval = 10000,
  pauseOnHover = true,
  transitionSpeed = 3000,
  resumeDelay = 2000,
  showIndicators = true,
  showControls = true,
  autoPlay = true,
  X3CardCarousel_Children,
  columnsPerBreakpoint = { base: 1, sm: 2, md: 3, lg: 4 },
  cardGap = 0,
  transitionType = 'slide', // Default to "slide"
}: CardCarouselProps) {
  
  // Dynamically set the number of columns per breakpoint
  const columns = useBreakpointValue(columnsPerBreakpoint);

  // Convert children into an array
  const childrenArray = React.Children.toArray(X3CardCarousel_Children);

  // Group children into slides based on the number of columns
  const slides = useMemo(() => {
    const slideGroups = [];
    for (let i = 0; i < childrenArray.length; i += columns!) {
      slideGroups.push(childrenArray.slice(i, i + columns!));
    }
    return slideGroups;
  }, [childrenArray, columns]);

  // State for tracking the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  
  // Refs to handle auto-play functionality
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  // Move to the next/previous slide
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  // Handle auto-slide
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

  // Pause/resume on hover
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isHoveredRef.current = true;
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
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
      }, resumeDelay);
    }
  };

  return (
    <Flex
      maxW="7xl"
      pos="relative"
      overflow="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Wrapper to translate the carousel */}
      {transitionType === 'slide' ? (
        <Flex
          transition={`transform ${transitionSpeed}ms ease`}
          transform={`translateX(-${currentSlide * 100}%)`}
          w="100%"
          mb={4}
        >
          {slides.map((slide, index) => (
            <Flex key={index} gap={cardGap} flexShrink={0} w="100%" >
              {slide.map((child, childIndex) => (
                <Flex key={childIndex} p={2} m={0} w="100%" justify={"center"}>
                  {child}
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
      ) : (
        slides.map((slide, index) => (
          <Fade in={currentSlide === index} key={index} style={{ width: '100%' }}>
            <Flex gap={cardGap} flexShrink={0} w="100%" left={0}>
              {slide.map((child, childIndex) => (
                <Flex key={childIndex} p={2} m={0} w="100%">
                  {child}
                </Flex>
              ))}
            </Flex>
          </Fade>
        ))
      )}

      {/* Indicators */}
      {showIndicators && (
        <Flex justify="center" pos="absolute" bottom={0} w="100%">
          {slides.map((_, index) => (
            <Box
              key={index}
              h={2}
              w={2}
              borderRadius="50%"
              bg={index === currentSlide ? 'teal.400' : 'gray.300'}
              m={1}
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
            left={0}
            transform="translateY(-50%)"
            onClick={prevSlide}
          />
          <IconButton
            aria-label="Next Slide"
            icon={<ArrowForwardIcon />}
            pos="absolute"
            top="50%"
            right={0}
            transform="translateY(-50%)"
            onClick={nextSlide}
          />
        </>
      )}
    </Flex>
  );
}

export default X3CardCarousel;
