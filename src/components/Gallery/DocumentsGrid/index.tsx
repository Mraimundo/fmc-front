import React, { useState, useEffect } from 'react';
import { Media } from 'services/gallery/interfaces';
import transformer, {
  Response as Data,
} from 'services/gallery/transformers/toDocumentsList';

import { FiDownload } from 'react-icons/fi';
import { Container, MiniBox } from './styles';

interface Props {
  gallery: Media[];
}

const DocumentsGrid: React.FC<Props> = ({ gallery }) => {
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
              {item.title || 'Título não informaro'}
              {` (.${item.fileType})`}
            </h3>
            <span>{`${item.date}`} </span>
            <p>{item.description}</p>
          </div>
          <a href={item.download_url} download>
            <FiDownload size={28} />
          </a>
        </MiniBox>
      ))}
    </Container>
  );
};

export default DocumentsGrid;
