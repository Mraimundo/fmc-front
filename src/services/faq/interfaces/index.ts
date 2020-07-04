export interface Faq {
  id: number;
  question: string;
  answer: string;
  position_index: number;
  created: Date;
  modified: Date;
  frequently_asked_question_category: {
    id: number;
    title: string;
    created: Date;
  };
}
