import React from 'react';

import {
  Container
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

const DropDownList: React.FC<Props> = ({ quetion, answers, id }) => {

  return (
    <Container>
      <p>{quetion}</p>
      <select name="droplist" id="droplist">
        {answers.map(item => (
          item.survey_participant_answers.length > 0 && (
            <option
              key={item.id}
              value={item.answer}
              selected={true}
            >
              {item.answer}
            </option>
          )
        ))}
      </select>
    </Container>
  );
};

export default DropDownList;
