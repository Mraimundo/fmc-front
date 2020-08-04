import { HighlightTypes } from './constants';

export interface Banner {
  title: string;
  picture: string;
  mobilePicture: string;
}

export interface Highlight {
  referenceId: number | null;
  type: HighlightTypes | null;
  title: string;
  picture: string;
  created: string;
  resume: string;
}
