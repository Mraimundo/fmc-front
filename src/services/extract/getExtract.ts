import { pluginApi } from 'services/api';
import { ExtractApi, Extract as IExtract } from './interfaces';
import transformer from './transformers/apiToDisplay';

function getMock(campaignId: number): ExtractApi {
  const db: ExtractApi[] = [];
  db.push({
    balance: {
      available: 150,
      shared_actions: 150,
    },
    resume: {
      total: 100,
      points: [
        {
          id: 5,
          name: 'Premiação de Equipe',
          description: 'Premiação de Equipe',
          total: 200,
        },
      ],
    },
    statement: {
      campaign: {
        id: 2,
        title: '2020/21',
        description: '',
        total: 200,
      },
      points: [
        {
          id: 155,
          value: 100,
          description: 'Premiação de Equipe',
          date_ref: new Date('2020-07-26T00:00:00+00:00'),
          type: 'points',
          origin_type: 'undistributed_points',
          origin_id: 4,
          created: new Date('2020-07-26T16:44:03-03:00'),
          balance_unit: {
            id: 5,
            name: 'Premiação de Equipe',
            description: 'Premiação de Equipe',
          },
          balance_status: {
            id: 2,
            name: 'Liberar',
          },
          campaign: {
            id: 1,
            title: '2020/21',
            description: '',
          },
        },
      ],
    },
  });

  db.push({
    balance: {
      available: 100,
      shared_actions: 100,
    },
    resume: {
      total: 100,
      points: [
        {
          id: 5,
          name: 'Premiação de Equipe',
          description: 'Premiação de Equipe',
          total: 100,
        },
      ],
    },
    statement: {
      campaign: {
        id: 1,
        title: '2019/20',
        description: '',
        total: 100,
      },
      points: [
        {
          id: 155,
          value: 100,
          description: 'Premiação de Equipe',
          date_ref: new Date('2020-07-26T00:00:00+00:00'),
          type: 'points',
          origin_type: 'undistributed_points',
          origin_id: 4,
          created: new Date('2020-07-26T16:44:03-03:00'),
          balance_unit: {
            id: 5,
            name: 'Premiação de Equipe',
            description: 'Premiação de Equipe',
          },
          balance_status: {
            id: 2,
            name: 'Liberar',
          },
          campaign: {
            id: 1,
            title: '2019/20',
            description: '',
          },
        },
      ],
    },
  });
  return db[campaignId - 1];
}

export default async (campaignId: number): Promise<IExtract> => {
  const { data } = await pluginApi.get<ExtractApi>(`statement/${campaignId}`);
  // return transformer(data);
  return transformer(getMock(campaignId));
};
