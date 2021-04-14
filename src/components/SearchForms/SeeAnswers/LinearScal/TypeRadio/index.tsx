import React from 'react';

import {
  Container,
  TypeRadioContent,
  TypeRadioContentGroup
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
  id?: number | undefined,
}


const InputGridCheckBox: React.FC<Props> = ({ quetion, answers }) => {

  return (
    <Container>
      <TypeRadioContent>
        <p>{quetion}</p>
        <TypeRadioContentGroup>
          {
            answers.map(answer => (
              <div key={answer.id}>
                <span>{answer.answer}</span>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.survey_question_id}`}
                    checked={answer?.survey_participant_answers?.length > 0 && true}
                  />
                </label>
              </div>
            ))
          }
        </TypeRadioContentGroup>
      </TypeRadioContent>
    </Container>
  );
};

export default InputGridCheckBox;
