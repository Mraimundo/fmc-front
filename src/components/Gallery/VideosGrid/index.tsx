import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Media } from 'services/gallery/interfaces';
import transformer, {
  Response as Data,
} from 'services/gallery/transformers/toVideosList';

import { Container, MiniBox } from './styles';

interface Props {
  gallery: Media[];
}

const VideosGrid: React.FC<Props> = ({ gallery }) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(transformer(gallery));
  }, [gallery]);

  return (
    <Container>
      {data.map(item => (
        <MiniBox key={`key-news-${item.id}`}>
          <ReactPlayer url={item.url} className="video-player" controls />
          <h3>{item.title || 'Título não informardo'}</h3>
          <p>{item.description}</p>
          <span>{`Publicado em ${item.date}`} </span>
        </MiniBox>
      ))}
    </Container>
  );
};

export default VideosGrid;
