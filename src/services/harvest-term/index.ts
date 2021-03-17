import { vendavallApi } from 'services/api';
import { Harvest, HarvestApi } from './interface';
import { transformFromHarvestApi } from './transformers';

const HARVEST_RESOURCE = '/campaign';

export interface ApiResponse {
  harvests: HarvestApi[];
}

export const getHarvests = async (cpf = ''): Promise<Harvest[]> => {
  const url = cpf ? `${HARVEST_RESOURCE}?cpf=${cpf}` : HARVEST_RESOURCE;
  const { data } = await vendavallApi.get<HarvestApi[]>(url);

  return transformFromHarvestApi(data);
};
