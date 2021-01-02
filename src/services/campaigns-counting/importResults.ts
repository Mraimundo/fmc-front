import { pluginApi } from 'services/api';
import { AxiosError } from 'axios';

interface Response {
  success: boolean;
  errors?: string[];
}

interface Request {
  fileUrl: string;
  type: 'partial' | 'final';
}

export default async ({ fileUrl, type }: Request): Promise<Response> => {
  try {
    const request = {
      file: fileUrl,
      is_final_result: type === 'final' ? 1 : 0,
    };

    await pluginApi.post('campaigns/import-results', request);

    return { success: true };
  } catch (e) {
    let errors = [
      'Erro não identificado, por favor entre em contato com o suporte',
    ];

    if ((e as AxiosError<Response>).response?.data?.errors) {
      errors = e.response.data.errors;
    }

    return {
      success: false,
      errors,
    };
  }
};
