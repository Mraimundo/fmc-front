import { Option } from 'components/shared/Select';
import { formatDate } from 'util/datetime';
import {
  Harvest,
  HarvestApi,
  AgreementTerm,
  AgreementTermApi,
  Comment,
  CommentApi,
} from './interface';

export const transformFromHarvestApi = (data: HarvestApi[]): Harvest[] => {
  return data.map<Harvest>(({ id, title }) => ({ id, title }));
};

export const transformToSelectOptions = (data: Harvest[]): Option[] => {
  return data.map<Option>(({ id, title }) => ({ value: id.toString(), title }));
};

export const transformFromAgreementTermsApi = (
  data: AgreementTermApi[],
): AgreementTerm[] => {
  return data.map<AgreementTerm>(
    ({
      id,
      url,
      campaign,
      created,
      approved,
      reason,
      establishment,
      modified,
    }) => ({
      id,
      harvest: campaign.title,
      clientGroup: establishment.client_group,
      agreement: url,
      requestedAt: formatDate(created),
      approved,
      reason,
      modified: formatDate(modified),
    }),
  );
};

export const transformFromCommentApi = (data: CommentApi[]): Comment[] => {
  return data.map<Comment>(({ id, comment, created, participant }) => ({
    id,
    comment,
    dateTime: formatDate(created, 'dd/MM/yyyy - hh:mm'),
    participantName: participant.name,
  }));
};
