import React from 'react';

import { Container, MiniBox } from './styles';

interface Props {
  news: number[];
}

const Grid: React.FC<Props> = ({ news }) => {
  return (
    <Container>
      {news.map(item => (
        <MiniBox key={`key-${item}`}>
          <img src="" alt="" />
          <span>22/04/2020 Categoria</span>
          <h3>Titulo da notícia que pode ser bem grande lalalal alalala</h3>
          <p>
            Breve descrição da notícia que pode ser muito maior do que o título.
            Breve descrição da notícia que pode ser muito maior do que o título.
            Breve descrição da notícia que pode ser muito maior do que o título.
            Breve descrição da notícia que pode ser muito maior do que o título
          </p>
        </MiniBox>
      ))}
    </Container>
  );
};

export default Grid;
