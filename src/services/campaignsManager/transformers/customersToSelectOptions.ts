import { Option } from 'components/shared/Select';
import { Customer } from '../interfaces/Campaign';

export default (data: Customer[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
