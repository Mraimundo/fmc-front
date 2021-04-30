import {
  Strategy,
  Engagement,
  Bell,
  Ranking,
  Performance,
} from 'state/modules/home/types';

export const strategies: Strategy[] = [
  {
    description: 'Desenvolvimento de produtos',
    goal: 5,
    reached: 5,
  },
  {
    description: 'Ações de relacionamento',
    goal: 5,
    reached: 5,
  },
  {
    description: 'Top 10 clientes dos canais',
    goal: 5,
    reached: 2,
  },
  {
    description: 'Estratégia de crescimento',
    goal: 5,
    reached: 0,
  },
];

export const engagements: Engagement[] = [
  {
    description: 'Habilidade',
    goal: 5,
    reached: 5,
  },
  {
    description: 'Liderança',
    goal: 5,
    reached: 5,
  },
  {
    description: 'Inovação',
    goal: 5,
    reached: 2,
  },
  {
    description: 'Campanhas aceleradoras',
    goal: 5,
    reached: 0,
  },
];

export const bells: Bell[] = [
  {
    description: 'Gestão',
    quantity: 12,
  },

  {
    description: 'Estratégia',
    quantity: 8,
  },

  {
    description: 'Engajamento',
    quantity: 4,
  },

  {
    description: 'Extra',
    quantity: 1,
  },
];

export const ranking: Ranking = {
  name: 'Diretoria Sul',
  position: 60,
};

export const performance: Performance = {
  revenues: {
    goal: 100000,
    reached: 25000,
    percentage: 25,
  },
  pog: {
    goal: 100000,
    reached: 50000,
    percentage: 50,
  },
  individualPog: {
    goal: 100000,
    reached: 100000,
    percentage: 100,
  },
};
