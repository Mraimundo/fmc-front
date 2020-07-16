import React from 'react';
import DownloadIcon from 'assets/images/indication/download.svg';
import { ReactSVG } from 'react-svg';
import { useTraining } from '../../Context';
import { Container } from './styles';

const Documents: React.FC = () => {
  const { training } = useTraining();

  return (
    <Container>
      <h3>Documentos</h3>
      {training?.documents.map(item => (
        <div key={`document-${item.id}`}>
          <img src={item.imageUrl} alt="Imagem do documento" />
          <a href={item.url} download>
            <ReactSVG src={DownloadIcon} />
          </a>
        </div>
      ))}
    </Container>
  );
};

export default Documents;
