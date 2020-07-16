import { vendavallApi } from 'services/api';
import { AnswerTrainingDTO } from './dtos';

interface ApiResponse {
  certificate: boolean;
  message: string;
  points: number;
  approved: boolean;
}

export default async (request: AnswerTrainingDTO): Promise<ApiResponse> => {
  const tmpRequest = {
    id: request.trainingId,
    answers: request.answers.map(item => ({
      questionId: item.questionId,
      id: item.answerId,
    })),
  };

  const { data } = await vendavallApi.post<ApiResponse>(
    'quizzes/save-attempt-to-answer',
    tmpRequest,
  );

  return data;
};
