import {
  Strategy,
  Engagement,
  Bell,
  Ranking,
  Performance,
} from 'state/modules/home/types';
import { strategies, engagements, bells, ranking, performance } from './mock';

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
  return performance;
};
