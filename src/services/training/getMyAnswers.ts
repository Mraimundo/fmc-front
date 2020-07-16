import { vendavallApi } from 'services/api';

interface Answer {
  id: number;
  training_id: number;
  question_id: number;
  answer_id: number;
  correct: boolean;
}

interface AnswerResponse {
  id: number;
  training_id: number;
  question_id: number;
  answer_id: number;
  correct_answer: boolean;
}

interface ApiResponse {
  answers: AnswerResponse[];
}

export default async (trainingId: number): Promise<Answer[]> => {
  const {
    data: { answers },
  } = await vendavallApi.get<ApiResponse>(`trainings/${trainingId}/answers`);
  return answers.map(item => ({
    id: item.id,
    training_id: item.training_id,
    question_id: item.question_id,
    answer_id: item.answer_id,
    correct: item.correct_answer,
  }));
};
