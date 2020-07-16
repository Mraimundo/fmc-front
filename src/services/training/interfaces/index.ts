export const TRAINING_STATUS = {
  AVAILABLE: 0,
  FINISHED: 1,
};

export type Status =
  | typeof TRAINING_STATUS.AVAILABLE
  | typeof TRAINING_STATUS.FINISHED;

export interface Category {
  id: number;
  name: string;
}

interface Participation {
  id: number;
  startedDate: Date;
  finishedDate: Date;
  totalPoints: number;
  rightAnswers: number;
  certificateUrl: string;
}

export interface Media {
  id: number;
  title: string;
  url: string;
  type: 'video' | 'document' | 'image';
}

export interface Training {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  status: Status;
  imageUrl: string;
  categories: Category[];
  media: Media[];
  numberOfQuestions: number;
  participation?: Participation;
  summary: string;
  body: string;
}

interface Answer {
  id: number;
  answer: string;
}

export interface Question {
  id: number;
  question: string;
  options: Answer[];
}
