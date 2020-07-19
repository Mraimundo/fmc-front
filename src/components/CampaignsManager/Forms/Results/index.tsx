import React from 'react';
import { ResultsFormProvider } from './Context';
import Form from './Form';

const Results: React.FC = () => {
  return (
    <ResultsFormProvider>
      <Form />
    </ResultsFormProvider>
  );
};

export default Results;
