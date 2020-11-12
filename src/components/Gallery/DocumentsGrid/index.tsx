import React, { useState, useEffect } from 'react';
import { Media } from 'services/gallery/interfaces';
import transformer, {
  Response as Data,
} from 'services/gallery/transformers/toDocumentsList';

import { ReactSVG } from 'react-svg';
import DownloadIcon from 'assets/images/indication/download.svg';
import { Container, MiniBox } from './styles';

interface Props {
  gallery: Media[];
  simulating: boolean;
}

const DocumentsGrid: React.FC<Props> = ({ gallery, simulating }) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(transformer(gallery));
  }, [gallery]);

  return (
    <Container>
      {data.map(item => (
        <MiniBox key={`key-news-${item.id}`}>
          <img src={item.coverPictureUrl} alt={item.title} />
          <div>
            <h3>
              {item.title || 'Título não informado'}
              {` (.${item.fileType})`}
            </h3>
            <span>{`${item.date}`} </span>
            <p>{item.description}</p>
          </div>
          {simulating ? (
            <span className="link">
              <ReactSVG src={DownloadIcon} />
            </span>
          ) : (
            <a href={item.download_url} download>
              <ReactSVG src={DownloadIcon} />
            </a>
          )}
        </MiniBox>
      ))}
    </Container>
  );
};

export default DocumentsGrid;
