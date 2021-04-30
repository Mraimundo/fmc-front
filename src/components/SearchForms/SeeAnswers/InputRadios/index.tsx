import React from 'react';

import {
  Container,
  RadioContent,
  InputGroup
} from './styles';

interface ParticipantProps {
  answer: string;
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  survey_participant_answers: ParticipantProps[];
  answer: string;
}

interface Props {
  quetion: string;
  answers: AnswersData[];
  id?: number;
}

const InputRadios: React.FC<Props> = ({ quetion, answers, id }) => {

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
                    checked={answer?.survey_participant_answers.length > 0 && true}
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
