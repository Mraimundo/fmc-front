import { Option } from 'components/shared/Select';
import { Director } from '../interfaces/Campaign';

export default (data: Director[]): Option[] => {
  const arr = Array.from(new Set(data.map(i => i.directorship)));
  return arr.map(item => ({
    title: item,
    value: item,
  }));
};
