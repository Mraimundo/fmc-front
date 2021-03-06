import { Option } from 'components/shared/Select';
import { Director } from '../getDirectors';

export default (data: Director[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id,
  }));
};
