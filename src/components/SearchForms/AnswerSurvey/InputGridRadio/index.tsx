import React from "react";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

import {
  Container,
  RadioContent,
  RadioContentGroup
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
      <RadioContent>
        <p>{quetion}</p>
        <RadioContentGroup>
          <div>
            <label className="label1">Ótimo</label>
            <label >Bom</label>
            <label >Ruim</label>
          </div>
          {
            answers.map(answer => (
              <div>
                <span>{answer.answer}</span>

                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Ótimo"
                    name={`${answer.answer}`}
                    onChange={(e) => {
                      dispatch(setValueAnswer({
                        value: (e.target.value),
                        id: Number(survey_question_id),
                        answer_id: Number(answer.id),
                      }));
                    }}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Bom"
                    name={`${answer.answer}`}
                    onChange={(e) => {
                      dispatch(setValueAnswer({
                        value: (e.target.value),
                        id: Number(survey_question_id),
                        answer_id: Number(answer.id),
                      }));
                    }}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Ruim"
                    name={`${answer.answer}`}
                    onChange={(e) => {
                      dispatch(setValueAnswer({
                        value: (e.target.value),
                        id: Number(survey_question_id),
                        answer_id: Number(answer.id),
                      }));
                    }}
                  />
                </label>
              </div>
            ))
          }
        </RadioContentGroup>
      </RadioContent>
    </Container>
  );
}

export default ButtonsSquareNumber;