import { Option } from 'components/shared/Select';
import { Product } from '../interfaces';

export default (data: Product[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};