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
import mockedProducts from './mock/products';
import mockedProductTypes from './mock/productTypes';
import mockedIndicators from './mock/indicators';
import mockedChannels from './mock/channels';
import mockedConfiguration from './mock/configuration';
import mockedSimulationData from './mock/simulationData';

const test: SaveSimulationDTO[] = [];

const getChannels = async (): Promise<Channel[]> => {
  try {
    const data = await pluginApi.get(
      'simulations/establishments?page=1&limit=15&order=desc',
    );
    console.log('data', data);
  } catch (e) {
    console.log('err', e);
  }

  return mockedChannels;
};

const getChannel = async (channelId: number): Promise<Channel | null> => {
  return mockedChannels.find(item => item.id === channelId) || null;
};

const getProducts = async (channelId: number): Promise<Product[]> => {
  return mockedProducts;
};

const getProductTypes = async (): Promise<ProductType[]> => {
  return mockedProductTypes;
};

const getIndicators = async (channelId: number): Promise<Indicators> => {
  return mockedIndicators;
};

const getConfiguration = async (channelId: number): Promise<Configuration> => {
  return mockedConfiguration;
};

const saveSimulation = async (data: SaveSimulationDTO): Promise<void> => {
  test.push(data);
  console.log('saved', data);
};

const loadSimulations = async (): Promise<SimulationData[]> => {
  if (test.length === 0) return [];
  return mockedSimulationData.map(item => ({
    ...item,
    data_json_in_string: test[0]?.jsonDataInString || '',
  }));
};

const deleteSimulation = async (simulationId: number): Promise<void> => {
  console.log('deleted');
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
