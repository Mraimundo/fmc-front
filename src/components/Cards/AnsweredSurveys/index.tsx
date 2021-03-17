import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import routeMap from 'routes/route-map';
import { formatDate } from 'util/datetime';

import { Surveys } from 'services/surveys/interfaces';

import { pluginApi } from '../../../services/api';

import {
  Container,
  MiniBox
} from './styles';

interface SurveysData {
  id: number;
  title: string;
  description: string;
  picture: string;
  answer_required: boolean;
  show_answer: boolean;
  start_datetime: string;
  end_datetime: string;
  modified: string,
  available_surveys: Surveys[];
  survey_questions: SurveysQuestion[];
}

interface SurveysQuestion {
  question: string;
  description: string;
  modified: string;
}

const Cards: React.FC = () => {
  const [answered, setAnsWered] = useState(
    new Array<SurveysData>(),
  );

  // const [seeAnswers, setSeeAnswers] = useState(
  //   new Array<SurveysData>(),
  // );
  // const location = useLocation();

  useEffect(() => {
    async function fetchSurveys() {
      const response = await pluginApi.get('participants/surveys/closed');
      setAnsWered(response.data.data);
    }
    fetchSurveys();
  }, []);

  return (
    <Container>
      {answered &&
        answered.map(answered => (
          <MiniBox key={`key-cards-${answered.id}`}>
            <img src={answered.picture} alt={answered.title} />
            <h1>{answered.title}</h1>
            <span>
              {(` De ${formatDate(answered.start_datetime, 'dd/MM/yyyy')}
                até 
               ${formatDate(answered.end_datetime, 'dd/MM/yyyy')}
              `)}
            </span>
            <p dangerouslySetInnerHTML={{ __html: answered.description }}></p>
            <h3>Respondida em : {formatDate(answered.modified, 'dd/MM/yyyy')} </h3>
            <Link to={`${routeMap.InternalPage.answers}?item=${answered.id}`} className="btn">Ver respostas</Link>
          </MiniBox>
        ))}
    </Container>
  );
};

export default Cards;
