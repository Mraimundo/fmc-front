import { HomeState } from './reducer';
import { HighlightTypes } from './constants';
import { Banner, Highlight } from './types';

export const banners: Banner[] = [
  { title: 'Banner 1', picture: 'https://photo1.com.br', mobilePicture: '' },
  { title: 'Banner 2', picture: 'https://photo2.com.br', mobilePicture: '' },
];

export const highlights: Highlight[] = [
  {
    referenceId: 1,
    type: HighlightTypes.Report,
    picture:
      'https://storage.vendavall.com.br/teste/avatars/1596425890.5f2786a20ad1c1.48572106.jpg',
    resume:
      'Assim como o feijão faz parte da cultura brasileira, ele faz parte da cultura FMC',
    title: 'Dia do agricultor',
    created: '10/10/2019',
  },
  {
    referenceId: 2,
    type: HighlightTypes.Quiz,
    picture:
      'https://storage.vendavall.com.br/teste/avatars/1596430131.5f279733c56167.72906234.jpg!d',
    resume:
      'Há mais de 10 anos a FMC é líder em soluções para a cana de açucar',
    title: 'Safra',
    created: '10/10/2019',
  },
];

const state: HomeState = {
  fetchBanners: {
    isFetching: false,
  },
  fetchHighlights: {
    isFetching: false,
  },
  banners,
  highlights,
};

export default state;
