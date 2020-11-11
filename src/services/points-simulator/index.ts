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

const getChannels = async (): Promise<Channel[]> => {
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
  console.log('saved');
};

const loadSimulation = async (simulationId): Promise<SimulationData[]> => {
  return mockedSimulationData;
};

export {
  getChannels,
  getChannel,
  getProducts,
  getProductTypes,
  getIndicators,
  getConfiguration,
  saveSimulation,
  loadSimulation,
};
