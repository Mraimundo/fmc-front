import React from 'react';

import {
  Container,
  CheckBoxContent,
  CheckBoxGroup
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

interface Props {
  quetion: string;
  answers: AnswersData[];
}

const InputCheckBox: React.FC<Props> = ({ quetion, answers }) => {
  return (
    <Container>
      <CheckBoxContent>
        <p>{quetion}</p>
        <CheckBoxGroup>
          {
            answers.map(answer => (
              <label htmlFor={answer.answer} key={answer.id}>
                <input
                  type="checkbox"
                  id={answer.answer}
                  value={answer.answer}
                  name={`${answer.survey_question_id}`}
                  checked={answer.survey_participant_answers ? true : false}
                />
                <span>{answer.answer}</span>
              </label>
            ))
          }
        </CheckBoxGroup>
      </CheckBoxContent>
    </Container>
  );
};

export default InputCheckBox;
