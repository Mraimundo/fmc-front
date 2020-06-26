import React, { useState, useEffect } from 'react';
import { News } from 'services/news/interfaces';
import transformer, {
  Response as Data,
} from 'services/news/transformers/toNewsList';
import { Link } from 'react-router-dom';

import { Container, MiniBox } from './styles';

interface Props {
  news: News[];
}

const Grid: React.FC<Props> = ({ news }) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(transformer(news));
  }, [news]);

  return (
    <Container>
      {data.map(item => (
        <MiniBox key={`key-news-${item.id}`} to="#">
          <img src={item.pictureUrl} alt={item.title} />
          <span>{`${item.date} ${item.category}`} </span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </MiniBox>
      ))}
    </Container>
  );
};

export default Grid;
