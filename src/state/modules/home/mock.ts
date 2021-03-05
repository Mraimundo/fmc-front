import {
  strategies,
  engagements,
  bells,
  ranking,
  performance,
} from 'services/home/fmc-team/mock';
import { HomeState } from './reducer';
import { HighlightTypes } from './constants';
import { Banner, Highlight, ShowcaseProduct } from './types';

export const banners: Banner[] = [
  {
    title: 'Banner 1',
    picture: 'https://photo1.com.br',
    mobilePicture: '',
    linkType: 'internal',
    url: 'como-participar',
  },
  {
    title: 'Banner 2',
    picture: 'https://photo2.com.br',
    mobilePicture: '',
    linkType: 'external',
    url: 'https://google.com',
  },
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

export const showcase: ShowcaseProduct[] = [
  {
    id: 1,
    link: '#',
    name: 'Televisor 40" Hi Vision Full HD',
    picture:
      'https://storage.vendavall.com.br/teste/avatars/1596678572.5f2b61ac138d40.17192068.png',
    price: 1328.9,
  },
  {
    id: 2,
    link: '#',
    name: 'IPhone XS - 1G memória',
    picture:
      'https://storage.vendavall.com.br/teste/avatars/1596678743.5f2b6257522cc4.16019629.png',
    price: 3428.9,
  },
  {
    id: 3,
    link: '#',
    name: 'Monitor dinavision gamer - DLC, 42" OLED - 144Hz',
    picture:
      'https://storage.vendavall.com.br/teste/avatars/1596678800.5f2b62906eb787.14848461.png',
    price: 1540.9,
  },
  {
    id: 4,
    link: '#',
    name: 'Camera Canon K297 - Optcal',
    picture:
      'https://storage.vendavall.com.br/teste/avatars/1596678835.5f2b62b35b7399.96031746.png',
    price: 488.9,
  },
];

const state: HomeState = {
  fetchBanners: {
    isFetching: false,
  },
  fetchHighlights: {
    isFetching: false,
  },
  fetchShowcaseProducts: {
    isFetching: false,
  },
  fetchLuckyNumber: {
    isFetching: false,
  },
  fetchStrategies: {
    isFetching: false,
  },
  fetchEngagements: {
    isFetching: false,
  },
  fetchBells: {
    isFetching: false,
  },
  fetchRanking: {
    isFetching: false,
  },
  fetchPerformance: {
    isFetching: false,
  },
  banners,
  highlights,
  showcaseProducts: showcase,
  participantId: null,
  luckyNumber: null,
  strategies,
  engagements,
  bells,
  ranking,
  performance,
};

export default state;
