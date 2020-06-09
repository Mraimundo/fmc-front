import { storageApi } from '../api';

interface StorageData {
  id: string;
  url: string;
}
interface ApiResponse {
  data: StorageData;
}

export default async (
  file: Blob,
  storageFolder: string,
): Promise<StorageData> => {
  const request = new FormData();
  const storageKey = process.env.REACT_APP_STORAGE_KEY;
  request.append('fileToUpload', file);

  const { data: response } = await storageApi.post<ApiResponse>(
    `/${storageFolder}?key=${storageKey}`,
    request,
  );

  const { id, url } = response.data;
  return { id, url };
};
