// src/utils/ContentFetcher.tsx

import { useState, useEffect } from 'react';

interface FetchState<T> {
  data?: T | null;
  isLoading: boolean;
  error: Error | null;
}

// Custom hook to fetch JSON or API data
const useContentFetcher = <T,>(urlOrPath: string, isLocal = false): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let fetchedData: T | null = null;

        if (isLocal && urlOrPath) {
          // Use fetch to load local files (like JSON)
          const response = await fetch(urlOrPath);
          if (!response.ok) {
            throw new Error(`Error fetching data from ${urlOrPath}`);
          }
          fetchedData = await response.json();
        } else if (urlOrPath) {
          // Fetch data from an external API
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
  }, [urlOrPath, isLocal]);

  return { data, isLoading, error };
};

export default useContentFetcher;
