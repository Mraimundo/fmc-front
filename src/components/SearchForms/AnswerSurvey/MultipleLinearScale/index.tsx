import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setValueAnswer } from '../../../../state/modules/answer/actions';

import {
  Container,
  MultiLinearContent,
  Box
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



const MultipleLinearScale: React.FC<props> = ({ quetion, answers }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const survey_question_id = location.search.replace('?item=', '');
  // const [selectRating, setSelectRating] = React.useState<number | null>(null)
  const [pickedUp, setPickedUp] = useState("");

  return (
    <Container>
      <MultiLinearContent>
        <p>{quetion}</p>
        <Box>
          {
            answers.map(answer => (
              <section
                key={answer.id}
                onClick={() => setPickedUp(answer.answer)}
              >
                <span>{answer.answer}</span>
                <label htmlFor="">
                  <i className={!pickedUp ? answer.icon_attributes.classes.unpicked
                    : answer.answer <= pickedUp ? answer.icon_attributes.classes.picked
                      : answer.icon_attributes.classes.unpicked}></i>
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.answer}`}
                    onChange={(e) => {
                      dispatch(setValueAnswer({
                        value: (e.target.value),
                        id: Number(survey_question_id),
                        answer_id: Number(answer.id),
                      }));
                    }}
                  />
                </label>

                <label htmlFor="">
                  <i className={!pickedUp ? answer.icon_attributes.classes.unpicked
                    : answer.answer <= pickedUp ? answer.icon_attributes.classes.picked
                      : answer.icon_attributes.classes.unpicked}></i>
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.answer}`}
                    onChange={(e) => {
                      dispatch(setValueAnswer({
                        value: (e.target.value),
                        id: Number(survey_question_id),
                        answer_id: Number(answer.id),
                      }));
                    }}
                  />
                </label>

                <label htmlFor="">
                  <i className={!pickedUp ? answer.icon_attributes.classes.unpicked
                    : answer.answer <= pickedUp ? answer.icon_attributes.classes.picked
                      : answer.icon_attributes.classes.unpicked}></i>
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.answer}`}
                    onChange={(e) => {
                      dispatch(setValueAnswer({
                        value: (e.target.value),
                        id: Number(survey_question_id),
                        answer_id: Number(answer.id),
                      }));
                    }}
                  />
                </label>

                <label htmlFor="">
                  <i className={!pickedUp ? answer.icon_attributes.classes.unpicked
                    : answer.answer <= pickedUp ? answer.icon_attributes.classes.picked
                      : answer.icon_attributes.classes.unpicked}></i>
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value={answer.answer}
                    name={`${answer.answer}`}
                    onChange={(e) => {
                      dispatch(setValueAnswer({
                        value: (e.target.value),
                        id: Number(survey_question_id),
                        answer_id: Number(answer.id),
                      }));
                    }}
                  />
                </label>
              </section>
            ))
          }
        </Box>
      </MultiLinearContent>
    </Container>
  );
};

export default MultipleLinearScale;
