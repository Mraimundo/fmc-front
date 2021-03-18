import React from 'react';
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

  return (
    <Container>
      <InputControlScale>
        <p>{quetion}</p>
        <InputGroup>
          {
            answers.map((answer, index, elements) => (
              <label
                htmlFor={answer.answer}
                key={answer.id}
              >
                <div>
                  {answer.answer}
                  {answer.survey_participant_answers.length >= 0 && index + 1 < elements.length ?
                    <AiFillStar />
                    : <AiOutlineStar />
                  }
                </div>
                <input
                  type="checkbox"
                  id={answer.answer}
                  name={`${answer.survey_question_id}`}
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
