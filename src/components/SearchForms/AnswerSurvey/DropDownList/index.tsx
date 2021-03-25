import React from 'react';
import { useDispatch } from 'react-redux';

import { setValueAnswer } from '../../../../state/modules/answer/actions';

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
  id?: number | undefined,
}

const DropDownList: React.FC<Props> = ({ quetion, answers, id }) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <p>{quetion}</p>
      <select
        name="droplist"
        onChange={(e) => {
          const test = e.target.options;
          const answer_id = test[test.selectedIndex].id;

          dispatch(setValueAnswer({
            value: (e.target.value),
            id: Number(id),
            answer_id: Number(answer_id),
          }));
        }}
      >
        <option value="" hidden>Selecione uma opção</option>
        {answers.map(item => (
          <option
            key={item.answer}
            value={item.answer}
            id={String(item.id)}>{item.answer}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default DropDownList;
