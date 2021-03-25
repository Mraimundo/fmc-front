import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

import {
  Container,
  RadioContent,
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
  id?: number;
}

const InputRadios: React.FC<Props> = ({ quetion, answers, id }) => {
  const dispatch = useDispatch()
  return (
    <Container>
      <RadioContent>
        <p>{quetion}</p>
        <InputGroup>
          {
            answers.map(answer => (
              <div>
                <label htmlFor="">
                  <input
                    type="radio"
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
                </label>
                {answer.answer}
              </div>
            ))
          }
        </InputGroup>
      </RadioContent>
    </Container>
  );
};

export default InputRadios;
