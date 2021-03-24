import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

// import { pluginApi } from '../../services/api';

import {
  Container,
  InputControlScale,
  InputGroup

} from './styles';

interface IconsProps {
  classes: {
    picked: string,
    unpicked: string,
  }
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  icon_attributes: IconsProps;
  scale_type: string;
  answer: string;
}

interface props {
  quetion: string;
  answers: AnswersData[];
}

const LinearScale: React.FC<props> = ({ quetion, answers }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const survey_question_id = location.search.replace('?item=', '');
  const [pickedUp, setPickedUp] = useState("");

  return (
    <Container>
      <InputControlScale>
        <p>{quetion}</p>
        <InputGroup>
          {
            answers.map(answer => (
              <label
                htmlFor={answer.answer}
                key={answer.id}
                onClick={() => setPickedUp(answer.answer)}
              >

                {<div>
                  {answer.answer}
                  <i className={!pickedUp ? answer.icon_attributes.classes.unpicked
                    : answer.answer <= pickedUp ? answer.icon_attributes.classes.picked
                      : answer.icon_attributes.classes.unpicked}></i>
                </div>}

                < input
                  type="checkbox"
                  id={answer.answer}
                  name={`${answer.survey_question_id}ugkg`}
                  onChange={(e) => {
                    dispatch(setValueAnswer({
                      value: answer.id,
                      id: Number(survey_question_id),
                      answer_id: Number(answer.id),
                    }));
                  }}
                />
              </label>
            ))
          }
        </InputGroup>
      </InputControlScale>
    </Container>
  );
};

export default LinearScale;
