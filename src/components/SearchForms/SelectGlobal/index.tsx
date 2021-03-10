import React from 'react';

// import { pluginApi } from '../../services/api';

import {
  Container,

} from './styles';

interface Props {
  question: string;
  answer: Array<any>;
  id: number;
}

const SelectGlobal: React.FC<Props> = ({ question, answer, id }) => {
  return (
    <Container>
      <p>{question}</p>

      <select name={id.toString()} id={id.toString()}>
        {answer.map(item => (
          <option key={item.id} value={item.id.toString()}>{item.content}</option>
        )
        )}
      </select>
    </Container>
  );
};

export default SelectGlobal;
