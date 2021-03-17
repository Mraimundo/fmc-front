import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import {
  Container,
  InputControlScale,
  InputGroup

} from './styles';

interface SurveyAnswer {
  id: number;
  answer: string;
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  survey_participant_answers: SurveyAnswer[];
  type: string;
  scale_type: string;
  answer: string;
}

interface props {
  quetion: string;
  answers: AnswersData[];
}

const LinearScale: React.FC<props> = ({ quetion, answers }) => {
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
                <div>
                  {answer.answer}
                  {pickedUp === "" ? <AiOutlineStar />
                    : answer.answer <= pickedUp ? <AiFillStar />
                      : <AiOutlineStar />
                  }
                </div>
                <input
                  type="checkbox"
                  id={answer.answer}
                  name={`${answer.survey_question_id}`}
                  checked={answer.survey_participant_answers.length > 0 ? true : false}
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
