import { pluginApi } from 'services/api';
import { AxiosError } from 'axios';

interface Response {
  success: boolean;
  errors?: string[];
}

interface Request {
  campaignId: number;
  fileUrl: string;
}

export default async ({ fileUrl, campaignId }: Request): Promise<Response> => {
  try {
    const request = {
      url: fileUrl,
    };

    await pluginApi.post(`campaigns/${campaignId}/stock`, request);

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
