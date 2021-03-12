import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../state/modules/answer/actions';
// import {FiSquare} from 'react-icons/fi';

// import { pluginApi } from '../../services/api';

import {
  Container,
  GridCheckBoxContent,
  CheckBoxContentGroup
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


const InputGridCheckBox: React.FC<Props> = ({ quetion, answers }) => {

  const dispatch = useDispatch()

  return (
    <Container>
      <GridCheckBoxContent>
        <p>{quetion}</p>
        <CheckBoxContentGroup>
          <div>
            {
              answers.map(answer => (
                <label htmlFor={answer.answer} key={answer.id}>
                  <span>{answer.answer}</span>
                  <input
                    type="checkbox"
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
          </div>
        </CheckBoxContentGroup>
      </GridCheckBoxContent>
    </Container>
  );
};

export default InputGridCheckBox;
