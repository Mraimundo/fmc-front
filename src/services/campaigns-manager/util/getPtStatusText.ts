import { CAMPAIGN_STATUS_TEXT, StatusText } from '../interfaces/Campaign';

export default (statusText: StatusText, plural = false): string => {
  switch (statusText) {
    case CAMPAIGN_STATUS_TEXT.CANCELED:
      return `Cancelada${plural ? 's' : ''}`;
    case CAMPAIGN_STATUS_TEXT.COMPLETED:
      return `Finalizada${plural ? 's' : ''}`;
    case CAMPAIGN_STATUS_TEXT.ON_APPROVAL:
      return `Em aprovação`;
    case CAMPAIGN_STATUS_TEXT.PUBLISHED:
      return `Publicada${plural ? 's' : ''}`;
    case CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS:
      return `Em análise`;
    default:
      return 'Status não identificado';
  }
};
