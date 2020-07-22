import { Option } from 'components/shared/Select';
import { Regional } from '../interfaces/Campaign';

export default (data: Regional[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
