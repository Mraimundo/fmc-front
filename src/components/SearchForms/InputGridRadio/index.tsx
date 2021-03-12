import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueAnswer } from '../../../state/modules/answer/actions';


import {
  Container,
  InputContent,
  InputGroupContent,
  RadioContainer
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

const ButtonsSquareNumber: React.FC<props> = ({ quetion, answers }) => {
  const dispatch = useDispatch()
  return (
    <Container>
      <InputContent>
        <p>{quetion}</p>
        <InputGroupContent>
          <div className="options">
            <span></span>
            <div>
              <p>Ótimo</p>
              <p>Bom</p>
              <p>Ruim</p>
            </div>
          </div>

          {
            answers.map(answer => (
              <RadioContainer key={answer.id}>
                <span>{answer.answer}</span>
                <div>
                  <label htmlFor={answer.answer}>
                    <input
                      type="radio"
                      id={answer.answer}
                      value={answer.answer}
                      name={`${answer.survey_question_id}`}
                      onChange={(e) => {
                        dispatch(setValueAnswer(e.target.value))
                      }}
                    />
                  </label>

                  <label htmlFor={answer.answer}>
                    <input
                      type="radio"
                      id={answer.answer}
                      value={answer.answer}
                      name={`${answer.survey_question_id}`}
                      onChange={(e) => {
                        dispatch(setValueAnswer(e.target.value))
                      }}
                    />
                  </label>

                  <label htmlFor={answer.answer}>
                    <input
                      type="radio"
                      id={answer.answer}
                      value={answer.answer}
                      name={`${answer.survey_question_id}`}
                      onChange={(e) => {
                        dispatch(setValueAnswer(e.target.value))
                      }}
                    />
                  </label>
                </div>
              </RadioContainer>
            ))
          }
        </InputGroupContent>
      </InputContent>
    </Container>
  );
};

export default ButtonsSquareNumber;
