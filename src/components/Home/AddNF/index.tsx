import React from 'react';

import StatusTable from './StatusTable';
import Upload from './Upload';

import { AddNFContainer } from './styles';

const AddNF: React.FC = () => {
  return (
    <>
      <AddNFContainer>
        <div className="AddNFContainer__inner">
          <h1 className="AddNFContainer__title">
            Cadastre sua nota fiscal para ganhar pontos
          </h1>
          <div>
            <p>
              Clique no botão para enviar sua nota fiscal em formato JPG, PNG ou
              PDF. Em caso de JPG e PNG, certifique-se de que a imagem está
              nítida e legível.{' '}
            </p>
            <div className="AddNFContainer__right">
              <StatusTable />
              <Upload />
            </div>
          </div>
        </div>
      </AddNFContainer>
    </>
  );
};

export default AddNF;
