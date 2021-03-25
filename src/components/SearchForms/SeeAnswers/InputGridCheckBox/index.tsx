import React from 'react';

import {
  Container,
  GridCheckBoxContent,
  CheckBoxContentGroup
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
  id?: number | undefined,
}


const InputGridCheckBox: React.FC<Props> = ({ quetion, answers, id }) => {

  return (
    <Container>
      <GridCheckBoxContent>
        <p>{quetion}</p>
        <CheckBoxContentGroup>
          <div>
            <label className="label1">1</label>
            <label >2</label>
            <label >3</label>
            <label >4</label>
            <label >5</label>
          </div>
          {
            answers.map(answer => (
              <div key={answer.id}>
                <span>{answer.answer}</span>

                <label htmlFor="">
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value="1"
                    name={`${answer.survey_question_id}`}
                    checked={answer?.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value="2"
                    name={`${answer.survey_question_id}`}
                    checked={answer?.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value="3"
                    name={`${answer.survey_question_id}`}
                    checked={answer?.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value="4"
                    name={`${answer.survey_question_id}`}
                    checked={answer?.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    id={answer.answer}
                    value="5"
                    name={`${answer.survey_question_id}`}
                    checked={answer?.survey_participant_answers.length > 0 ? true : false}
                  />
                </label>
              </div>
            ))
          }
        </CheckBoxContentGroup>
      </GridCheckBoxContent>
    </Container>
  );
};

export default InputGridCheckBox;
