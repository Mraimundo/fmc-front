import { pluginApi } from 'services/api';
import { AgreementTermResponse } from './interfaces/IRegulation';

export default async (regulationId: string | number): Promise<AgreementTermResponse> => {
  const { data } = await pluginApi.get<AgreementTermResponse>(
    `participants/regulations/getAgreementTerm?regulation_id=${regulationId}`,
  );
  return {
    ...data,
    is_accepted: data.is_accepted,
  };
};
