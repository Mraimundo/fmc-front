import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import { Channel, Product } from './interfaces/api-interface';
import mockedProducts from './mock/products';

const getChannels = async (): Promise<Channel[]> => {
  return [
    {
      id: 1,
      name: 'Estabelecimento Teste 1',
      group_name: 'Teste',
      code: 'Teste',
      type: EstablishmentTypes.Resale,
      category: EstablishmentCategory.earth,
    },
  ];
};

const getChannel = async (channelId: number): Promise<Channel | null> => {
  return {
    id: 1,
    name: 'Estabelecimento Teste 1',
    group_name: 'Teste',
    code: 'Teste',
    type: EstablishmentTypes.Resale,
    category: EstablishmentCategory.earth,
  };
};

const getProducts = async (): Promise<Product[]> => {
  return mockedProducts;
};

export { getChannels, getChannel, getProducts };
