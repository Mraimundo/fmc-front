import { Option } from 'components/shared/Select';
import { Harvest, HarvestApi } from './interface';

export const transformFromHarvestApi = (data: HarvestApi[]): Harvest[] => {
  return data.map<Harvest>(({ id, title }) => ({ id, title }));
};

export const transformToSelectOptions = (data: Harvest[]): Option[] => {
  return data.map<Option>(({ id, title }) => ({ value: id.toString(), title }));
};
