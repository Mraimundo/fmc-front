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
  scale_type: string;
  survey_participant_answers: ParticipantProps[];
  answer: string;
}

interface props {
  quetion: string;
  answers: AnswersData[];
  id?: number | undefined,
}

const MultipleLinearScale: React.FC<props> = ({ quetion, answers, id }) => {

  return (
    <Container>
      <p>{quetion}</p>
      {
        answers.map(answer => (
          <Box key={answer.id} component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{answer.answer}</Typography>
            <Rating
              name={answer.id.toString()}
              size="large"
              value={Number(answer?.survey_participant_answers[0].answer)}
            />
          </Box>
        ))
      }
    </Container>
  );
};

export default MultipleLinearScale;
