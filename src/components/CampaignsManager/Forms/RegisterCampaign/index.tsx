import React from 'react';
import { RegisterFormProvider, RegisterFormProps } from './Context';
import Form from './Form';

const RegisterCampaign: React.FC<RegisterFormProps> = ({ initialValues }) => {
  return (
    <RegisterFormProvider
      initialValues={initialValues}
      handleAction={async () => {
        console.log('oi');
      }}
    >
      <Form />
    </RegisterFormProvider>
  );
};

export default RegisterCampaign;
