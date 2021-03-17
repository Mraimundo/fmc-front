import React from 'react';
import {
  Container,
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
      <p>{quetion}</p>
      <InputGroup>
        {
          answers.map(answer => (
            <label htmlFor={answer.answer} key={answer.id}>
              <input
                type="radio"
                id={answer.answer}
                value={answer.answer}
                name={`${answer.survey_question_id}`}
                checked={answer.survey_participant_answers.length > 0 ? true : false}
              />
              {answer.answer}
            </label>
          ))
        }
      </InputGroup>
    </Container>
  );
};

export default InputRadios;
