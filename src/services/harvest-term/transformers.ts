import { Harvest, HarvestApi } from './interface';

export const transformFromHarvestApi = (data: HarvestApi[]): Harvest[] => {
  return data.map<Harvest>(({ id, title }) => ({ id, title }));
};
