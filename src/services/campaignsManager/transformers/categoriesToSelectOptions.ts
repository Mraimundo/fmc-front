import { Option } from 'components/shared/Select';
import { Category } from '../interfaces';

export default (data: Category[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
