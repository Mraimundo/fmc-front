import React from "react";

import {
  Container,
  RadioContent,
  RadioContentGroup
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
  id?: number;
}

const ButtonsSquareNumber: React.FC<props> = ({ quetion, answers, id }) => {

  return (
    <Container>
      <RadioContent>
        <p>{quetion}</p>
        <RadioContentGroup>
          <div>
            <label className="label1">Ótimo</label>
            <label >Bom</label>
            <label >Ruim</label>
          </div>
          {
            answers.map(answer => (
              <div key={answer.id}>
                <span>{answer.answer}</span>

                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Ótimo"
                    name={`${answer.answer}`}
                    checked={answer?.survey_participant_answers[0]?.answer === "Ótimo"
                      ? true : false
                    }
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Bom"
                    name={`${answer.answer}`}
                    checked={answer?.survey_participant_answers[0]?.answer === "Bom"
                      ? true : false
                    }
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    id={answer.answer}
                    value="Ruim"
                    name={`${answer.answer}`}
                    checked={answer?.survey_participant_answers[0]?.answer === "Ruim"
                      ? true : false
                    }
                  />
                </label>
              </div>
            ))
          }
        </RadioContentGroup>
      </RadioContent>
    </Container>
  );
}

export default ButtonsSquareNumber;