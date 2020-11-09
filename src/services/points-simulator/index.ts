import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import {
  Channel,
  Product,
  ProductType,
  Indicators,
} from './interfaces/api-interface';
import mockedProducts from './mock/products';
import mockedProductTypes from './mock/productTypes';
import mockedIndicators from './mock/indicators';

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

const getProductTypes = async (): Promise<ProductType[]> => {
  return mockedProductTypes;
};

const getIndicators = async (): Promise<Indicators> => {
  return mockedIndicators;
};

export { getChannels, getChannel, getProducts, getProductTypes, getIndicators };
