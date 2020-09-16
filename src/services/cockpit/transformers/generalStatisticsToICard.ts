import { Statistics } from '../interfaces/general';

export interface Card {
  title: string;
  items: string[];
}

export default (data: Statistics): Card[] => {
  const cards = new Array<Card>();
  cards.push({
    title: `Faturamento (${data.revenues.formattedPercentage})`,
    items: [
      `Objetivo total: US$ ${data.revenues.formattedGoal}`,
      `Realizado total: US$ ${data.revenues.formattedResult}`,
    ],
  });

  cards.push({
    title: `POG (${data.pog.formattedPercentage})`,
    items: [
      `Objetivo total: US$ ${data.pog.formattedGoal}`,
      `Realizado total: US$ ${data.pog.formattedResult}`,
    ],
  });

  return cards;
};
