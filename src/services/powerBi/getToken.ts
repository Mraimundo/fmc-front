import { vendavallApi } from 'services/api';

export interface Response {
  reportId: string;
  accessToken: string;
  workspaceId: string;
  embedUrl: string;
}

interface PowerBiResponse {
  token: string;
}

export default async (): Promise<Response> => {
  const { data } = await vendavallApi.get<Response>(`power_bi`);

  return {
    accessToken: data.accessToken,
    reportId: data.reportId,
    workspaceId: data.workspaceId,
    embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${data.reportId}`,
  };
};
