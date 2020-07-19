import React from 'react';
import { FinishFormProvider } from './Context';
import Form from './Form';

const Finish: React.FC = () => {
  return (
    <FinishFormProvider>
      <Form />
    </FinishFormProvider>
  );
};

export default Finish;
