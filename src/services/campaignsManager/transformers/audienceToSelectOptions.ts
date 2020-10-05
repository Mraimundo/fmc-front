import { Option } from 'components/shared/Select';
import { Audience } from '../interfaces/Campaign';

export default (data: Audience[]): Option[] => {
  return data
    .sort((a, b) => a.customer.name.localeCompare(b.customer.name))
    .map(item => ({
      title: `${item.customer.name}(Saldo: ${item.balance})`,
      value: item.customer.id.toString(),
    }));
};
