import { Statistics } from '../interfaces/general';

export interface Card {
  title: string;
  items: string[];
}

export default (data: Statistics): Card[] => {
  const cards = new Array<Card>();
  cards.push({
    title: `Faturamento`,
    items: [
      `Objetivo total: US$ ${data.revenues.formattedGoal}`,
      `Realizado total: US$ ${data.revenues.formattedResult}`,
      `Realizado Parcial: ${data.revenues.formattedPercentage}%`,
    ],
  });

  cards.push({
    title: `POG`,
    items: [
      `Objetivo total: US$ ${data.pog.formattedGoal}`,
      `Realizado total: US$ ${data.pog.formattedResult}`,
      `Realizado Parcial: ${data.pog.formattedPercentage}%`,
    ],
  });

  return cards;
};
