import React, { useState, useEffect, useCallback } from 'react';
import Lightbox from 'react-image-lightbox';
import { Media } from 'services/gallery/interfaces';
import transformer, {
  Response as Data,
} from 'services/gallery/transformers/toImagesList';

import { Container, MiniBox } from './styles';

interface Props {
  gallery: Media[];
  simulating: boolean;
}

const ImagesGrid: React.FC<Props> = ({ gallery, simulating }) => {
  const [data, setData] = useState<Data[]>([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [pictureSelected, setPictureSelected] = useState('');

  useEffect(() => {
    setData(transformer(gallery));
  }, [gallery]);

  const handlePictureClick = useCallback(pictureUrl => {
    setPictureSelected(pictureUrl);
    setModalOpened(true);
  }, []);

  return (
    <Container>
      {data.map(item => (
        <MiniBox key={`key-news-${item.id}`}>
          <img
            src={item.url}
            alt={item.title}
            onClick={() => handlePictureClick(item.url)}
          />
          <span>{item.category.join(', ')} </span>
          <h3>{item.title || 'Título não informado'}</h3>
          <div>
            <span>{`Publicado em ${item.date}`} </span>
            {simulating ? (
              <span className="link">Download</span>
            ) : (
              <a href={item.download_url} download>
                Download
              </a>
            )}
          </div>
        </MiniBox>
      ))}
      {modalOpened && !!pictureSelected && (
        <Lightbox
          mainSrc={pictureSelected}
          onCloseRequest={() => setModalOpened(false)}
        />
      )}
    </Container>
  );
};

export default ImagesGrid;
