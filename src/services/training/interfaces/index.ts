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

export interface Training {
  id: number;
  title: string;
  start_date: Date;
  end_date: Date;
  status: Status;
  image: string;
  category: Category[];
  number_of_questions: number;
  participantion: Participation[];
}
