import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Training, Status, TRAINING_STATUS } from './interfaces';

const availabled: Training[] = [
  {
    id: 1,
    title: 'Nome do treinamento',
    start_date: new Date(),
    end_date: new Date(),
    status: 0,
    number_of_questions: 10,
    media: [],
    summary: '',
    body: '',
    image_url:
      'https://storage.vendavall.com.br/photo/1593810092.5eff9cac29f1e2.50823230.png',
    category: [
      {
        id: 1,
        name: 'Categoria 1',
      },
    ],
  },
  {
    id: 2,
    title: 'Nome do treinamento',
    start_date: new Date(),
    end_date: new Date(),
    status: 0,
    number_of_questions: 10,
    media: [],
    summary: '',
    body: '',
    image_url:
      'https://storage.vendavall.com.br/photo/1593810092.5eff9cac29f1e2.50823230.png',
    category: [
      {
        id: 1,
        name: 'Categoria 1',
      },
    ],
  },
  {
    id: 3,
    title: 'Nome do treinamento',
    start_date: new Date(),
    end_date: new Date(),
    status: 0,
    number_of_questions: 10,
    media: [],
    summary: '',
    body: '',
    image_url:
      'https://storage.vendavall.com.br/photo/1593810092.5eff9cac29f1e2.50823230.png',
    category: [
      {
        id: 1,
        name: 'Categoria 1',
      },
    ],
  },
];

const finished: Training[] = [
  {
    id: 4,
    title: 'Nome do treinamento',
    start_date: new Date(),
    end_date: new Date(),
    status: 0,
    number_of_questions: 10,
    media: [],
    summary: '',
    body: '',
    image_url:
      'https://storage.vendavall.com.br/photo/1593810092.5eff9cac29f1e2.50823230.png',
    category: [
      {
        id: 1,
        name: 'Categoria 1',
      },
    ],
    participation: {
      id: 1,
      started_date: new Date(),
      finished_date: new Date(),
      total_points: 7,
      right_answers: 7,
      certificate_url: 'https://google.com',
    },
  },
  {
    id: 5,
    title: 'Nome do treinamento',
    start_date: new Date(),
    end_date: new Date(),
    status: 0,
    number_of_questions: 10,
    media: [],
    summary: '',
    body: '',
    image_url:
      'https://storage.vendavall.com.br/photo/1593810092.5eff9cac29f1e2.50823230.png',
    category: [
      {
        id: 1,
        name: 'Categoria 1',
      },
    ],
    participation: {
      id: 2,
      started_date: new Date(),
      finished_date: new Date(),
      total_points: 7,
      right_answers: 7,
      certificate_url: 'https://google.com',
    },
  },
  {
    id: 6,
    title: 'Nome do treinamento',
    start_date: new Date(),
    end_date: new Date(),
    status: 0,
    number_of_questions: 10,
    media: [],
    summary: '',
    body: '',
    image_url:
      'https://storage.vendavall.com.br/photo/1593810092.5eff9cac29f1e2.50823230.png',
    category: [
      {
        id: 1,
        name: 'Categoria 1',
      },
    ],
    participation: {
      id: 3,
      started_date: new Date(),
      finished_date: new Date(),
      total_points: 7,
      right_answers: 7,
      certificate_url: 'https://google.com',
    },
  },
];

interface Request {
  page?: number;
  limit?: number;
  status: Status;
}

interface ApiResponse {
  data: Training[];
  pagination: Pagination;
}

export default async ({
  page = 1,
  limit = 3,
  status,
}: Request): Promise<ApiResponse> => {
  try {
    switch (status) {
      case TRAINING_STATUS.AVAILABLE:
        return {
          data: availabled,
          pagination: {
            current_page: 1,
            last_page: 1,
            page_total: 3,
            per_page: 3,
            total: 3,
          },
        };
      case TRAINING_STATUS.FINISHED:
        return {
          data: finished,
          pagination: {
            current_page: 1,
            last_page: 1,
            page_total: 3,
            per_page: 3,
            total: 3,
          },
        };
      default:
        return {
          data: [],
          pagination: {} as Pagination,
        };
    }
    /* const {
      data: { roles },
    } = await vendavallApi.get<ApiResponse>(`roles`); */
  } catch (e) {
    return {
      data: [],
      pagination: {} as Pagination,
    };
  }
};
