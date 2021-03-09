import React from 'react';

// import { pluginApi } from '../../services/api';

import {
  Container,

} from './styles';

interface Props {
  quetion: string;
  type: string;
}

const QuestionGlobal: React.FC<Props> = ({ quetion, type }) => {

  return (
    <Container inputType={type}>
      <p>{quetion}</p>
      <input
        type={type}
      // style={type == "text" ? { width: "300px;" } : { width: "174px;" }}
      />
    </Container>
  );
};

export default QuestionGlobal;
