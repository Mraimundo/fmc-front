import React from 'react';
import { useDispatch } from 'react-redux';

import { setValueAnswer } from '../../../../state/modules/answer/actions';

import {
  Container,
} from './styles';

interface Props {
  quetion: string;
  id?: number;
  answer_id?: number;
  type: string;
}

const QuestionGlobal: React.FC<Props> = ({ quetion, type, id, answer_id }) => {
  const dispatch = useDispatch();

  return (
    <Container inputType={type}>
      <p>{quetion}</p>
      <input
        type={type}
        placeholder="Insira os dados necessários"
        onChange={(e) => {
          dispatch(setValueAnswer({
            value: (e.target.value),
            id: Number(id),
            answer_id: Number(answer_id),
          }));
        }}
      />
    </Container>
  );
};

export default (QuestionGlobal);
