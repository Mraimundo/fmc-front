import React from 'react';
import { RegisterFormProvider, RegisterFormProps } from './Context';
import Form from './Form';

const RegisterCampaign: React.FC<RegisterFormProps> = ({
  initialValues,
  handleAction,
}) => {
  return (
    <RegisterFormProvider
      initialValues={initialValues}
      handleAction={handleAction}
    >
      <Form />
    </RegisterFormProvider>
  );
};

export default RegisterCampaign;
