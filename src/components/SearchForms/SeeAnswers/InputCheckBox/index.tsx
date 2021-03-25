import React from 'react';

import {
  Container,
  CheckBoxContent,
  CheckBoxGroup
} from './styles';

interface ParticipantProps {
  answer: string;
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  answer: string;
  survey_participant_answers: ParticipantProps[];
}

interface Props {
  quetion: string;
  answers: AnswersData[];
  id?: number | undefined,
}

const InputCheckBox: React.FC<Props> = ({ quetion, answers, id }) => {

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
                  checked={answer?.survey_participant_answers.length > 0 && true}
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
