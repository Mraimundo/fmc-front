import { HighlightTypes } from './constants';

export interface Banner {
  title: string;
  picture: string;
  mobilePicture: string;
  linkType: 'internal' | 'external';
  url: string;
}

export interface Highlight {
  referenceId: number | null;
  type: HighlightTypes | null;
  title: string;
  picture: string;
  created: string;
  resume: string;
}

export interface ShowcaseProduct {
  id: number;
  name: string;
  picture: string;
  price: number;
  link: string;
}

export interface Strategy {
  description: string;
  goal: number;
  reached: number;
}

export interface Engagement {
  description: string;
  goal: number;
  reached: number;
}

export interface Bell {
  description: string;
  quantity: number;
}

export interface Ranking {
  name: string;
  position: number;
}

interface Result {
  goal: number;
  reached: number;
  percentage: number;
}
export interface Performance {
  revenues: Result;
  pog: Result;
  individualPog: Result;
}
