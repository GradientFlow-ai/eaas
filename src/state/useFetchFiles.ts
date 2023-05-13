import { useEffect } from 'react';
import { usePageState, useSetAppState } from './hooks';
import { SanitizedEmbeddingsFileInfo } from "types";

const useFetchFiles = () => {
  const updateAppState = useSetAppState();
  const { fileInfoUpdated, uploadedFileUUID, totalDownloads } = usePageState();
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/fetchSupabaseFileInfo');
        const files: SanitizedEmbeddingsFileInfo = await response.json();

        // Update the app state with the fetched files
          updateAppState({ s3FileInfo: files }, 'generalState');
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, [fileInfoUpdated, totalDownloads, updateAppState, uploadedFileUUID]);
};

export default useFetchFiles;
