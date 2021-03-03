import React, { useState, useEffect } from 'react';
import parser from 'html-react-parser';
import transformer, {
  Response as Data,
} from 'services/news/transformers/toNewsView';
import { Surveys } from 'services/surveys/interfaces';

import { Container, Content } from './styles';

interface Props {
  surveys: Surveys;
}

const View: React.FC<Props> = ({ surveys }) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    setData(transformer(surveys));
  }, [surveys]);

  return (
    data && (
      <Container>
        <h4>Pesquisas</h4>
        <h3>{data.title}</h3>
        <span>{`${data.date} ${data.category}`}</span>
        <p>{data.summary}</p>
        <Content>{parser(data.body || '')}</Content>
      </Container>
    )
  );
};

export default View;
