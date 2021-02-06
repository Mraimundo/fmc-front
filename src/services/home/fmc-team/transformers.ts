/* Transformers Interface Apis to App Interfaces Should be here. For now I just put example return with each function */

import {
  Strategy,
  Engagement,
  Bell,
  Ranking,
  Performance,
} from 'state/modules/home/types';

import {
  StrategyApi,
  EngagementApi,
  BellApi,
  RankingApi,
  PerformanceApi,
} from './interfaces';

import { performance } from './mock';

export const strategiesApiToStrategies = (data: StrategyApi[]): Strategy[] => {
  return data.map(() => ({
    description: '',
    goal: 0,
    reached: 0,
  }));
};

export const engagementsApiToEngagements = (
  data: EngagementApi[],
): Engagement[] => {
  return data.map(() => ({
    description: '',
    goal: 0,
    reached: 0,
  }));
};

export const BellsApiToBells = (data: BellApi[]): Bell[] => {
  return data.map(() => ({
    description: '',
    quantity: 0,
  }));
};

export const rankingApiToRanking = (data: RankingApi): Ranking => {
  if (!data) return { name: '', position: 0 };
  return {
    name: '',
    position: 0,
  };
};

export const performanceApiToPerformance = (
  data: PerformanceApi,
): Performance => {
  if (!data) return performance;
  return performance;
};
