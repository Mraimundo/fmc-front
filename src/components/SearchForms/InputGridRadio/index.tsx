// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { setValueAnswer } from '../../../state/modules/answer/actions';


// import {
//   Container,
//   InputContent,
//   InputGroupContent,
//   RadioContainer
// } from './styles';

// interface AnswersData {
//   id: number;
//   survey_question_id: number;
//   type: string;
//   scale_type: string;
//   answer: string;
// }

// interface props {
//   quetion: string;
//   answers: AnswersData[];
// }

// const ButtonsSquareNumber: React.FC<props> = ({ quetion, answers }) => {
//   const location = useLocation();
//   const dispatch = useDispatch()
//   const survey_question_id = location.search.replace('?item=', '');
//   console.log(answers)
//   return (
//     <Container>
//       <InputContent>
//         <p>{quetion}</p>
//         <InputGroupContent>
//           <div className="options">
//             <span></span>
//             <div>
//               <p>Ótimo</p>
//               <p>Bom</p>
//               <p>Ruim</p>
//             </div>
//           </div>

//           {
//             answers.map(answer => (
//               <RadioContainer key={answer.id}>
//                 <span>{answer.answer}</span>
//                 <div>
//                   <label htmlFor={answer.answer}>
//                     <input
//                       type="radio"
//                       id={answer.id.toString()}
//                       value={answer.answer}
//                       name={`${answer.survey_question_id}${answer.id}`}
//                       onChange={(e) => {
//                         dispatch(setValueAnswer({
//                           value: (e.target.value),
//                           id: Number(survey_question_id),
//                           answer_id: Number(answer.id),
//                         }));
//                       }}

//                     />
//                   </label>

//                   <label htmlFor={answer.answer}>
//                     <input
//                       type="radio"
//                       id={answer.id.toString()}
//                       value={answer.answer}
//                       name={`${answer.survey_question_id}${answer.id}`}
//                       onChange={(e) => {
//                         dispatch(setValueAnswer({
//                           value: (e.target.value),
//                           id: Number(survey_question_id),
//                           answer_id: Number(answer.id),
//                         }));
//                       }}
//                     />
//                   </label>

//                   <label htmlFor={answer.answer}>
//                     <input
//                       type="radio"
//                       id={answer.id.toString()}
//                       value={answer.answer}
//                       name={`${answer.survey_question_id}${answer.id}`}
//                     />
//                   </label>
//                 </div>
//               </RadioContainer>
//             ))
//           }
//         </InputGroupContent>
//       </InputContent>
//     </Container>
//   );
// };

// export default ButtonsSquareNumber;


import React from "react";
import Radio from "@material-ui/core/Radio";

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
const ButtonsSquareNumber: React.FC<props> = ({ quetion, answers }) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <p>{quetion}</p>
      {
        answers.map(answer => (
          <div key={answer.id}>
            <Radio
              checked={selectedValue === `a${answer.id}`}
              onChange={handleChange}
              value={`a${answer.id}`}
              // value={answer.answer}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `a${answer.id}` }}
              size="small"
            />
            <Radio
              checked={selectedValue === `b${answer.id}`}
              onChange={handleChange}
              value={`b${answer.id}`}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `b${answer.id}` }}
              size="small"
            />
            <Radio
              checked={selectedValue === `c${answer.id}`}
              onChange={handleChange}
              value={`c${answer.id}`}
              color="default"
              name="radio-button-demo"
              inputProps={{ "aria-label": `c${answer.id}` }}
              size="small"
            />
          </div>
        ))
      }
    </Container>
  );
}

export default ButtonsSquareNumber;