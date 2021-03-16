import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setValueAnswer } from '../../../state/modules/answer/actions';

import {
  Container,
} from './styles';

interface Props {
  quetion: string;
  id?: number;
  type: string;
}

const QuestionGlobal: React.FC<Props> = ({ quetion, type, id }) => {
  const location = useLocation();
  const survey_question_id = location.search.replace('?item=', '');
  const dispatch = useDispatch()
  return (
    <Container inputType={type}>
      <p>{quetion}</p>
      <input
        type={type}
        placeholder="Insira os dados necessários"
        onChange={(e) => {

          dispatch(setValueAnswer({
            value: (e.target.value),
            id: Number(survey_question_id),
            answer_id: Number(id),
          }));
        }}
      />
    </Container>
  );
};

export default (QuestionGlobal);
