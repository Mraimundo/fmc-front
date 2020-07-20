import React from 'react';
import { ConfigurationFormProvider } from './Context';
import Form from './Form';

const Configuration: React.FC = () => {
  return (
    <ConfigurationFormProvider>
      <Form />
    </ConfigurationFormProvider>
  );
};

export default Configuration;
