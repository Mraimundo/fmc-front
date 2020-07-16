import { Training, Media } from '../interfaces';
import { TrainingApi } from '../interfaces/TrainingApi';

export default (training: TrainingApi): Training => ({
  id: training.id,
  body: training.body,
  title: training.title,
  categories: training.quiz_categories.map(cat => ({
    id: cat.id,
    name: cat.name,
  })),
  status: training.status,
  summary: training.summary,
  imageUrl: training.cover_picture,
  startDate: training.start_date,
  endDate: training.end_date,
  numberOfQuestions: training.number_of_questions,
  media: [
    {
      id: training.id,
      type: 'document',
      url: training.file_url,
      title: 'Esperando pelo retorno do back',
    },
    ...training.quiz_videos.map(video => {
      return {
        id: video.id,
        title: video.title,
        type: 'video',
        url: video.video_url,
      } as Media;
    }),
  ],
  participation: training.participation?.id
    ? {
        id: training.participation.id,
        startedDate: training.participation.start_date,
        finishedDate: training.participation.end_date,
        totalPoints: training.participation.total,
        rightAnswers: training.participation.right_answers,
        certificateUrl: training.participation.certificate_url,
      }
    : undefined,
});
