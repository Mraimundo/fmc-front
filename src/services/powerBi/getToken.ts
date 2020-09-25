import { vendavallApi } from 'services/api';

export interface Response {
  reportId: string;
  accessToken: string;
  workspaceId: string;
  embedUrl: string;
}

export default async (): Promise<Response> => {
  const { data } = await vendavallApi.get<Response>(`power_bi`);
  return {
    ...data,
    embedUrl: `https://api.powerbi.com/v1.0/myorg/groups/${data.workspaceId}/reports/${data.reportId}/GenerateToken`,
  };
};
