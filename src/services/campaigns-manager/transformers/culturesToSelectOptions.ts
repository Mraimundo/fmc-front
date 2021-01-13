import { Option } from 'components/shared/Select';
import { Culture } from '../interfaces/Campaign';

export default (data: Culture[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
