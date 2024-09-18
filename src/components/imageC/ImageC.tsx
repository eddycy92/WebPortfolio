import React, { CSSProperties } from 'react';

interface ImageCProps {
  // Source and alt text for the image
  ImageC_Src?: string;  // Source URL for the image
  ImageC_Alt?: string;  // Alt text for the image
  
  // Styling options
  ImageC_Fluid?: boolean;  // Make the image responsive
  ImageC_Thumbnail?: boolean;  // Apply a thumbnail border
  ImageC_Rounded?: boolean;  // Apply rounded corners
  ImageC_RoundedCircle?: boolean;  // Make the image a circle
  
  // Alignment options
  ImageC_Align?: 'start' | 'end' | 'center';  // Align the image
  
  // Additional customization
  ImageC_ClassName?: string;  // Additional classes for the image
  ImageC_Style?: React.CSSProperties;  // Additional styles for the image
}

const ImageC: React.FC<ImageCProps> = ({
  ImageC_Src = 'images/placeholders/placeholder.jpg',  // Default placeholder image
  ImageC_Alt = ImageC_Src,  // Default alt text
  ImageC_Fluid = true,  // Make image responsive by default
  ImageC_Thumbnail = false,  // Thumbnail border off by default
  ImageC_Rounded = false,  // Rounded corners off by default
  ImageC_RoundedCircle = false,  // Circular shape off by default
  ImageC_Align = 'center',  // Center alignment by default
  ImageC_ClassName = 'p-3',  // Additional user-defined classNames
  ImageC_Style = { objectFit: 'contain', height: "40vh" },  // Defailt style: rwd
}) => {
  
  // Dynamic class names for the ImageC component //
  const getClassNames = () => {
    return [
      ImageC_Fluid ? 'img-fluid' : '',  // Responsive image
      ImageC_Thumbnail ? 'img-thumbnail' : '',  // Thumbnail
      ImageC_Rounded ? 'rounded' : '',  // Rounded corners
      ImageC_RoundedCircle ? 'rounded-circle' : '',  // Circle
      ImageC_Align === 'start' ? 'float-start' : ImageC_Align === 'end' ? 'float-end' : 'mx-auto d-block',  // Alignment
      ImageC_ClassName,  // Additional custom classes
    ]
    .filter(Boolean)  
    .join(' ');  
  };
  
  return (
  // ImageC component //
      <img 
        src={ImageC_Src} 
        alt={ImageC_Alt} 
        className={getClassNames()}
        style={ImageC_Style} 
      />
  );
  
};

export default ImageC;
