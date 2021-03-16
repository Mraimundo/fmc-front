import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setValueAnswer } from '../../../state/modules/answer/actions';

import {
  Container,
} from './styles';

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  answer: string;
}

interface props {
  quetion: string;
  answers: AnswersData[];
}



const MultipleLinearScale: React.FC<props> = ({ quetion, answers }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const survey_question_id = location.search.replace('?item=', '');
  // const [selectRating, setSelectRating] = React.useState<number | null>(null)
  return (
    <Container>
      <p>{quetion}</p>
      {
        answers.map(answer => (
          <Box key={answer.id} component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{answer.answer}</Typography>
            <Rating
              name={answer.id.toString()}
              onChange={(e, newValue) => {
                dispatch(setValueAnswer({
                  value: newValue,
                  id: Number(survey_question_id),
                  answer_id: Number(answer.id),
                }));
              }}
            />
          </Box>
        ))
      }
    </Container>
  );
};

export default MultipleLinearScale;
