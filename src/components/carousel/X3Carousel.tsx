import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ImageC } from '../index';  // Import the ImageC component
import { Grid } from '@chakra-ui/react';  // Import the Grid component

interface CarouselProps {
  src?: string[];  // Array of image sources for the carousel
  alt?: string[];  // Array of alt texts for the images
  interval?: number;  // Interval between slides (in milliseconds)
  id?: string;  // ID for the carousel element
  className?: string;  // Additional classes for the carousel container
  showIndicators?: boolean;  // Whether to show slide indicators (dots)
  showControls?: boolean;  // Whether to show previous/next controls
  imgClassName?: string;  // Additional classes for the carousel images
  fade?: boolean;  // Enable crossfade transition between slides
  dark?: boolean;  // Enable dark variant for controls and indicators
  pause?: 'hover' | boolean;  // Pause the carousel on hover
  style?: React.CSSProperties;  // Additional styles for the carousel container
  imgStyle?: React.CSSProperties;  // Additional styles for the images
}

function X3Carousel({
  src=["placeholder.jpg"],  // Default to a placeholder if no src is provided
  alt=["Placeholder image"],  // Default alt text
  interval = 10000,  // Default interval of 10 seconds
  id = "X3Carousel",  // Default ID for the carousel
  className = "w-90 p-3",  // Default classes for the carousel container
  showIndicators = true,  // Show indicators by default
  showControls = true,  // Show controls by default
  imgClassName = "",  // Default classes for the images
  fade = false,  // Disable crossfade transition
  dark = true,  // Enable dark variant for controls and indicators
  pause = 'hover',  // Pause the carousel on hover
  style = {},  // Additional styles for the carousel container
  imgStyle = { height: '20vh', width: 'auto', objectFit: 'contain' },  // Default image styles to maintain aspect ratio
}: CarouselProps) {

  const columns = 4; // Number of columns per slide

  // Ensure images are provided or use a placeholder
  const images = src.length > 0 ? src : ['placeholder.jpg'];
  const altTexts = alt.length > 0 ? alt : ['Placeholder image'];

  // Group images into slides of 'columns' number of images each
  const slides = [];
  for (let i = 0; i < images.length; i += columns) {
    slides.push(images.slice(i, i + columns));
  }

  return (
    <div
      id={id}
      className={`carousel slide ${fade ? 'carousel-fade' : ''} ${dark ? 'carousel-dark' : ''} ${className}`}
      data-bs-ride="carousel"
      data-bs-interval={interval}
      data-bs-pause={pause}
      style={style}
    >
      {showIndicators && (
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Grid>
              {slide.map((imageSrc, slideIndex) => (
                <ImageC
                  key={slideIndex}
                  ImageC_Src={imageSrc}
                  ImageC_Alt={altTexts[index * columns + slideIndex] || 'Image'}
                  ImageC_ClassName={imgClassName}
                  ImageC_Style={imgStyle}
                />
              ))}
            </Grid>
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next" 
            type="button" 
            data-bs-target={`#${id}`} 
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

export default X3Carousel;
