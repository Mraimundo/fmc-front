import React from 'react';
import { RegisterFormProvider } from './Context';
import Form from './Form';

const RegisterCampaign: React.FC = () => {
  return (
    <RegisterFormProvider>
      <Form />
    </RegisterFormProvider>
  );
};

export default RegisterCampaign;
