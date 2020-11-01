import { pluginApi } from 'services/api';
import { Director } from './interfaces/Campaign';

interface DirectorApi {
  id: number;
  name: string;
  code: string;
  directorship: string;
  upn_dv: string;
  upn_dv_participant_id: number;
  upn_grv: string;
  upn_grv_participant_id: number;
  generated_at: Date;
  created: Date;
  modified: Date;
}

interface ApiResponse {
  data: DirectorApi[];
}

export default async (): Promise<Director[]> => {
  /* Api params ?page=1&limit=15&order=desc&establishments[0]=1&regional[0]=Arroz */
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>('directorships?limit=100');
  return data.map(item => ({
    id: item.id,
    name: item.name,
    code: item.code,
    directorship: item.directorship,
    upnDv: item.upn_dv,
    upnDvParticipantId: item.upn_dv_participant_id,
    upnGrv: item.upn_grv,
    upnGrvParticipantId: item.upn_grv_participant_id,
    generatedAt: item.generated_at,
    created: item.created,
  }));
};
