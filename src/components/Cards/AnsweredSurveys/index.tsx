import React, { useState, useEffect } from 'react';
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
            {/* <p>{(answered.description.replace("<p>", "").replace("</p>", "")) || 'Qual é o seu nível de interesse por produtos de beleza'}</p> */}
            {/* <h2>Vale 300 FMC Coins</h2> */}
            <h3>Respondida em : {formatDate(answered.modified, 'dd/MM/yyyy')} </h3>
            <Link to={`${routeMap.internal}?item=${answered.id}`} className="btn">Ver respostas</Link>
          </MiniBox>
        ))}
    </Container>
  );
};

export default Cards;
