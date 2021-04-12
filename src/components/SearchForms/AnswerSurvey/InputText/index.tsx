import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setValueAnswer } from '../../../../state/modules/answer/actions';

import {
  Container,
} from './styles';

interface Props {
  quetion: string;
  id?: number;
  name?: string;
  answer_id?: number;
  type: string;
}

const QuestionGlobal: React.FC<Props> = ({ quetion, type, id, answer_id, name }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  return (
    <Container inputType={type}>
      <p>{quetion}</p>
      <input
        type={type}
        name={name}
        placeholder="Insira os dados necessários"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() =>
          dispatch(setValueAnswer({
            value,
            id: Number(id),
            answer_id: Number(answer_id),
          }))
        }
      />
    </Container>
  );
};

export default (QuestionGlobal);
