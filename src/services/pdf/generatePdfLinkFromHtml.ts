import { pdfApi } from 'services/api';

interface Response {
  link: string;
}

export default async (html: string): Promise<Response> => {
  const { data } = await pdfApi.post<Response>('pdf', { html });
  return data;
};
