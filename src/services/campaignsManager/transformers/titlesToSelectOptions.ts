import { Option } from 'components/shared/Select';
import { Title } from '../interfaces';

export default (data: Title[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
