import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Question } from './interfaces';

const questions: Question[] = [
  {
    id: 1,
    question:
      'Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta?',
    options: [
      {
        id: 1,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 2,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 3,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 4,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
    ],
  },
  {
    id: 2,
    question:
      'Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta?',
    options: [
      {
        id: 5,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 6,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 7,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 8,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
    ],
  },
  {
    id: 3,
    question:
      'Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta Pergunta?',
    options: [
      {
        id: 9,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 10,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 11,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
      {
        id: 12,
        answer:
          'Resposta Resposta Resposta Resposta Resposta Resposta Resposta',
      },
    ],
  },
];

interface ApiResponse {
  questions: Question[];
}

export default async (trainingId: number): Promise<ApiResponse> => {
  try {
    return { questions };
    /* const {
      data: { roles },
    } = await vendavallApi.get<ApiResponse>(`roles`); */
  } catch (e) {
    return { questions: [] };
  }
};
