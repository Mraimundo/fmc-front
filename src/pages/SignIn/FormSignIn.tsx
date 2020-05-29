import React from 'react';

import * as Yup from 'yup';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';

import { useForm, FormContext } from 'react-hook-form';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import Password from 'components/shared/PasswordInput';

import { FiMail, FiLock } from 'react-icons/fi';

interface SignInFormData {
  email: string;
  password: string;
}

const FormSignIn: React.FC = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().required('Mínimo de 6 caracteres'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const methods = useForm<SignInFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onBlur',
    defaultValues: initialValues,
  });
  const { handleSubmit } = methods;

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <Input name="email" type="text" icon={FiMail} />
        <Password name="password" icon={FiLock} />
        <Button type="submit" buttonRole="primary">
          Entrar
        </Button>
      </form>
    </FormContext>
  );
};

export default FormSignIn;
