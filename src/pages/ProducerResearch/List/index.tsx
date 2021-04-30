import React from 'react';
import {
  Container,
  CardHeader,
  CardContentHeader,
  CardContentFooter
}
  from './styles';


import YourOpinion from 'components/Cards/YourOpinion';
// import { Button } from 'components/shared';
import Answered from 'components/Cards/AnsweredSurveys';
import ImageSearch from 'assets/images/cards/search.svg';

const ProducerResearch: React.FC = () => {
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
      </CardContentHeader>
      <CardContentFooter>
        <h2>Pesquisas Respondidas</h2>
        <Answered />
      </CardContentFooter>
    </Container>
  );
};

export default ProducerResearch;
