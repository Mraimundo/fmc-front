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
      `Realizado parcial: US$ ${data.revenues.formattedResult}`,
      `Realizado parcial (%): ${data.revenues.formattedPercentage}%`,
    ],
  });

  cards.push({
    title: `POG`,
    items: [
      `Objetivo total: US$ ${data.pog.formattedGoal}`,
      `Realizado parcial: US$ ${data.pog.formattedResult}`,
      `Realizado parcial (%): ${data.pog.formattedPercentage}%`,
    ],
  });

  return cards;
};
