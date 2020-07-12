import { vendavallApi } from 'services/api';

interface AnswerResponse {
  training_id: number;
  question_id: number;
  answer_id: number;
}

const answers: AnswerResponse[] = [
  {
    training_id: 1,
    question_id: 1,
    answer_id: 1,
  },
  {
    training_id: 1,
    question_id: 2,
    answer_id: 5,
  },
  {
    training_id: 1,
    question_id: 3,
    answer_id: 11,
  },
];

interface ApiResponse {
  answers: AnswerResponse[];
}

export default async (trainingId: number): Promise<AnswerResponse[]> => {
  try {
    return answers;
    /* const {
      data: { roles },
    } = await vendavallApi.get<ApiResponse>(`roles`); */
  } catch (e) {
    return [];
  }
};
