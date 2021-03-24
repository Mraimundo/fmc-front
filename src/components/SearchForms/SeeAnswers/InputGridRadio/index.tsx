import React from "react";

import {
  Container,
  RadioContent,
  RadioContentGroup
} from './styles';

interface SurveyAnswer {
  id: number;
  answer: string;
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  survey_participant_answers: SurveyAnswer[];
  type: string;
  scale_type: string;
  answer: string;
}

interface props {
  quetion: string;
  answers: AnswersData[];
}
const ButtonsSquareNumber: React.FC<props> = ({ quetion, answers }) => {

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
                    checked={answer.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Bom"
                    name={`${answer.answer}`}
                    checked={answer.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Ruim"
                    name={`${answer.answer}`}
                    checked={answer.survey_participant_answers.length > 0 ? true : false}
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