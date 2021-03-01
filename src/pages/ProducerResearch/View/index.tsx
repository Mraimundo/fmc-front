import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { useParams } from 'react-router-dom';
import getSurveysById from 'services/surveys/getSurveysById';
import getLastSurveys from 'services/surveys/getLastSurveysList';
import history from 'services/history';
import getSurveys from 'services/surveys/getSurveysList';
import { Surveys as ISurveys } from 'services/surveys/interfaces';
import Surveys from 'components/Cards/View'
import Answered from 'components/Cards/AnsweredSurveys';
import { Button } from 'components/shared';

import routeMap from 'routes/route-map';

import { Container, Content, Separator, Grid } from './styles';

interface Params {
  id: string;
}

// import ImageSearch from 'assets/images/cards/search.svg';
// import listContacts from 'services/contact/connected/listContacts';

const View: React.FC = () => {
  const params = useParams<Params>();
  const [surveys, setSurveys] = useState<ISurveys | null>(null);
  const [lastSurveys, setLatSurveys] = useState<ISurveys[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    if (!params.id) return;
    const load = async () => {
      getLastSurveys(parseInt(params.id, 0)).then(list => setLatSurveys(list));
      try {
        const data = await getSurveysById(parseInt(params.id, 0));
        setSurveys(data);
        window.scrollTo({
          top: 0,
        });
      } catch {
        addToast({
          title: 'Falha ao carregar as pesquisas solicitada',
          type: 'error',
        });
        history.push(routeMap.news);
      }
    };
    load();

  }, [params, addToast]);

  const handleBack = useCallback(() => {
    history.push(routeMap.news);
  }, []);

  return (
    <Container>
      <Content>
        {surveys && <Surveys surveys={surveys} />}
        <Separator />
        <h4>Perguntas</h4>
        <Grid />
        {/* <Grid surveys={lastSurveys} /> */}
        <Button buttonRole="primary" type="button" onClick={handleBack}>
          Carregar mais pesquisas
          </Button>
      </Content>
    </Container>
  );
};

export default View;
