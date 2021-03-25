import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Surveys } from 'services/surveys/interfaces';
import { formatDate } from 'util/datetime';
// import { isWithinInterval, parseISO, isAfter, isBefore } from 'date-fns';

import routeMap from 'routes/route-map';

import {
  Container,
  MiniBox,
} from './styles';

interface PointsData {
  created: string,
  start_datetime: string,
  end_datetime: string,
  id: number,
  points_count: string,
  questions_count: string,
}

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
  points: PointsData[];
  className?: string;
}

const CardList: React.FC = () => {
  const [youropinion, setYourOpinion] = useState(
    new Array<SurveysData>(),
  );


  useEffect(() => {
    async function fetchSurveys() {
      const token = localStorage.getItem('@Vendavall:token');
      const response = await axios.get('https://juntosfmc-adm.vendavall.com.br/juntos-fmc/api/v1/participants/surveys', {
        headers: {
          Authorization: token,
        },
      });
      setYourOpinion(response.data.available_surveys);
    }
    fetchSurveys();
  }, []);

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
            <p dangerouslySetInnerHTML={{ __html: youropinion.description }}></p>

            {
              youropinion.points[0] ? (
                <h2>Vale {(youropinion.points[0] && youropinion.points[0].points_count)} Coins</h2>
              ) : null
            }

            {/* <h2>
              {(youropinion.points[0] && (Date.parse(youropinion.points[0].start_datetime) <= Date.now()
                || Date.parse(youropinion.points[0].end_datetime) <= Date.now() && youropinion.points[0].points_count
              ))}
            </h2> */}
            <Link to={`${routeMap.InternalPage.questions}?item=${youropinion.id}`} className="btn">Responder</Link>
          </MiniBox>
        ))}
    </Container>
  );
};

export default CardList;
