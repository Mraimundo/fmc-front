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
  started_date: Date;
  finished_date: Date;
  total_points: number;
  right_answers: number;
  certificate_url: string;
}

interface Media {
  id: number;
  title: string;
  url: string;
  type: 'video' | 'document' | 'image';
}

export interface Training {
  id: number;
  title: string;
  start_date: Date;
  end_date: Date;
  status: Status;
  image_url: string;
  category: Category[];
  media: Media[];
  number_of_questions: number;
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
