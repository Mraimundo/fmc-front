import { Option } from 'components/shared/Select';
import { Mechanic } from '../interfaces';

export default (data: Mechanic[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
