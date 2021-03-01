import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Surveys } from 'services/surveys/interfaces';
// import { formatDate } from 'util/datetime';

// import transformer, {
//   Response as Data,
// } from 'services/surveys/transformers/toSurveysList';
import routeMap from 'routes/route-map';

import {
  Container,
  MiniBox,
  // Button
} from './styles';

import { pluginApi } from '../../../services/api';

// import SearchOne from 'assets/images/cards/search-1.png';
// import SearchTwo from 'assets/images/cards/search-2.png';
// import SearchTree from 'assets/images/cards/search-3.png';
// import SearchFor from 'assets/images/cards/search-4.png';
// import SearchFive from 'assets/images/cards/search-5.png';
// import SearchSix from 'assets/images/cards/search-6.png';

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


// interface SurveysProps {
//   surveys: Surveys[];
//   className?: string;
// }

const CardList: React.FC = () => {
  // const [listID, setListId] = useState('')
  // const [data, setData] = useState<Data[]>([]);
  const [youropinion, setYourOpinion] = useState(
    new Array<SurveysData>(),
  );
  // const location = useLocation();
  // useEffect(() => {
  //   setData(transformer(surveys));
  // }, [surveys])

  useEffect(() => {
    async function fetchSurveys() {
      const response = await pluginApi.get('participants/surveys/');
      // console.log(response.data.available_surveys);
      setYourOpinion(response.data.available_surveys);
    }
    fetchSurveys();
  }, []);

  // useEffect(() => {
  //   const list_id = location.search.replace('?item=', '');
  //   if (list_id) {
  //     setListId(list_id);
  //   }
  // }, [location.search]);

  return (
    <Container>
      {youropinion &&
        youropinion.map(youropinion => (
          <MiniBox key={`key-cards-${youropinion.id}`}>
            <img src={youropinion.picture} alt={youropinion.title} />
            <h1>{youropinion.title}</h1>
            <span>{(` De ${youropinion.start_datetime} até ${youropinion.end_datetime}`)}</span>
            <p>{youropinion.description}</p>
            <Link to={`${routeMap.internal}?item=${youropinion.id}`} className="btn">Responder</Link>
          </MiniBox>
        ))}
    </Container>
  );
};

export default CardList;
