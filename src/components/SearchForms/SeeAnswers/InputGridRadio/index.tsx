import React from "react";
import Radio from "@material-ui/core/Radio";

import {
  Container,
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
              checked={answer.survey_participant_answers.length > 0 ? true : false}
            />
            <Radio
              value={`b${answer.id}`}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `b${answer.id}` }}
              size="small"
              checked={answer.survey_participant_answers.length > 0 ? true : false}
            />
            <Radio
              value={`c${answer.id}`}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `c${answer.id}` }}
              size="small"
              checked={answer.survey_participant_answers.length > 0 ? true : false}
            />
          </div>
        ))
      }
    </Container>
  );
}

export default ButtonsSquareNumber;