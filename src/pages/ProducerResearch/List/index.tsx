import React, { useState, useEffect, useCallback } from 'react';
import { Container, CardHeader, CardContentHeader, CardContentFooter } from './styles';

import getSurveys from 'services/surveys/getSurveysList';
// import { Surveys as ISurveys } from 'services/surveys/interfaces';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
// import { pluginApi } from '../../../services/api';

// import YourOpinion from '../../components/Cards/YourOpinion';
// import Answered from '../../components/Cards/AnsweredSurveys';

import YourOpinion from 'components/Cards/YourOpinion';
import { Button } from 'components/shared';

import Answered from 'components/Cards/AnsweredSurveys';

import ImageSearch from 'assets/images/cards/search.svg';

const ProducerResearch: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);

  useEffect(() => {
    getSurveys({ page: 1 }).then(data => {
      setPagination(data.pagination);
    })
  }, []);

  const handleLoadMore = useCallback(() => {
    if (pagination.current_page === pagination.last_page) return;
    getSurveys({ page: pagination.current_page + 1 }).then(data => {
      setPagination(data.pagination);
      // getSurveys([...surveys, ...data.surveys]);
    })
  }, [pagination]);

  return (
    <Container>
      <h1>Pesquisas</h1>
      <CardHeader>
        <div>
          <p>Ao conhecer a sua opinião sobre diferentes assuntos, queremos fortalecer
          o nosso relacionamento, aprimorar o programa e entregar a você sempre as melhores
          soluções. Participe!
            </p>
        </div>
        <img src={ImageSearch} alt="Search" />
      </CardHeader>
      <CardContentHeader>
        <h2>Sua opinião vale muito</h2>
        <YourOpinion />
        {pagination.current_page !== pagination.last_page && (
          <Button buttonRole="primary" type="button" onClick={handleLoadMore}>
            Carregar mais pesquisas
          </Button>
        )}
      </CardContentHeader>
      <CardContentFooter>
        <h2>Pesquisas Respondidas</h2>
        <Answered />
        {pagination.current_page !== pagination.last_page && (
          <Button buttonRole="primary" type="button" onClick={handleLoadMore}>
            Carregar mais pesquisas
          </Button>
        )}
      </CardContentFooter>
    </Container>
  );
};

export default ProducerResearch;
