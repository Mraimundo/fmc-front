import { addHours } from 'date-fns';
import {
  Campaign,
  Approver,
  ApproverProfile,
  ApprovalStatus,
  Comment,
  Highlight,
} from '../interfaces/Campaign';
import {
  CampaignApi,
  ApproverApi,
  Highlight as HighlightApi,
} from '../interfaces/CampaignApi';
import getPtStatus from '../util/getPtStatusText';

const extractApprovers = (data: ApproverApi[]): Approver[] => {
  const approvers: ApproverProfile[] = ['GRV', 'DN', 'CRM', 'MKT'];

  return approvers.map(item => {
    const filteredData = data.filter(i => i.profile === item && i.status === 1);
    let approvedStatus: ApprovalStatus = 'pending';
    if (filteredData.length > 0) {
      approvedStatus = filteredData.find(i => i.type === 'approve')
        ? 'approved'
        : 'disapproved';
    }
    return {
      profile: item,
      status: approvedStatus,
      comments: data
        .filter(i => i.profile === item && !!i.comment)
        .map(i => i.comment),
    };
  });
};

const extractComments = (data: ApproverApi[]): Comment[] => {
  return data
    .filter(item => !!item.comment)
    .map(item => ({
      name: item.nick_name,
      email: item.email,
      cpf: item.cpf,
      date: item.created,
      message: item.comment,
    }));
};

const extractHighlight = (data: HighlightApi[] | null): Highlight => {
  const found = data?.find(item => item.status) || null;

  return {
    id: found?.id || null,
    status: found?.status || false,
  };
};

export default (campaignApi: CampaignApi): Campaign => ({
  id: campaignApi.id,
  title: campaignApi.name,
  description: campaignApi.description,
  startDate: addHours(new Date(campaignApi.start_date), 3),
  endDate: addHours(new Date(campaignApi.end_date), 3),
  createdAt: campaignApi.created,
  affordPoints: campaignApi.points,
  complementaryAffordPoints: campaignApi.complementary_points,
  complementaryLocalBudget: campaignApi.local_points,
  complementaryCrmBudget: campaignApi.crm_points,
  expectedSellIn: campaignApi.sell_in_result,
  expectedSellOut: campaignApi.sell_out_result,
  observation: campaignApi.observation,
  status: {
    id: campaignApi.status,
    name: getPtStatus(campaignApi.status_text),
    statusText: campaignApi.status_text,
  },
  goals: campaignApi.products.map(product => ({
    product: {
      id: product.id,
      name: product.name,
    },
    expectedVolume: product.volume,
  })),
  mechanic: {
    id: campaignApi.fmc_campaign_type.id,
    name: campaignApi.fmc_campaign_type.name,
    homeImage: campaignApi.fmc_campaign_type.picture,
    internalImage: campaignApi.fmc_campaign_type.secondary_picture,
    emailImage: campaignApi.fmc_campaign_type.third_picture,
    campaignListImage: campaignApi.fmc_campaign_type.fourth_picture,
    description: campaignApi.fmc_campaign_type.description,
    created: campaignApi.fmc_campaign_type.created,
  },
  audience: campaignApi.establishments.map(customer => ({
    customer: {
      id: customer.id,
      name: customer.name,
      cnpj: customer.cnpj,
    },
    balance: customer.balance,
  })),
  prize: {
    description: campaignApi.reward_description,
    name: campaignApi.reward_name,
  },
  approvers: extractApprovers(campaignApi.approvers),
  comments: extractComments(campaignApi.approvers),
  highlight: extractHighlight(campaignApi.highlights),
  sendEmail: campaignApi.send_emails,
});
