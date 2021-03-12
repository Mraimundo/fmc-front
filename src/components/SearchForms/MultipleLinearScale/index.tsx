import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../state/modules/answer/actions';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';


// import { pluginApi } from '../../services/api';

import {
  Container,
  InputStarColumn,
  InputGroup,
  PickContainer,
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

  const [selectRating, setSelectRating] = React.useState<number | null>(null)

  return (
    <Container>
      <p>{quetion}</p>
      {
        answers.map(answer => (
          <Box key={answer.id} component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{answer.answer}</Typography>
            <Rating
              name={answer.id.toString()}
              // value={selectRating}
              onChange={(event, newValue) => {
                setSelectRating(newValue);
              }}
            />
          </Box>
        ))
      }
    </Container>
  );
};

export default MultipleLinearScale;
