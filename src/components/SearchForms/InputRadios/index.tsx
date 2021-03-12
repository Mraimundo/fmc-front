import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../state/modules/answer/actions';

import {
  Container,
  InputGroup
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
}

const InputRadios: React.FC<Props> = ({ quetion, answers }) => {
  const dispatch = useDispatch()
  return (
    <Container>
      <p>{quetion}</p>
      <InputGroup>
        {
          answers.map(answer => (
            <label htmlFor={answer.answer} key={answer.id}>
              <input
                type="radio"
                id={answer.answer}
                value={answer.answer}
                name={`${answer.survey_question_id}`}
                onChange={(e) => {
                  dispatch(setValueAnswer(e.target.value))
                }}
              />
              {answer.answer}
            </label>
          ))
        }
      </InputGroup>
    </Container>
  );
};

export default InputRadios;
