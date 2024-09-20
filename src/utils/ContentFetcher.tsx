import { useState, useEffect } from 'react';

interface FetchState<T> {
  data?: T | null;
  isLoading: boolean;
  error: Error | null;
}

// Utility to load images dynamically from a folder
const loadImagesFromFolder = (folderPath: string) => {
  try {
    const images = (require as any).context(
      folderPath, 
      false, 
      /\.(png|jpe?g|gif|svg)$/ // Match all image types
    );
    const imageMap: Record<string, string> = {};
    images.keys().forEach((key: string) => {
      const imageName = key.replace('./', ''); // Remove './' from the path
      imageMap[imageName] = images(key); // Assign the path to the imageMap
    });
    return imageMap;
  } catch (error) {
    throw new Error(`Failed to load images from folder: ${folderPath}`);
  }
};

// Custom hook to fetch JSON data or dynamically load images from a folder
const useContentFetcher = <T,>(urlOrPath: string, isLocal = false, isImageFolder = false): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let fetchedData: T | null = null;

        if (isImageFolder) {
          fetchedData = loadImagesFromFolder(urlOrPath) as T;
        } else if (isLocal && urlOrPath) {
          const response = await fetch(urlOrPath);
          if (!response.ok) {
            throw new Error(`Error fetching data from ${urlOrPath}`);
          }
          fetchedData = await response.json();
        } else if (urlOrPath) {
          const response = await fetch(urlOrPath);
          if (!response.ok) {
            throw new Error(`Error fetching data from ${urlOrPath}`);
          }
          fetchedData = await response.json();
        }

        setData(fetchedData);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [urlOrPath, isLocal, isImageFolder]);

  return { data, isLoading, error };
};

export default useContentFetcher;
