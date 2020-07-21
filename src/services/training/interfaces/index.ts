export const TRAINING_STATUS = {
  AVAILABLE: 'available',
  INITIATED: 'initiated',
  CLOSED: 'closed',
};

export type Status =
  | typeof TRAINING_STATUS.AVAILABLE
  | typeof TRAINING_STATUS.INITIATED
  | typeof TRAINING_STATUS.CLOSED;

export interface Category {
  id: number;
  name: string;
}

interface Participation {
  startedDate: Date;
  finishedDate: Date;
  approved: boolean;
  totalAttempts: number;
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
  maxTries: number;
  totalAttempts: number;
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
