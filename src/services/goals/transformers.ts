import isEmpty from 'lodash.isempty';

import { formatDollars, formatKgl, formatPoints } from 'util/points';
import {
  Product,
  BillingPog,
  Campaign,
  Potentializer,
  Infos,
} from 'state/modules/goals/types';
import {
  FetchCampaignsService,
  FetchProductsService,
  FetchBillingPogService,
  FetchPotentializersService,
  FetchInfosService,
} from '.';

export const transformCampaigns = (
  data: FetchCampaignsService[],
): Campaign[] | null => {
  if (!data) return null;

  return data.map<Campaign>(campaign => ({
    id: campaign.id,
    title: campaign.title,
  }));
};

export const transformBillingPog = (
  data: FetchBillingPogService,
): BillingPog | null => {
  if (!data) return null;

  const hasBilling = !isEmpty(data.faturamento);
  const hasPog = !isEmpty(data.pog);
  const hasDevolution = !isEmpty(data['devolução']);

  return {
    billing: {
      goal: formatDollars(hasBilling ? data.faturamento.value : 0, 0, 0),
      percentage: hasBilling
        ? Number((data.faturamento.progress.percentage * 100).toFixed())
        : 0,
      realized: formatDollars(
        hasBilling ? data.faturamento.progress.value : 0,
        0,
        0,
      ),
    },
    pog: {
      goal: formatDollars(hasPog ? data.pog.value : 0, 0, 0),
      percentage: hasPog
        ? Number((data.pog.progress.percentage * 100).toFixed())
        : 0,
      realized: formatDollars(hasPog ? data.pog.progress.value : 0, 0, 0),
    },
    devolution: {
      checked: hasDevolution ? data['devolução'].progress.checked : false,
      value: hasDevolution ? data['devolução'].value : '',
      realized: hasDevolution ? data['devolução'].progress.value : 0,
    },
  };
};

export const transformProducts = (
  data: FetchProductsService[],
): Product[] | null => {
  if (!data) return null;

  return data.map<Product>((product, index) => ({
    id: product.id,
    name: product.name,
    billing: formatDollars(product.value),
    volume: formatPoints(product.volume, 0, 0),
    position: (index + 1).toString().padStart(2, '0'),
  }));
};

export const transformPotentializers = (
  data: FetchPotentializersService[],
): Potentializer[] | null => {
  if (!data) return null;

  return data.map<Potentializer>(potentializer => ({
    goal: formatKgl(potentializer.value),
    name: potentializer.balance_unit.name,
    percentage: Number((potentializer.progress.percentage * 100).toFixed()),
    realized: formatKgl(potentializer.progress.value),
  }));
};

export const transformInfos = (data: FetchInfosService): Infos | null => {
  if (!data) return null;

  const points = data.importedPoints.map(point => ({
    value: formatPoints(point.value),
    name: point.name,
  }));

  return {
    points,
    potential: formatDollars(data.potential.value, 0, 0),
    lastUpdate: data.last_update,
    excel: data.full_performance_report,
  };
};
