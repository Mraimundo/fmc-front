import { pluginApi } from 'services/api';
import {
  Channel,
  Product,
  ProductType,
  Indicators,
  Configuration,
  SimulationData,
} from './interfaces/api-interface';
import { SaveSimulationDTO } from './interfaces/dtos';

import mock from './mock';

const useMockState = false;

interface ChannelsApiResponse {
  data: Channel[];
}
const getChannels = async (): Promise<Channel[]> => {
  if (useMockState) return mock.channels;

  const orderChannelsByName = (channels: Channel[]): Channel[] => {
    return channels.sort((itemA, itemB) => (itemA.name > itemB.name ? 1 : -1));
  };
  try {
    const {
      data: { data },
    } = await pluginApi.get<ChannelsApiResponse>(
      'simulations/establishments?page=1&limit=10000&order=desc',
    );
    return orderChannelsByName(data);
  } catch (e) {
    return [];
  }
};

interface ChannelApiResponse {
  channel: Channel;
}
const getChannel = async (channelId: number): Promise<Channel | null> => {
  if (useMockState) return mock.channels[0];
  try {
    const {
      data: { channel },
    } = await pluginApi.get<ChannelApiResponse>(
      `simulations/establishments/${channelId}`,
    );
    return channel;
  } catch (e) {
    return null;
  }
};

interface ProductTypesApiResponse {
  types: ProductType[];
}
const getProductTypes = async (): Promise<ProductType[]> => {
  if (useMockState) return mock.productTypes;
  try {
    const {
      data: { types },
    } = await pluginApi.get<ProductTypesApiResponse>('fmc-products/types');
    return types;
  } catch (e) {
    return [];
  }
};

interface ProductsApiResponse {
  products: Product[];
}
const getProducts = async (channelId: number): Promise<Product[]> => {
  if (useMockState) return mock.products;

  const orderProductsByNameAndByParticipation = (
    products: Product[],
  ): Product[] => {
    const participantProducts = products
      .filter(item => item.is_a_participating_product)
      .sort((itemA, itemB) => (itemA.name > itemB.name ? 1 : -1));

    const notParticipantProducts = products
      .filter(item => !item.is_a_participating_product)
      .sort((itemA, itemB) => (itemA.name > itemB.name ? 1 : -1));

    return [...participantProducts, ...notParticipantProducts];
  };

  const {
    data: { products },
  } = await pluginApi.get<ProductsApiResponse>(
    `simulations/products?establishment_id=${channelId}`,
  );
  return orderProductsByNameAndByParticipation(products);
};

const getIndicators = async (channelId: number): Promise<Indicators> => {
  if (useMockState) return mock.indicators;
  const { data } = await pluginApi.get<Indicators>(
    `simulations/indicators?establishment_id=${channelId}`,
  );
  return data;
};

const getConfiguration = async (channelId: number): Promise<Configuration> => {
  if (useMockState) return mock.configuration;
  const { data } = await pluginApi.get<Configuration>(
    `simulations/configuration?establishment_id=${channelId}`,
  );
  return data;
};

const saveSimulation = async (data: SaveSimulationDTO): Promise<void> => {
  const { channelId, jsonDataInString, simulationName } = data;
  const request = {
    establishment_id: channelId,
    content: jsonDataInString,
    name: simulationName,
  };

  await pluginApi.post('simulations/add', request);
};

interface SimulationDataApiResponse {
  data: SimulationData[];
}
const loadSimulations = async (): Promise<SimulationData[]> => {
  if (useMockState) return mock.simulationData;
  const {
    data: { data },
  } = await pluginApi.get<SimulationDataApiResponse>(
    'simulations?limit=10&order=desc',
  );
  return data;
};

const deleteSimulation = (simulationId: number): void => {
  pluginApi.delete(`simulations/remove/${simulationId}`);
};

export {
  getChannels,
  getChannel,
  getProducts,
  getProductTypes,
  getIndicators,
  getConfiguration,
  saveSimulation,
  loadSimulations,
  deleteSimulation,
};
