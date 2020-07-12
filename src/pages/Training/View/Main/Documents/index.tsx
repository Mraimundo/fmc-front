import React from 'react';
import { FiDownload } from 'react-icons/fi';
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
            <FiDownload size={28} />
          </a>
        </div>
      ))}
    </Container>
  );
};

export default Documents;
