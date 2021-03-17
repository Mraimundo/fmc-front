import React, { useState } from 'react';

import {
  Container,
} from './styles';

interface Props {
  quetion: string;
  id?: number;
  type: string;
}

const QuestionGlobal: React.FC<Props> = ({ quetion, type, id }) => {
  const [currentValue, setcurrentValue] = useState("");
  return (
    <Container inputType={type}>
      <p>{quetion}</p>
      <input
        type={type}
        placeholder="Insira os dados necessários"
        value={currentValue}
        onChange={(e) => {
          (setcurrentValue((e.target.value)));
        }}
      />
    </Container>
  );
};

export default (QuestionGlobal);
