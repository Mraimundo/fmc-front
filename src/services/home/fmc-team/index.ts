import {
  Strategy,
  Engagement,
  Bell,
  Ranking,
  Performance,
} from 'state/modules/home/types';
import { pluginApi } from 'services/api';
import { strategies, engagements, bells, ranking } from './mock';

export const getStrategies = async (): Promise<Strategy[]> => {
  return strategies;
};

export const getEngagements = async (): Promise<Engagement[]> => {
  return engagements;
};

export const getBells = async (): Promise<Bell[]> => {
  return bells;
};

export const getRanking = async (): Promise<Ranking> => {
  return ranking;
};

export const getPerformance = async (): Promise<Performance> => {
  const { data } = await pluginApi.get<Performance>('cockpit/management');
  return data;
};
