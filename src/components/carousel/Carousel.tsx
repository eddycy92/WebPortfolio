import React from "react";
import { ImageC } from "../index"; // Import the ImageC component

interface CarouselProps {
  ImageC_Src: string[]; // Array of image sources for the carousel
  ImageC_Alt: string[]; // Array of alt texts for the images
  ImageC_ClassName?: string; // Additional classes for the carousel images

  // Carousel Configuration
  Carousel_Interval?: number; // Interval between slides (in milliseconds)
  Carousel_Id?: string; // ID for the carousel element
  Carousel_ClassName?: string; // Additional classes for the carousel container
  Carousel_ShowIndicators?: boolean; // Whether to show slide indicators (dots)
  Carousel_ShowControls?: boolean; // Whether to show previous/next controls
  Carousel_Fade?: boolean; // Enable crossfade transition between slides
  Carousel_Dark?: boolean; // Enable dark variant for controls and indicators
  Carousel_Pause?: "hover" | boolean; // Pause the carousel on hover
  Carousel_Style?: React.CSSProperties; // Additional styles for the carousel container
}

const Carousel: React.FC<CarouselProps> = ({
  ImageC_Src,
  ImageC_Alt,
  ImageC_ClassName = "",
  Carousel_Interval = 10000,
  Carousel_Id = "x1Carousel",
  Carousel_ClassName = "",
  Carousel_ShowIndicators = true,
  Carousel_ShowControls = true,
  Carousel_Fade = true,
  Carousel_Dark = true,
  Carousel_Pause = "hover",
  Carousel_Style = {},
}) => {
  // Ensure at least one image is provided
  const images = ImageC_Src.length > 0 ? ImageC_Src : ["placeholder.jpg"];
  const altTexts = ImageC_Alt.length > 0 ? ImageC_Alt : ["Placeholder image"];

  return (
    <div
      id={Carousel_Id}
      className={`carousel slide ${Carousel_Fade ? "carousel-fade" : ""} ${
        Carousel_Dark ? "carousel-dark" : ""
      } ${Carousel_ClassName}`}
      data-bs-ride="carousel"
      data-bs-interval={Carousel_Interval}
      data-bs-pause={Carousel_Pause ? "hover" : "false"}
      style={Carousel_Style}
    >
      {/* Indicators */}
      {Carousel_ShowIndicators && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${Carousel_Id}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <ImageC
              ImageC_Src={src}
              ImageC_Alt={altTexts[index] || "Image"}
              ImageC_ClassName={ImageC_ClassName}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      {Carousel_ShowControls && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${Carousel_Id}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${Carousel_Id}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
