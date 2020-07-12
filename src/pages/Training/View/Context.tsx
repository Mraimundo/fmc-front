import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import {
  getTraining,
  getQuestions,
  answerTraining,
  getRightAnswers,
} from 'services/training';
import setVideoWatchedService from 'services/training/setVideoWatched';
import transformer, {
  Response as ITraining,
} from 'services/training/transformers/toTrainingPage';
import { Question as IQuestion } from 'services/training/interfaces';
import { useToast } from 'context/ToastContext';
import history from 'services/history';

export interface Question extends IQuestion {
  myAnswerId: number | null;
  rightAnswerId: number | null;
}

interface TrainingContextState {
  training: ITraining | null;
  canAnswerTraining: boolean;
  loadTraining(trainingId: number): Promise<void>;
  setVideoWatched(): Promise<void>;
  showMeTheQuiz(): void;
  canShowTheQuiz: boolean;
  questions: Question[];
  answerQuestion(questionId: number, answerId: number): void;
  sendAnswers(): Promise<void>;
  quizAlreadyAnswered: boolean;
}

const TrainingContext = createContext<TrainingContextState>(
  {} as TrainingContextState,
);

export const TrainingProvider: React.FC = ({ children }) => {
  const [training, setTraining] = useState<ITraining | null>(null);
  const [canAnswerTraining, setCanAnswerTraining] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAlreadyAnswered, setQuizAlreadyAnswered] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const { addToast } = useToast();

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
      const passou = true;
      await answerTraining({
        trainingId: training.id,
        answers: questions.map(item => ({
          questionId: item.id,
          answerId: item.myAnswerId || 0,
        })),
      });
      setQuizAlreadyAnswered(true);
      if (passou) {
        getRightAnswers(training.id).then(answers => {
          setQuestions(data =>
            data.map(item => ({
              ...item,
              rightAnswerId:
                answers.find(i => i.question_id === item.id)?.answer_id || null,
            })),
          );
        });
      }
    } catch {
      addToast({
        title: 'Falha ao responder treinamento. Por favor contate o suporte',
        type: 'error',
      });
    }
  }, [questions, addToast, training]);

  const loadTraining = useCallback(
    async (trainingId: number): Promise<void> => {
      try {
        getQuestions(trainingId).then(data =>
          setQuestions(
            data.questions.map(item => ({
              ...item,
              myAnswerId: null,
              rightAnswerId: null,
            })),
          ),
        );
        const data = await getTraining(trainingId);
        setTraining(transformer(data));
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

  const setVideoWatched = useCallback(async () => {
    if (training) await setVideoWatchedService(training.id);
    setCanAnswerTraining(true);
  }, [training]);

  return (
    <TrainingContext.Provider
      value={{
        training,
        canAnswerTraining,
        canShowTheQuiz: showQuiz,
        questions,
        loadTraining,
        setVideoWatched,
        showMeTheQuiz,
        answerQuestion,
        sendAnswers,
        quizAlreadyAnswered,
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
