import { Option } from 'components/shared/Select';
import { Product } from '../interfaces/Campaign';

export default (data: Product[]): Option[] => {
  const containAll = data.find(item => item.name.toLowerCase() === 'todos');

  const newData = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(item => item.name.toLowerCase() !== 'todos')
    .map(item => ({
      title: item.name,
      value: item.id.toString(),
    }));

  if (containAll) {
    newData.unshift({
      title: containAll.name,
      value: containAll.id.toString(),
    });
  }

  return newData;
};
