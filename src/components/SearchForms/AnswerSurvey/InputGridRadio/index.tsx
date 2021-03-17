import React from "react";
import Radio from "@material-ui/core/Radio";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

import {
  Container,
} from './styles';


interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  answer: string;
}

interface props {
  quetion: string;
  answers: AnswersData[];
}
const ButtonsSquareNumber: React.FC<props> = ({ quetion, answers }) => {
  const location = useLocation();
  const dispatch = useDispatch()
  const survey_question_id = location.search.replace('?item=', '');

  return (
    <Container>
      <p>{quetion}</p>
      {
        answers.map(answer => (
          <div key={answer.id}>
            {answer.answer}
            <Radio
              value={`a${answer.id}`}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `a${answer.id}` }}
              size="small"
              onChange={(e) => {
                dispatch(setValueAnswer({
                  value: (e.target.value),
                  id: Number(survey_question_id),
                  answer_id: Number(answer.id),
                }));
              }}
            />
            <Radio
              value={`b${answer.id}`}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `b${answer.id}` }}
              size="small"
              onChange={(e) => {
                dispatch(setValueAnswer({
                  value: (e.target.value),
                  id: Number(survey_question_id),
                  answer_id: Number(answer.id),
                }));
              }}
            />
            <Radio
              value={`c${answer.id}`}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `c${answer.id}` }}
              size="small"
              onChange={(e) => {
                dispatch(setValueAnswer({
                  value: (e.target.value),
                  id: Number(survey_question_id),
                  answer_id: Number(answer.id),
                }));
              }}
            />
          </div>
        ))
      }
    </Container>
  );
}

export default ButtonsSquareNumber;