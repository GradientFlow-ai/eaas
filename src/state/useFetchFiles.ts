import { useEffect } from 'react';
import { useSetAppState } from './hooks';

const useFetchFiles = () => {
  const updateAppState = useSetAppState();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/embeddings/listFiles');
        const files = await response.json();

        // Update the app state with the fetched files
        updateAppState({ files }, 'files');
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, [updateAppState]);
};

export default useFetchFiles;
