import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setValueAnswer } from '../../../state/modules/answer/actions';

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
}

interface Props {
  quetion: string;
  answers: AnswersData[];
}

const DropDownList: React.FC<Props> = ({ quetion, answers }) => {
  return (
    <Container>
      <p>{quetion}</p>
      <select name="droplist" id="droplist">
        <option value="" hidden>Selecione uma opção</option>
        {answers.map(item => (
          <option key={item.id} value={item.answer}>{item.answer}</option>
        )
        )}
      </select>
    </Container>
  );
};

export default DropDownList;
