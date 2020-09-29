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
