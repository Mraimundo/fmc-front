import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Surveys } from 'services/surveys/interfaces';
import { formatDate } from 'util/datetime';

import routeMap from 'routes/route-map';

import {
  Container,
  MiniBox,
  // Button
} from './styles';

// import { pluginApi } from '../../../services/api';

interface SurveysData {
  id: number,
  title: string,
  description: string,
  picture: string,
  status: string,
  is_public: boolean,
  answer_required: boolean,
  show_answer: boolean,
  start_datetime: string,
  end_datetime: string,
  modified: string,
  created: string,
  allow_change_answer: boolean,
  banner_picture: string,
  available_surveys: Surveys[];
  className?: string;
}

const CardList: React.FC = () => {
  const [youropinion, setYourOpinion] = useState(
    new Array<SurveysData>(),
  );

  const token = localStorage.getItem('@Vendavall:token');

  const config = {
    headers: {
      Authorization: token,
      Accept: 'application/json'
    }
  }

  useEffect(() => {
    async function fetchSurveys() {
      const response = await axios.get('https://juntosfmc-adm.vendavall.com.br/juntos-fmc/api/v1/participants/surveys', config);
      setYourOpinion(response.data.available_surveys);
    }
    fetchSurveys();
  }, [config]);

  return (
    <Container>
      {youropinion &&
        youropinion.map(youropinion => (
          <MiniBox key={`key-cards-${youropinion.id}`}>
            <img src={youropinion.picture} alt={youropinion.title} />
            <h1>{youropinion.title}</h1>
            <span>
              {(` De ${formatDate(youropinion.start_datetime, 'dd/MM/yyyy')}
               até 
               ${formatDate(youropinion.end_datetime, 'dd/MM/yyyy')}
              `)}
            </span>
            <p>{youropinion.description}</p>
            <Link to={`${routeMap.internal}?item=${youropinion.id}`} className="btn">Responder</Link>
          </MiniBox>
        ))}
    </Container>
  );
};

export default CardList;
