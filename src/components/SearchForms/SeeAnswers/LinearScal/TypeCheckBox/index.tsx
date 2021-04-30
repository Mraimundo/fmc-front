import React from 'react';

import {
  Container,
  TypeCheckBoxContent,
  TypeCheckBoxContentGroup
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
      <TypeCheckBoxContent>
        <p>{quetion}</p>
        <TypeCheckBoxContentGroup>
          {
            answers.map(answer => (
              <div key={answer.id}>
                <span>{answer.answer}</span>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.survey_question_id}`}
                    checked={answer?.survey_participant_answers?.length > 0 && true}
                  />
                </label>
              </div>
            ))
          }
        </TypeCheckBoxContentGroup>
      </TypeCheckBoxContent>
    </Container>
  );
};

export default InputCheckBox;
