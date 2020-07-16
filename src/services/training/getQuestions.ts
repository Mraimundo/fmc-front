import { vendavallApi } from 'services/api';
import { Question } from './interfaces';

interface AnswersApiResonse {
  id: number;
  answer: string;
}

interface QuestionApiResponse {
  id: number;
  question: string;
  quiz_question_answers: AnswersApiResonse[];
}

interface ApiResponse {
  questions: QuestionApiResponse[];
}

export default async (trainingId: number): Promise<Question[]> => {
  try {
    const {
      data: { questions },
    } = await vendavallApi.get<ApiResponse>(
      `trainings/${trainingId}/questions`,
    );
    return questions.map(item => ({
      id: item.id,
      question: item.question,
      options: item.quiz_question_answers.map(option => ({
        id: option.id,
        answer: option.answer,
      })),
    }));
  } catch (e) {
    return [];
  }
};
