import { Option } from 'components/shared/Select';
import { State } from '../getUfList';

export default (data: State[]): Option[] => {
  return data.map(item => ({
    title: item.stateCode,
    value: item.stateCode,
  }));
};
