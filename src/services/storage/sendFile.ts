import { storageApi } from '../api';

interface ApiResponse {
  id: string;
  url: string;
}

export default async (
  file: Blob,
  storageFolder: string,
): Promise<ApiResponse> => {
  const request = new FormData();
  const storageKey = process.env.REACT_APP_STORAGE_KEY;
  request.append('fileToUpload', file);

  const { data: response } = await storageApi.post<ApiResponse>(
    `/${storageFolder}?key=${storageKey}`,
    request,
  );

  return response;
};
