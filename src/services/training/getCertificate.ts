import { vendavallApi } from 'services/api';

interface ApiResponse {
  url: string;
  message: string;
}

export interface Response extends ApiResponse {
  hasCertificate: boolean;
}

export default async (trainingId: number): Promise<Response> => {
  const {
    data: { url, message },
  } = await vendavallApi.get<ApiResponse>(
    `/trainings/${trainingId}/trainingCertificate`,
  );

  return {
    hasCertificate: !!url,
    message: message || '',
    url: url || '',
  };
};
