import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../state/modules/answer/actions';

// import { pluginApi } from '../../services/api';

import {
  Container,

} from './styles';

interface Props {
  quetion: string;
  type: string;
}

const QuestionGlobal: React.FC<Props> = ({ quetion, type }) => {
  const dispatch = useDispatch()
  return (
    <Container inputType={type}>
      <p>{quetion}</p>
      <input
        type={type}
        placeholder="Insira os dados necessários"
        onChange={(e) => {
          dispatch(setValueAnswer(e.target.value))
        }}
      />
    </Container>
  );
};

export default (QuestionGlobal);
