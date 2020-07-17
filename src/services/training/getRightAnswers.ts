import { vendavallApi } from 'services/api';

export interface AnswerResponse {
  training_id: number;
  question_id: number;
  answer_id: number;
}

interface ApiResponse {
  answers: AnswerResponse[];
}

export default async (trainingId: number): Promise<AnswerResponse[]> => {
  try {
    const {
      data: { answers },
    } = await vendavallApi.get<ApiResponse>(
      `trainings/${trainingId}/correct-answers`,
    );
    return answers;
  } catch (e) {
    return [];
  }
};
