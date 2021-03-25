import React from 'react';

import {
  Container,
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

const QuestionGlobal: React.FC<Props> = ({ quetion, answers, id }) => {

  return (
    <Container inputType="time">
      <p>{quetion}</p>
      {
        answers.map(answer => (
          <input
            key={answer.id}
            type="time"
            value={answer?.survey_participant_answers[0].answer}
            disabled
          />
        ))
      }
    </Container>
  );
};

export default (QuestionGlobal);
