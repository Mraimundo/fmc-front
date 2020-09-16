import { Option } from 'components/shared/Select';
import { Channel } from '../interfaces/channel';

export default (data: Channel[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
