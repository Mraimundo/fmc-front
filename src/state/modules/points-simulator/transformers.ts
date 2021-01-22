import {
  Channel as ChannelApi,
  Product as ProductApi,
  Indicators as IndicatorsApi,
  Configuration as ConfigurationApi,
} from 'services/points-simulator/interfaces/api-interface';
import getPercentage from './services/get-goal-realized-percentage';
import {
  Channel,
  Product,
  Indicator,
  IndicatorType,
  UnitType,
  Configuration,
} from './interfaces';

const channelApiToChannel = (channel: ChannelApi): Channel => ({
  id: channel.id,
  category: channel.category,
  code: channel.client_code,
  groupName: channel.client_group,
  name: channel.name,
  type: channel.type,
});

const productsApiToProducts = (products: ProductApi[]): Product[] =>
  products.map(product => ({
    id: product.id,
    checked: false,
    name: product.name,
    isEnhancer: product.is_enhancer,
    isParticipatingProduct: product.is_a_participating_product,
    type: {
      id: product.segment_id,
      name: product.segment,
    },
    revenues: {
      goalInDollar: product.revenues_goal_in_dollar,
      realizedInDollar: product.revenues_realized_in_dollar,
      goalInKilosByLiter: product.revenues_goal_in_kilos_by_liter,
      realizedInKilosByLiter: product.revenues_realized_in_kilos_by_liter,
    },
    pog: {
      goalInDollar: product.pog_goal_in_dollar,
      realizedInDollar: product.pog_realized_in_dollar,
      goalInKilosByLiter: product.pog_goal_in_kilos_by_liter,
      realizedInKilosByLiter: product.pog_realized_in_kilos_by_liter,
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
      pogInDollar: 0,
      pogUnitValueInDollar: 0,
      pogRealizedNetInDollarSimulated: 0,
      pogRealizedNetInRealSimulated: 0,
      pogRealizedNetInDollarTotal: 0,
      pogRealizedNetInRealTotal: 0,
    },
    simulationPoints: {
      rebateReachedInRealSimulated: 0,
      rebateReachedInRealSimulatedButUsedToGetTotal: 0,
      rebateReachedInRealRealized: 0,
      rebateReachedInRealTotal: 0,
      sellerReachedInRealSimulated: 0,
      sellerReachedInRealSimulatedButUsedToGetTotal: 0,
      sellerReachedInRealRealized: 0,
      sellerReachedInRealTotal: 0,
      additionalMarginSimulated: 0,
      additionalMarginRealized: 0,
      additionalMarginTotal: 0,
    },
    awardsParamsToPay: {
      rebatePercentage: product.rebate_percentage_to_pay * 100,
      sellerValueInReal: product.seller_value_in_real_to_pay,
      additionalMarginPercentage:
        product.additional_margin_percentage_to_pay * 100,
    },
    extraPercentageToPayByEnhancerProduct:
      product.extra_percentage_to_pay_per_enhancer_product * 100,
  }));

const indicatorsApiToIndicators = (indicators: IndicatorsApi): Indicator[] => {
  const result: Indicator[] = [];

  result.push({
    title: 'Faturamento',
    type: IndicatorType.revenues,
    unitType: UnitType.dollar,
    lastRealized: indicators.revenues_last_realized_in_dollar,
    currentRealized: indicators.revenues_current_realized_in_dollar,
    isRegisteredProduct: false,
    currentGoal: indicators.revenues_current_goal_in_dollar,
    percentageRealized: getPercentage(
      indicators.revenues_current_goal_in_dollar,
      indicators.revenues_current_realized_in_dollar,
    ),
    simulationData: {
      totalPercentageRealized: getPercentage(
        indicators.revenues_current_goal_in_dollar,
        indicators.revenues_current_realized_in_dollar,
      ),
      totalRealized: indicators.revenues_current_realized_in_dollar,
      totalSimulated: 0,
    },
  });

  result.push({
    title: 'POG',
    type: IndicatorType.pog,
    unitType: UnitType.dollar,
    lastRealized: indicators.pog_last_realized_in_dollar,
    currentRealized: indicators.pog_current_realized_in_dollar,
    isRegisteredProduct: false,
    currentGoal: indicators.pog_current_goal_in_dollar,
    percentageRealized: getPercentage(
      indicators.pog_current_goal_in_dollar,
      indicators.pog_current_realized_in_dollar,
    ),
    simulationData: {
      totalPercentageRealized: getPercentage(
        indicators.pog_current_goal_in_dollar,
        indicators.pog_current_realized_in_dollar,
      ),
      totalRealized: indicators.pog_current_realized_in_dollar,
      totalSimulated: 0,
    },
  });

  result.push({
    title: 'Premio',
    type: IndicatorType.premio,
    unitType: UnitType.liter,
    lastRealized: indicators.premio_last_realized_in_Liter,
    currentRealized: indicators.premio_current_realized_in_Liter,
    isRegisteredProduct: true,
    currentGoal: indicators.premio_current_goal_in_Liter,
    percentageRealized: getPercentage(
      indicators.premio_current_goal_in_Liter,
      indicators.premio_current_realized_in_Liter,
    ),
    simulationData: {
      totalPercentageRealized: getPercentage(
        indicators.premio_current_goal_in_Liter,
        indicators.premio_current_realized_in_Liter,
      ),
      totalRealized: indicators.premio_current_realized_in_Liter,
      totalSimulated: 0,
    },
  });

  result.push({
    title: 'Hero',
    type: IndicatorType.hero,
    unitType: UnitType.liter,
    lastRealized: indicators.hero_last_realized_in_Liter,
    currentRealized: indicators.hero_current_realized_in_Liter,
    isRegisteredProduct: true,
    currentGoal: indicators.hero_current_goal_in_Liter,
    percentageRealized: getPercentage(
      indicators.hero_current_goal_in_Liter,
      indicators.hero_current_realized_in_Liter,
    ),
    simulationData: {
      totalPercentageRealized: getPercentage(
        indicators.hero_current_goal_in_Liter,
        indicators.hero_current_realized_in_Liter,
      ),
      totalRealized: indicators.hero_current_realized_in_Liter,
      totalSimulated: 0,
    },
  });

  result.push({
    title: 'Talisman',
    type: IndicatorType.talisman,
    unitType: UnitType.liter,
    lastRealized: indicators.talisman_last_realized_in_Liter,
    currentRealized: indicators.talisman_current_realized_in_Liter,
    isRegisteredProduct: true,
    currentGoal: indicators.talisman_current_goal_in_Liter,
    percentageRealized: getPercentage(
      indicators.talisman_current_goal_in_Liter,
      indicators.talisman_current_realized_in_Liter,
    ),
    simulationData: {
      totalPercentageRealized: getPercentage(
        indicators.talisman_current_goal_in_Liter,
        indicators.talisman_current_realized_in_Liter,
      ),
      totalRealized: indicators.talisman_current_realized_in_Liter,
      totalSimulated: 0,
    },
  });

  return result;
};

const configurationApiToConfiguration = (
  configuration: ConfigurationApi,
): Configuration => {
  return {
    partialDate: configuration.partial_date,
    pogRealizedNetPercentage:
      100 - configuration.pog_realized_net_percentage * 100,
    minimumRebatePercentageToMakePoints:
      configuration.minimum_rebate_percentage_to_participate * 100,
    minimumSellerPercentageToMakePoints:
      configuration.minimum_seller_percentage_to_participate * 100,
  };
};

export {
  channelApiToChannel,
  productsApiToProducts,
  indicatorsApiToIndicators,
  configurationApiToConfiguration,
};
