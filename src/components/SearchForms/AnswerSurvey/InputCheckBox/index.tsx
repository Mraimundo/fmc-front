import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

import {
  Container,
  CheckBoxContent,
  CheckBoxGroup
} from './styles';

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  answer: string;
}

interface Props {
  quetion: string;
  answers: AnswersData[];
  id?: number | undefined,
}

const InputCheckBox: React.FC<Props> = ({ quetion, answers, id }) => {
  const dispatch = useDispatch()
  return (
    <Container>
      <CheckBoxContent>
        <p>{quetion}</p>
        <CheckBoxGroup>
          {
            answers.map(answer => (
              <label htmlFor={answer.answer} key={answer.id}>
                <input
                  type="checkbox"
                  id={answer.answer}
                  value={answer.answer}
                  name={`${answer.survey_question_id}`}
                  onChange={(e) => {
                    dispatch(setValueAnswer({
                      value: (e.target.value),
                      id: Number(id),
                      answer_id: Number(answer.id),
                    }));
                  }}
                />
                <span>{answer.answer}</span>
              </label>
            ))
          }
        </CheckBoxGroup>
      </CheckBoxContent>
    </Container>
  );
};

export default InputCheckBox;
