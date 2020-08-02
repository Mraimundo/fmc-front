import React, { createContext, useState, useContext, useCallback } from 'react';
import {
  answerTraining,
  canAnswerTraininig,
  checkIfParticipantHasBeenApproved,
  getQuestions,
  getTraining,
} from 'services/training';
import getCertificate, {
  Response as ICertificate,
} from 'services/training/getCertificate';
import setVideoWatchedService from 'services/training/setVideoWatched';
import getMyAnswers, {
  Answer as IAnswer,
} from 'services/training/getMyAnswers';
import getRightAnswers, {
  AnswerResponse as IAnswerResponse,
} from 'services/training/getRightAnswers';
import transformer, {
  Response as ITraining,
} from 'services/training/transformers/toTrainingPage';
import { Question as IQuestion } from 'services/training/interfaces';
import { useToast } from 'context/ToastContext';
import history from 'services/history';

export interface Question extends IQuestion {
  myAnswerId: number | null;
  rightAnswerId: number | null;
  correct: boolean | null;
}

interface TrainingContextState {
  training: ITraining | null;
  videoWatched: boolean;
  loadTraining(trainingId: number): Promise<void>;
  setVideoWatched(): Promise<void>;
  showMeTheQuiz(): void;
  canShowTheQuiz: boolean;
  questions: Question[];
  answerQuestion(questionId: number, answerId: number): void;
  sendAnswers(): Promise<void>;
  quizAlreadyAnswered: boolean;
  successModalOpened: boolean;
  closeSuccessModal(): void;
  approved: boolean;
  canAnswer: { canAnswer: boolean; reason: string };
  certificate: ICertificate;
}

const TrainingContext = createContext<TrainingContextState>(
  {} as TrainingContextState,
);

export const TrainingProvider: React.FC = ({ children }) => {
  const [training, setTraining] = useState<ITraining | null>(null);
  const [videoWatched, setVideoWatched] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAlreadyAnswered, setQuizAlreadyAnswered] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [successModalOpened, setSuccessModalOpened] = useState(false);
  const [approved, setApproved] = useState(false);
  const [canAnswer, setCanAnswer] = useState({ canAnswer: false, reason: '' });
  const [certificate, setCertificate] = useState<ICertificate>({
    url: '',
    message: '',
    hasCertificate: false,
  });
  const { addToast } = useToast();

  const closeSuccessModal = useCallback(() => setSuccessModalOpened(false), []);

  const loadTraining = useCallback(
    async (trainingId: number): Promise<void> => {
      try {
        canAnswerTraininig(trainingId).then(({ can_answer, message }) => {
          setCanAnswer({ canAnswer: can_answer, reason: message });
        });
        getQuestions(trainingId).then(async data => {
          const approvedApi = await checkIfParticipantHasBeenApproved(
            trainingId,
          );
          if (approvedApi) {
            const [answers, rightAnswers] = await Promise.all<
              IAnswer[],
              IAnswerResponse[]
            >([getMyAnswers(trainingId), getRightAnswers(trainingId)]);

            setQuestions(
              data.map(item => ({
                ...item,
                correct:
                  answers.find(i => i.question_id === item.id)?.correct ||
                  false,
                myAnswerId:
                  answers.find(i => i.question_id === item.id)?.answer_id ||
                  null,
                rightAnswerId:
                  rightAnswers.find(i => i.question_id === item.id)
                    ?.answer_id || null,
              })),
            );
            setQuizAlreadyAnswered(true);
            setShowQuiz(true);
            setApproved(approvedApi);
          } else {
            setQuestions(
              data.map(item => ({
                ...item,
                myAnswerId: null,
                rightAnswerId: null,
                correct: null,
              })),
            );
          }
        });
        const data = await getTraining(trainingId);
        const transformedTraining = transformer(data);
        setTraining(transformedTraining);
      } catch {
        addToast({
          title: 'Falha ao carregar o treinamento solicitado',
          type: 'error',
        });
        history.push('/training');
      }
    },
    [addToast],
  );

  const sendAnswers = useCallback(async () => {
    if (!training) {
      return;
    }
    if (
      questions.filter(item => !!item.myAnswerId).length !== questions.length
    ) {
      addToast({
        title: 'Todas as questões devem ser respondidas!',
        type: 'error',
      });
      return;
    }
    try {
      const { approved: approvedApi, message } = await answerTraining({
        trainingId: training.id,
        answers: questions.map(item => ({
          questionId: item.id,
          answerId: item.myAnswerId || 0,
        })),
      });
      canAnswerTraininig(training.id).then(
        ({ can_answer, message: reason }) => {
          setCanAnswer({ canAnswer: can_answer, reason });
        },
      );
      setQuizAlreadyAnswered(true);
      if (approvedApi) {
        const certificateResponse = await getCertificate(training.id);
        setCertificate(certificateResponse);
        setApproved(approvedApi);
        setSuccessModalOpened(true);
        loadTraining(training.id);
      } else {
        addToast({
          title: message,
          type: 'success',
        });
      }
    } catch (e) {
      addToast({
        title:
          e?.response?.data?.message ||
          'Falha ao responder treinamento. Por favor contate o suporte',
        type: 'error',
      });
    }
  }, [questions, addToast, training, loadTraining]);

  const showMeTheQuiz = useCallback((): void => {
    setShowQuiz(true);
  }, []);

  const answerQuestion = useCallback(
    (questionId: number, answerId: number) => {
      if (quizAlreadyAnswered) return;
      setQuestions(data =>
        data.map(item => ({
          ...item,
          myAnswerId: item.id === questionId ? answerId : item.myAnswerId,
        })),
      );
    },
    [quizAlreadyAnswered],
  );

  const handleVideoWatched = useCallback(async () => {
    if (training) await setVideoWatchedService(training.id);
    setVideoWatched(true);
  }, [training]);

  return (
    <TrainingContext.Provider
      value={{
        training,
        videoWatched,
        canShowTheQuiz: showQuiz,
        questions,
        loadTraining,
        setVideoWatched: handleVideoWatched,
        showMeTheQuiz,
        answerQuestion,
        sendAnswers,
        quizAlreadyAnswered,
        successModalOpened,
        closeSuccessModal,
        approved,
        canAnswer,
        certificate,
      }}
    >
      {children}
    </TrainingContext.Provider>
  );
};

export const useTraining = (): TrainingContextState => {
  const context = useContext(TrainingContext);
  if (!context) {
    throw new Error('useTraining must be used within a TrainingProvider');
  }
  return context;
};
