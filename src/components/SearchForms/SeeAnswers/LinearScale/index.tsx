import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
  survey_participant_answers: ParticipantProps[];
  scale_type: string;
  answer: string;
}

interface props {
  quetion: string;
  answers: AnswersData[];
  id?: number | undefined,
}

const MultipleLinearScale: React.FC<props> = ({ quetion, answers }) => {
  let max = '';
  // eslint-disable-next-line
  answers.map((value, index, elements) => {
    // eslint-disable-next-line
    value.survey_participant_answers.map(participant => {
      if (Number(participant.answer)
        > Number(elements[index + 1]?.survey_participant_answers[0].answer)) {
        max = participant.answer;
      } else if (Number(participant.answer)
        < Number(elements[index + 1]?.survey_participant_answers[0].answer)) {
        max = elements[index + 1]?.survey_participant_answers[0].answer;
      } else if (Number(participant.answer)
        === Number(elements[index + 1]?.survey_participant_answers[0].answer)) {
        max = elements[index + 1]?.survey_participant_answers[0].answer;
      }
    })
  });

  return (
    <Container>
      <p>{quetion}</p>
      <div>
        {
          answers.map((answer, index, elements) => (
            <Box key={answer.id} component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">{answer.answer}</Typography>
              <Rating
                name={answer.id.toString()}
                value={index + 1 <= Number(max) ? 1 : null}
                max={1}
                size="large"
              />
            </Box>
          ))
        }
      </div>
    </Container>
  );
};

export default MultipleLinearScale;
