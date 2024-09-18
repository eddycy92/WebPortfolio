// src/config/PropsVars.tsx
import React from "react";

// Default values for CertsCard component
export const DEFAULT_CertsCard_CertName = ["Certification Name"];
export const DEFAULT_CertsCard_CertProvider = ["Certification Provider"];
export const DEFAULT_CertsCard_Style: React.CSSProperties = {};

// Default values for ImageC component
export const DEFAULT_ImageC_Src = ["public/images/placehonders/placeholder.jpg"];
export const DEFAULT_ImageC_Alt = ["Placeholder image"];
export const DEFAULT_ImageC_Style: React.CSSProperties = { objectFit: "cover" };
export const DEFAULT_ImageC_Fluid = true;
export const DEFAULT_ImageC_Align: "start" | "end" | "center" = "center";
export const DEFAULT_ImageC_Thumbnail = false;  // Thumbnail border is off by default
export const DEFAULT_ImageC_Rounded = false;  // Rounded corners are off by default
export const DEFAULT_ImageC_RoundedCircle = false;  // Circular shape is off by default

// Default values for ProjectCard component
export const DEFAULT_ProjectName = "Project Name";
export const DEFAULT_ProjectDescription =   
`Your project description goes here.
This is just sample text to visualize the Project Card (ProjectCard.tsx). 
Here is some additional text and dont forget to end in ...
`






// Type definitions for CertsCardProps
export interface CertsCardProps {
  // Variables for the CertsCard component
  CertsCard_Style?: React.CSSProperties; // Additional styles for the container
  CertsCard_CertName?: string[]; // Name of the certification
  CertsCard_CertProvider?: string[]; // Name of the certification provider
}

// Type definitions for ImageCProps
export interface ImageCPropos{
  // Variables to pass to ImageC.tsx 
  ImageC_Src?: string[]; // Array of image sources
  ImageC_Alt?: string[]; // Array of alt texts for the images
  ImageC_Style?: React.CSSProperties; // Styles for the images
  ImageC_Fluid?: boolean; // Make the image responsive
  ImageC_ClassName?: string; // Additional classes for the image
  ImageC_Align?: "start" | "end" | "center"; // Align the image
}

// Type definitions for ProjectCardProps
export interface ProjectCardProps {
  //Variables for the project card
  ProjectCard_Style?: React.CSSProperties; // Additional styles for the container
  ProjectCard_ProjectName?: string; // Name of the project
  ProjectCard_ProjectDescription?: string; // Description of the project
}


export interface CarouselProps {
  // ImageC Variables
  ImageC_Src: string[]; // Array of image sources for the carousel
  ImageC_Alt: string[]; // Array of alt texts for the images
  ImageC_ClassName?: string; // Additional classes for the carousel images

  // Carousel Variables
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