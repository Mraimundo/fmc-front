import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

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
  const location = useLocation();
  const dispatch = useDispatch()
  const survey_question_id = location.search.replace('?item=', '');
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
                  dispatch(setValueAnswer({
                    value: (e.target.value),
                    id: Number(survey_question_id),
                    answer_id: Number(answer.id),
                  }));
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
