import React from 'react';
import downloadIcon from 'assets/images/indication/download.svg';
import docIcon from 'assets/images/training/doc-icon.png';
import { ReactSVG } from 'react-svg';
import { useTraining } from '../../Context';
import { Container, Separator } from './styles';

const Documents: React.FC = () => {
  const { training } = useTraining();

  return (
    <>
      {training?.documents && training?.documents.length > 0 && (
        <>
          <Container>
            <h3>Documentos</h3>
            {training.documents.map(item => (
              <div key={`document-${item.id}`}>
                <img src={docIcon} alt="Imagem do documento" />
                <a href={item.url} download>
                  <ReactSVG src={downloadIcon} />
                </a>
              </div>
            ))}
          </Container>
          <Separator />
        </>
      )}
    </>
  );
};

export default Documents;
