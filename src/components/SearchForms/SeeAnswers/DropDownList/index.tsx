import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setValueAnswer } from '../../../../state/modules/answer/actions';


// import { pluginApi } from '../../services/api';

import {
  Container
} from './styles';

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  answer: string;
  survey_participant_answers: any;
}

interface Props {
  quetion: string;
  answers: AnswersData[];
}

const DropDownList: React.FC<Props> = ({ quetion, answers }) => {
  const location = useLocation();
  const dispatch = useDispatch()
  const survey_question_id = location.search.replace('?item=', '');


  return (
    <Container>
      <p>{quetion}</p>
      <select name="droplist" id="droplist"

        onChange={(e) => {
          dispatch(setValueAnswer({
            value: (e.target.value),
            id: Number(survey_question_id),
            answer_id: Number(e.target.value),
          }));
        }}
      >
        <option value="" hidden>Selecione uma opção</option>
        {answers.map(item => (
          <option
            key={item.id}
            value={item.id}
            selected={item.survey_participant_answers}
          >{item.answer}

          </option>

        )
        )}
      </select>
    </Container>
  );
};

export default DropDownList;
