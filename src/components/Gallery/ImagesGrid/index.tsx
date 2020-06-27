import React, { useState, useEffect } from 'react';
import { Media } from 'services/gallery/interfaces';
import transformer, {
  Response as Data,
} from 'services/gallery/transformers/toImagesList';

import { Container, MiniBox } from './styles';

interface Props {
  gallery: Media[];
}

const ImagesGrid: React.FC<Props> = ({ gallery }) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(transformer(gallery));
  }, [gallery]);

  return (
    <Container>
      {data.map(item => (
        <MiniBox key={`key-news-${item.id}`}>
          <img src={item.url} alt={item.title} />
          <span>{item.category.join(', ')} </span>
          <h3>{item.title || 'Título não informard'}</h3>
          <div>
            <span>{`Publicado em ${item.date}`} </span>
            <a href={item.url} download target="_blank" rel="noreferrer">
              Download
            </a>
          </div>
        </MiniBox>
      ))}
    </Container>
  );
};

export default ImagesGrid;
