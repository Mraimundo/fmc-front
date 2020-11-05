import { PointsSimulatorState } from './reducer';

const mock: PointsSimulatorState = {
  products: [
    {
      id: 1,
      name: 'Produto 1',
      isEnhancer: false,
      isParticipatingProduct: true,
      type: {
        id: 1,
        name: 'Inseticida',
      },
      revenues: {
        goalInDollar: 1333000,
        realizedInDollar: 666000,
      },
      pog: {
        goalInDollar: 1333000,
        realizedInDollar: 666000,
      },
      stock: {
        inKilosPerLiter: 90000,
        inDollar: 1000000,
      },
      simulationData: {
        unitValueInDollar: 0,
        revenuesInKilosPerLiter: 0,
        revenuesInDollar: 0,
        pogInKilosPerLiter: 0,
      },
    },
  ],
};

export default mock;
