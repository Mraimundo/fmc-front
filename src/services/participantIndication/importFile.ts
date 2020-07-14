import { pluginApi } from 'services/api';
import { AxiosError } from 'axios';

interface ApiResponse {
  success_count: number;
}

interface Response {
  success_count: number;
  errors: string[];
}

export default async (fileUrl: string): Promise<Response> => {
  try {
    const {
      data: { success_count },
    } = await pluginApi.post<ApiResponse>('participants/indications/import', {
      file: fileUrl,
    });
    return {
      success_count,
      errors: [],
    };
  } catch (e) {
    if (
      (e as AxiosError<Response>).response?.data?.errors &&
      (e as AxiosError<Response>).response?.data?.success_count
    ) {
      return {
        success_count: e.response.data.success_count,
        errors: e.response.data.errors,
      };
    }
    return {
      success_count: 0,
      errors: [
        'Erro não identificado, por favor entre em contato com o suporte',
      ],
    };
  }
};
