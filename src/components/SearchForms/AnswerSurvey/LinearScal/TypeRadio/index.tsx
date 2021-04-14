import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../../../state/modules/answer/actions';

import {
  Container,
  TypeRadioContent,
  TypeRadioContentGroup
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


const InputGridCheckBox: React.FC<Props> = ({ quetion, answers, id }) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <TypeRadioContent>
        <p>{quetion}</p>
        <TypeRadioContentGroup>
          {
            answers.map(answer => (
              <div key={answer.id}>
                <span>{answer.answer}</span>
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
              </div>
            ))
          }
        </TypeRadioContentGroup>
      </TypeRadioContent>
    </Container>
  );
};

export default InputGridCheckBox;
