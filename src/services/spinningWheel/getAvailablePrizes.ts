import { Prize } from './interfaces';

export default async (): Promise<Prize[]> => {
  return [
    { id: '100 pontos', value: '100 pontos' },
    { id: 'Tente novamente', value: 'Tente novamente' },
    { id: '250 pontos', value: '250 pontos' },
    { id: 'Tenho outra vez', value: 'Tenho outra vez' },
    { id: '300 pontos', value: '300 pontos' },
    { id: 'Surpresa', value: 'Surpresa' },
  ];
};
