import { vendavallApi } from 'services/api';
import { Dashboard } from './interfaces';

interface DashboardApi {
  id: number;
  report_id: string;
  access_token: string;
  workspace_id: string;
  embed_url: string;
  description: string;
  name: string;
}

interface PowerBiResponse {
  token: string;
}

interface ApiResponse {
  dashboards: DashboardApi[];
}

export default async (): Promise<Dashboard | undefined> => {
  const {
    data: { dashboards },
  } = await vendavallApi.get<ApiResponse>(`power_bi`);

  if (dashboards.length > 0) {
    const {
      id,
      report_id,
      access_token,
      workspace_id,
      embed_url,
      description,
      name,
    } = dashboards[0];
    return {
      id,
      reportId: report_id,
      accessToken: access_token,
      workspaceId: workspace_id,
      embedUrl: embed_url,
      description,
      name,
    };
  }

  return undefined;
};
