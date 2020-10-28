import React from 'react';

import { Input, Subtitle } from './styles';

const Step2: React.FC = () => {
  const inputRole = 'secondary';
  return (
    <>
      <Subtitle>
        *Somente para produtores que realizam compras usando mais de um
        CPF/CNPJ.
      </Subtitle>
      <Input
        name="producer_group_name"
        label="Nome do grupo do produtor"
        inputRole={inputRole}
      />
    </>
  );
};

export default Step2;
