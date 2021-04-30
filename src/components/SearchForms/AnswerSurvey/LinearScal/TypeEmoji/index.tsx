import React, { useState } from 'react';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../../../state/modules/answer/actions';

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
  id?: number | undefined,
}

const customIcons: { [index: string]: { icon: React.ReactElement; label: string; } } = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const CustomizedRating: React.FC<props> = ({ quetion, answers, id }) => {
  const dispatch = useDispatch();
  const [currentAnswer, setCurrentAnswer] = useState(0);

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
                defaultValue={0}
                getLabelText={(value: number) => customIcons[value].label}
                IconContainerComponent={IconContainer}
                max={1}
                size="large"
                onMouseOver={() => setCurrentAnswer(index + 1)}
                onClick={() => {
                  setCurrentAnswer(index + 1);
                  dispatch(setValueAnswer({
                    value: index + 1,
                    id: Number(id),
                    answer_id: Number(answer.id),
                  }));
                }}
                value={index < currentAnswer ? 1 : null}
              />
            </Box>
          ))
        }
      </div>
    </Container>
  );
};

export default CustomizedRating;
