import React from 'react';
import { ComunicationFormProvider } from './Context';
import Form from './Form';

const Comunication: React.FC = () => {
  return (
    <ComunicationFormProvider>
      <Form />
    </ComunicationFormProvider>
  );
};

export default Comunication;
