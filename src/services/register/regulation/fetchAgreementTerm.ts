import { pluginApi } from 'services/api';
import { AgreementTerm } from './interfaces/IRegulation';

export default async (
  regulationId: string | number,
): Promise<AgreementTerm> => {
  const { data } = await pluginApi.get<AgreementTerm>(
    `participants/regulations/getAgreementTerm?regulation_id=${regulationId}`,
  );
  return data;
};
