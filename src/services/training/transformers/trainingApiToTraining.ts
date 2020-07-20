import { number } from 'yup';
import { Training, Media } from '../interfaces';
import { TrainingApi } from '../interfaces/TrainingApi';

const getMedias = (training: TrainingApi): Media[] => {
  const videos = training.quiz_videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      type: 'video',
      url: video.video_url,
    } as Media;
  });
  const media: Media[] = [];
  if (training.file_url) {
    media.push({
      id: training.id,
      type: 'document',
      url: training.file_url,
      title: 'Esperando pelo retorno do back',
    });
  }
  media.push(...videos);

  return media;
};

export default (training: TrainingApi): Training => ({
  id: training.id,
  body: training.body,
  title: training.name,
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
  media: getMedias(training),
  maxTries: training.max_tries,
  participation:
    typeof training.participant_feedback?.approved === 'boolean'
      ? {
          startedDate: training.participant_feedback.started_at,
          finishedDate: training.participant_feedback.approved_at,
          approved: training.participant_feedback.approved,
          totalAttempts: training.total_attempts,
        }
      : undefined,
});
