export interface Regulation {
  id: number;
  name: string;
  content: string;
  version: number;
  file: string;
  display_option: 'text' | 'pdf';
}
