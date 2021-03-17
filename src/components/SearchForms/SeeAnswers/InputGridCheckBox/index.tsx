import React from 'react';

import {
  Container,
  GridCheckBoxContent,
  CheckBoxContentGroup
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


const InputGridCheckBox: React.FC<Props> = ({ quetion, answers }) => {
  return (
    <Container>
      <GridCheckBoxContent>
        <p>{quetion}</p>
        <CheckBoxContentGroup>
          <div>
            {
              answers.map(answer => (
                <label htmlFor={answer.answer} key={answer.id}>
                  <span>{answer.answer}</span>
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.survey_question_id}`}
                    checked={answer.survey_participant_answers.length > 0 ? true : false}
                  />
                  {answer.answer}
                </label>
              ))
            }
          </div>
        </CheckBoxContentGroup>
      </GridCheckBoxContent>
    </Container>
  );
};

export default InputGridCheckBox;
