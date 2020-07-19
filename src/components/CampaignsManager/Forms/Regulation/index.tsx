import React from 'react';
import { RegulationFormProvider } from './Context';
import Form from './Form';

const Regulation: React.FC = () => {
  return (
    <RegulationFormProvider>
      <Form />
    </RegulationFormProvider>
  );
};

export default Regulation;
