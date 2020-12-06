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

interface ChannelsApiResponse {
  data: Channel[];
}
const getChannels = async (): Promise<Channel[]> => {
  try {
    const {
      data: { data },
    } = await pluginApi.get<ChannelsApiResponse>(
      'simulations/establishments?page=1&limit=10000&order=desc',
    );
    return data;
  } catch (e) {
    return [];
  }
};

interface ChannelApiResponse {
  channel: Channel;
}
const getChannel = async (channelId: number): Promise<Channel | null> => {
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
  const {
    data: { products },
  } = await pluginApi.get<ProductsApiResponse>(
    `simulations/products?establishment_id=${channelId}`,
  );
  return products;
};

const getIndicators = async (channelId: number): Promise<Indicators> => {
  const { data } = await pluginApi.get<Indicators>(
    `simulations/indicators?establishment_id=${channelId}`,
  );
  return data;
};

const getConfiguration = async (channelId: number): Promise<Configuration> => {
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
  const {
    data: { data },
  } = await pluginApi.get<SimulationDataApiResponse>(
    'simulations?limit=15000&order=desc',
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
