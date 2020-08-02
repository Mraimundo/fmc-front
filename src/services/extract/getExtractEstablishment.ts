import { pluginApi } from 'services/api';
import { ExtractApi, Extract as IExtract } from './interfaces';
import transformer from './transformers/apiToDisplay';

function getMock(campaignId: number): ExtractApi {
  const db: ExtractApi[] = [];
  db.push({
    balance: {
      available: 0,
      shared_actions: 0,
    },
    resume: {
      total: 1200,
      points: [
        {
          id: 1,
          name: 'Rebate',
          description: 'Rebate',
          total: 1200,
        },
      ],
    },
    statement: [
      {
        campaign: {
          id: 2,
          title: '2020/21',
          description: '',
          total: 1200,
        },
        points: [
          {
            id: 4,
            value: 1200,
            description: 'Programa 20/21',
            date_ref: new Date('2020-07-13T00:00:00+00:00'),
            type: 'undistributed_points',
            origin_type: 'import',
            origin_id: 71,
            created: new Date('2020-07-13T09:03:25-03:00'),
            balance_unit: {
              id: 1,
              name: 'Rebate',
              description: 'Rebate',
            },
            balance_status: {
              id: 1,
              name: 'Ativo',
            },
            campaign: {
              id: 1,
              title: '2020/21',
              description: '',
            },
            distributed: [
              {
                value: 100,
                balance_unit_id: 1,
                balance_unit_name: 'Rebate',
              },
              {
                value: 840,
                balance_unit_id: 3,
                balance_unit_name: 'Desconto de Duplicata',
              },
              {
                value: 260,
                balance_unit_id: 5,
                balance_unit_name: 'Premiação de Equipe',
              },
            ],
          },
        ],
      },
    ],
  });

  db.push({
    balance: {
      available: 0,
      shared_actions: 0,
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
    statement: [
      {
        campaign: {
          id: 1,
          title: '2019/20',
          description: '',
          total: 100,
        },
        points: [
          {
            id: 155,
            value: 1500,
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
            distributed: [
              {
                value: 100,
                balance_unit_id: 1,
                balance_unit_name: 'Rebate',
              },
              {
                value: 840,
                balance_unit_id: 3,
                balance_unit_name: 'Desconto de Duplicata',
              },
              {
                value: 260,
                balance_unit_id: 5,
                balance_unit_name: 'Premiação de Equipe',
              },
            ],
          },
        ],
      },
    ],
  });

  return db[campaignId - 1];
}

export default async (campaignId: number): Promise<IExtract> => {
  const { data } = await pluginApi.get<ExtractApi>(
    `statement/establishment/${campaignId}`,
  );
  return transformer(data);
  // return transformer(getMock(campaignId));
};
