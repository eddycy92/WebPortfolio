// src/context/ImageContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

// Define images type where keys and values are strings
type ImagesType = Record<string, string>;

// Define context interface with a method to get images from a folder
interface ImageContextType {
  getImagesFromFolder: (folderName: string) => ImagesType;
}

// Create the ImageContext with an undefined initial value
const ImageContext = createContext<ImageContextType | undefined>(undefined);

// Custom hook to use the ImageContext
export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};

// Provider component that wraps the children and provides the image context
export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const getImagesFromFolder = (folderName: string): ImagesType => {
    try {
      // Dynamically import images from the specified folder
      const images = (require as any).context(
        `../../public/images/${folderName}`, 
        false, 
        /\.(png|jpe?g|gif|svg)$/ 
      );

      // Convert imported images to an object with key-value pairs
      return images.keys().reduce((imagesObj: ImagesType, path: string) => {
        
        const key = path
          .replace('./', '') // Remove './' from the path
          .replace(/\.(png|jpe?g|gif|svg)$/, ''); // Remove file extension

        imagesObj[key] = images(path) as string; // Assign image path to the object
        
        return imagesObj;
      }, {} as ImagesType);

    } catch (error) {
      console.error(`Failed to load images from folder: ${folderName}`, error);
      return {}; // Return empty object on error
    }
  };

  return (
    <ImageContext.Provider 
      value={{ getImagesFromFolder }} 
    >
      {children}
    </ImageContext.Provider>
  );
};
