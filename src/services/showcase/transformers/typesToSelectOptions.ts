import { Option } from 'components/shared/Select';
import { Type } from '../interfaces';

export default (types: Type[]): Option[] => {
  return types.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
