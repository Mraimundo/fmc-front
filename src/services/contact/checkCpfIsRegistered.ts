import { vendavallApi } from 'services/api';

interface ApiResponse {
  status: 'success' | 'error';
  exist: boolean;
}

export default async (cpf: string): Promise<boolean> => {
  try {
    const { data } = await vendavallApi.get<ApiResponse>(
      `participants/cpf-exist?cpf=${cpf}`,
    );
    return data.exist === true;
  } catch (e) {
    return false;
  }
};
