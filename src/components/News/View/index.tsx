import React, { useState, useEffect } from 'react';
import parser from 'html-react-parser';
import transformer, {
  Response as Data,
} from 'services/news/transformers/toNewsView';
import { News } from 'services/news/interfaces';

import { Container } from './styles';

interface Props {
  news: News;
}

const View: React.FC<Props> = ({ news }) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    setData(transformer(news));
  }, [news]);

  return (
    data && (
      <Container>
        <h4>Notícias</h4>
        <h3>{data.title}</h3>
        <span>{`${data.date} ${data.category}`}</span>
        {parser(data.body || '')}
      </Container>
    )
  );
};

export default View;
