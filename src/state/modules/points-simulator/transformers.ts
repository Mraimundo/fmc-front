import {
  Channel as ChannelApi,
  Product as ProductApi,
} from 'services/points-simulator/interfaces/api-interface';
import { Channel, Product } from './interfaces';

const channelApiToChannel = (channel: ChannelApi): Channel => ({
  id: channel.id,
  category: channel.category,
  code: channel.code,
  groupName: channel.group_name,
  name: channel.name,
  type: channel.type,
});

const productsApiToProducts = (products: ProductApi[]): Product[] =>
  products.map(product => ({
    id: product.id,
    name: product.name,
    isEnhancer: product.is_enhancer,
    isParticipatingProduct: product.is_a_participating_product,
    type: {
      id: product.type_id,
      name: product.type_name,
    },
    revenues: {
      goalInDollar: product.revenues_goal,
      realizedInDollar: product.revenues_realized,
    },
    pog: {
      goalInDollar: product.pog_goal,
      realizedInDollar: product.pog_realized,
    },
    stock: {
      inKilosPerLiter: product.stock_in_kg_per_liter,
      inDollar: product.stock_in_dolar,
    },
    simulationData: {
      unitValueInDollar: 0,
      revenuesInKilosPerLiter: 0,
      revenuesInDollar: 0,
      pogInKilosPerLiter: 0,
    },
  }));

export { channelApiToChannel, productsApiToProducts };
