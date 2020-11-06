import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import { Channel, Product } from './interfaces/api-interface';

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

const getChannel = async (): Promise<Channel | null> => {
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
  return [
    {
      id: 1,
      name: 'Produto 1',
      type_id: 1,
      type_name: 'Inseticida',
      is_enhancer: false,
      is_a_participating_product: true,
      revenues_goal: 1333000,
      revenues_realized: 666000,
      pog_goal: 1333000,
      pog_realized: 666000,
      stock_in_kg_per_liter: 1333000,
      stock_in_dolar: 666000,
    },
    {
      id: 2,
      name: 'Produto 2',
      type_id: 1,
      type_name: 'Inseticida',
      is_enhancer: true,
      is_a_participating_product: true,
      revenues_goal: 1333000,
      revenues_realized: 666000,
      pog_goal: 1333000,
      pog_realized: 666000,
      stock_in_kg_per_liter: 1333000,
      stock_in_dolar: 666000,
    },
  ];
};

export { getChannels, getChannel, getProducts };
