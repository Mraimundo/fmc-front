import newEmptyCampaign from 'services/campaigns-manager/newEmptyCampaignObject';
import { CampaignsManagerState } from './reducer';

const mock: CampaignsManagerState = {
  campaign: newEmptyCampaign(),
  canEdit: true,
  errors: {},
};

export default mock;
