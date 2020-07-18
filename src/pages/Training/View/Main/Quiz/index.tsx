import React, { useCallback, useState, useEffect } from 'react';
import { Button } from 'components/shared';
import { useToast } from 'context/ToastContext';
import { FormControl, Radio } from '@material-ui/core';
import { useTraining, Question } from '../../Context';

import {
  Container,
  Content,
  Actions,
  BoxNumbers,
  QuestionNumber,
  Asnwers,
  FormControlLabel,
  RadioGroup,
} from './styles';

const Quiz: React.FC = () => {
  const { addToast } = useToast();
  const [question, setQuestion] = useState<Question>();
  const [questionSelected, setQuestionSelected] = useState(-1);
  const [loading, setLoading] = useState(false);

  const {
    questions,
    canAnswerTraining,
    showMeTheQuiz,
    canShowTheQuiz,
    answerQuestion,
    sendAnswers,
    quizAlreadyAnswered,
    training,
  } = useTraining();

  useEffect(() => {
    if (questionSelected !== -1) return;
    if (questions?.length > 0) {
      setQuestionSelected(0);
    }
  }, [questions, questionSelected]);

  useEffect(() => {
    if (questionSelected >= 0) {
      setQuestion(questions[questionSelected]);
    }
  }, [questions, questionSelected]);

  const handleAnswerClick = useCallback(() => {
    if (!training?.videoUrl) {
      showMeTheQuiz();
      return;
    }
    if (!canAnswerTraining) {
      addToast({
        title: 'Você precisa assistir o vídeo para prosseguir',
        type: 'error',
      });
      return;
    }
    showMeTheQuiz();
  }, [canAnswerTraining, addToast, showMeTheQuiz, training]);

  const handleNextQuestion = useCallback(() => {
    setQuestionSelected(n => {
      if (n >= questions.length - 1) {
        return n;
      }
      return n + 1;
    });
  }, [questions]);

  const handlePreviousQuestion = useCallback(() => {
    setQuestionSelected(n => {
      if (n <= 0) {
        return n;
      }
      return n - 1;
    });
  }, []);

  const handleSave = useCallback(async () => {
    setLoading(true);
    await sendAnswers();
    setLoading(false);
  }, [sendAnswers]);

  return (
    <Container>
      {!canShowTheQuiz && (
        <Button buttonRole="primary" type="button" onClick={handleAnswerClick}>
          Responder
        </Button>
      )}
      {canShowTheQuiz && !!question && (
        <>
          <Content>
            <BoxNumbers>
              {questions.map((item, key) => (
                <QuestionNumber
                  selected={key === questionSelected}
                  key={`question-${item.id}`}
                  onClick={() => setQuestionSelected(key)}
                  status={quizAlreadyAnswered ? !!item.correct : undefined}
                >
                  <span>{key + 1}</span>
                  <strong />
                </QuestionNumber>
              ))}
            </BoxNumbers>
            <p>{question?.question}</p>
            <Asnwers>
              <h5>Respostas</h5>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={question.myAnswerId}
                  onChange={e =>
                    answerQuestion(question.id, parseInt(e.target.value, 0))
                  }
                >
                  {question?.options.map(item => (
                    <div
                      className={
                        question.rightAnswerId === item.id ? '_rightAnswer' : ''
                      }
                    >
                      <FormControlLabel
                        key={`answer-${item.id}`}
                        value={item.id}
                        control={<Radio color="primary" />}
                        label={item.answer}
                      />
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </Asnwers>
          </Content>
          <Actions>
            <div>
              {questionSelected > 0 && (
                <Button
                  type="button"
                  buttonRole="primary"
                  onClick={handlePreviousQuestion}
                >
                  {`<< Anterior`}
                </Button>
              )}
            </div>
            {(!quizAlreadyAnswered ||
              questionSelected !== questions.length - 1) && (
              <div>
                <Button
                  type="button"
                  buttonRole="primary"
                  loading={loading}
                  onClick={
                    questionSelected === questions.length - 1
                      ? handleSave
                      : handleNextQuestion
                  }
                >
                  {`${
                    questionSelected === questions.length - 1
                      ? 'Salvar'
                      : 'Próximo >>'
                  }  `}
                </Button>
              </div>
            )}
          </Actions>
        </>
      )}
    </Container>
  );
};

export default Quiz;
