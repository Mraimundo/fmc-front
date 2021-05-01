/* eslint-disable @typescript-eslint/camelcase */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../../state/modules/answer/actions';
import CheckboxList from './CheckBoxList';

import { Container, GridCheckBoxContent, CheckBoxContentGroup } from './styles';

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
  id?: number | undefined;
  topics: string[];
}

const InputGridCheckBox: React.FC<Props> = ({
  question,
  answers,
  id,
  topics,
}) => {
  const dispatch = useDispatch();

  const changeHandler = useCallback(
    (value: string, answer_id: number) => {
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
      <GridCheckBoxContent>
        <p>{question}</p>
        <CheckBoxContentGroup>
          <div>
            {topics.map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {answers.map(answer => (
            <div key={answer.id}>
              <span>{answer.answer}</span>
              <CheckboxList
                answer={answer.answer}
                topics={topics}
                onChangeHandler={(value: string) => {
                  changeHandler(value, answer.id);
                }}
              />
            </div>
          ))}
        </CheckBoxContentGroup>
      </GridCheckBoxContent>
    </Container>
  );
};

export default InputGridCheckBox;
