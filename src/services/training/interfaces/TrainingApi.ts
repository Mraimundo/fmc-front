import { Status } from '.';

export interface Category {
  id: number;
  name: string;
}

export interface Participation {
  id: number;
  participant_id: number;
  total: number;
  start_date: Date;
  end_date: Date;
  right_answers: number;
  certificate_url: string;
}

export interface QuizVideo {
  id: number;
  quiz_id: number;
  video_identifier: string;
  video_type: string;
  video_url: string;
  title: string;
}

export interface TrainingApi {
  id: number;
  name: string;
  body: string;
  start_date: Date;
  end_date: Date;
  cover_picture: string;
  summary: string;
  max_tries: number;
  total_attempts: number;
  correction_date: Date;
  status: Status;
  file_url: string;
  file_name: string;
  number_of_questions: number;
  participation: Participation;
  points_value: number;
  quiz_categories: Category[];
  quiz_videos: QuizVideo[];
  approved?: boolean;
  participant_feedback?: {
    approved: boolean;
    approved_at: Date;
    started_at: Date;
  };
}
