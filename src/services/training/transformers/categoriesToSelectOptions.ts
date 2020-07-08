import { Option } from 'components/shared/Select';
import { Category } from '../interfaces';

export default (categories: Category[]): Option[] => {
  return categories.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
