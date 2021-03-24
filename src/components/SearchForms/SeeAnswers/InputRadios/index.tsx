import React from 'react';
import {
  Container,
  RadioContent,
  InputGroup
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

const InputRadios: React.FC<Props> = ({ quetion, answers }) => {
  return (
    <Container>
      <RadioContent>
        <p>{quetion}</p>
        <InputGroup>
          {
            answers.map(answer => (
              <div>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.survey_question_id}`}
                    checked={answer.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
                {answer.answer}
              </div>
            ))
          }
        </InputGroup>
      </RadioContent>
    </Container>
  );
};

export default InputRadios;
