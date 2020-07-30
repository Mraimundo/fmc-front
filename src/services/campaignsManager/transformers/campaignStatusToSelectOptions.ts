import { Option } from 'components/shared/Select';
import { CampaignStatus } from '../interfaces/Campaign';

export default (data: CampaignStatus[]): Option[] => {
  return data.map(item => ({
    title: item.name,
    value: item.id.toString(),
  }));
};
