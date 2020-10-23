import { Faq } from '../interfaces';

interface Question {
  question: string;
  answer: string;
}

export interface Item {
  category: string;
  questions: Question[];
}

export default (data: Faq[]): Item[] => {
  return data
    .reduce((arr: Item[] = [], item) => {
      if (!arr[item.frequently_asked_question_category.id]) {
        arr[item.frequently_asked_question_category.id] = {
          questions: [],
          category: item.frequently_asked_question_category.title,
        };
      }
      arr[item.frequently_asked_question_category.id].questions.push(item);
      return arr;
    }, [])
    .filter(i => i && i.category);
};
