import { Product } from './interfaces';

const mock: Product[] = [
  {
    id: 8937893,
    name: 'Caixa de Som Bluetooth Mondial Speaker Vibe Two',
    description: '',
    providerId: 130,
    provider: 'Magazine Luiza XML',
    priceFrom: 0,
    price: 199.9,
    saleOff: true,
    status: 'Disponível',
    imageUrl: 'https://i.mlcdn.com.br/1500x1500/030211800.jpg',
    catalogUrl: '&prd=1&redir=yaZQVbF8Vzodvb6xBenAwr2umN4BsMHuBd36TB0cbQk=',
    urlComplet:
      'https://hlg.markup.com.br/premioideall/LoginIntegracao.aspx?cpf=ODY1MDM4NDc3MzQ=&campanha=MjA1&prd=1&redir=yaZQVbF8Vzodvb6xBenAwr2umN4BsMHuBd36TB0cbQk=',
  },
  {
    id: 4122726,
    name: 'Liquidificador Philco PH900 2L Preto com Filtro',
    description: '',
    providerId: 130,
    provider: 'Magazine Luiza XML',
    priceFrom: 199.9,
    price: 139.9,
    saleOff: false,
    status: 'Disponível',
    imageUrl: 'https://i.mlcdn.com.br/1500x1500/021749000.jpg',
    catalogUrl: '&prd=1&redir=vwfmJDu9co+tFCqdTHBSxZYAI94TvttdxRqT4ps8uzc=',
    urlComplet:
      'https://hlg.markup.com.br/premioideall/LoginIntegracao.aspx?cpf=ODY1MDM4NDc3MzQ=&campanha=MjA1&prd=1&redir=vwfmJDu9co+tFCqdTHBSxZYAI94TvttdxRqT4ps8uzc=',
  },
  {
    id: 5082551,
    name: 'Fritadeira Elétrica Sem Óleo/Air Fryer Fama',
    description: '',
    providerId: 130,
    provider: 'Magazine Luiza XML',
    priceFrom: 0,
    price: 249.9,
    saleOff: true,
    status: 'Disponível',
    imageUrl: 'https://i.mlcdn.com.br/1500x1500/023315500.jpg',
    catalogUrl: '&prd=1&redir=0Zul9ml/7FNG8QX3Roap/mhwRSZhxkRdq3uLivTYae0=',
    urlComplet:
      'https://hlg.markup.com.br/premioideall/LoginIntegracao.aspx?cpf=ODY1MDM4NDc3MzQ=&campanha=MjA1&prd=1&redir=0Zul9ml/7FNG8QX3Roap/mhwRSZhxkRdq3uLivTYae0=',
  },
];

export default async (): Promise<Product[]> => {
  return mock;
};
