import { ExtractApi, Extract as IExtract } from 'services/extract/interfaces';

export default (data: ExtractApi): IExtract => {
  return {
    balance: {
      available: data.balance.available,
      sharedActions: data.balance.shared_actions,
    },
    resume: {
      total: data.resume.total,
      points: data.resume.points.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        total: item.total,
      })),
    },
    statement: data.statement.map(item => ({
      campaign: {
        id: item.campaign.id,
        title: item.campaign.title,
        description: item.campaign.description,
        total: item.campaign.total,
      },
      points: item.points.map(point => ({
        id: point.id,
        value: point.value,
        description: point.description,
        dateRef: point.date_ref,
        type: point.type,
        originType: point.origin_type,
        originId: point.origin_id,
        created: point.created,
        balanceUnit: {
          id: point.balance_unit.id,
          name: point.balance_unit.name,
          description: point.balance_unit.description,
        },
        balanceStatus: {
          id: point.balance_status.id,
          name: point.balance_status.name,
        },
        campaign: {
          id: point.campaign.id,
          title: point.campaign.title,
          description: point.campaign.description,
        },
        distributed: point.distributed?.map(distributedItem => ({
          value: distributedItem.value,
          balanceUnitId: distributedItem.balance_unit_id,
          balanceUnitName: distributedItem.balance_unit_name,
        })),
      })),
    })),
  };
};
