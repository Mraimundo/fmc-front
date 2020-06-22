import { pdfApi } from 'services/api';

type Response = Blob;

export default async (html: string): Promise<Response> => {
  const response = await pdfApi.post<Response>(
    'pdf-download',
    { html },
    { responseType: 'blob' },
  );
  return response.data;
};
