/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

import { Container, RadioContent, RadioContentGroup } from './styles';
import RadioList from './RadioList';

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  answer: string;
}

interface Props {
  question: string;
  answers: AnswersData[];
  id?: number;
  topics: string[];
}

const ButtonsSquareNumber: React.FC<Props> = ({
  question,
  answers,
  id,
  topics,
}) => {
  const dispatch = useDispatch();

  const changeHandler = useCallback(
    // eslint-disable-next-line @typescript-eslint/camelcase
    (value: string, answer_id: number): void => {
      dispatch(
        setValueAnswer({
          value,
          id,
          answer_id,
        }),
      );
    },
    [dispatch, id],
  );

  return (
    <Container>
      <RadioContent>
        <p>{question}</p>
        <RadioContentGroup>
          <div>
            {topics.map(item => (
              <label>{item}</label>
            ))}
          </div>
          {answers.map(answer => (
            <div key={answer.id}>
              <span>{answer.answer}</span>
              <RadioList
                answer={answer.answer}
                topics={topics}
                onChangeHandler={(value: string) => {
                  changeHandler(value, answer.id);
                }}
              />
            </div>
          ))}
        </RadioContentGroup>
      </RadioContent>
    </Container>
  );
};

export default ButtonsSquareNumber;
