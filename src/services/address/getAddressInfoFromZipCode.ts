import { vendavallApi } from 'services/api';
import numbersOnly from 'util/numbersOnly';

export interface Address {
  bairro: string;
  cep: string;
  cidade: string;
  endereco: string;
  estado: { sigla: string; nome: string };
}

interface ApiResponse {
  data: Address;
}

export default async (zipCode: string): Promise<Address> => {
  const url = `edne/get-address?cep=${numbersOnly(zipCode)}`;
  const { data } = await vendavallApi.get<ApiResponse>(url);
  return data.data;
};
