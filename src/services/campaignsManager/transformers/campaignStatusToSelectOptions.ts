import { Option } from 'components/shared/Select';
import { StatusResponse } from '../getStatus';

export default (data: StatusResponse[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
