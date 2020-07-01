import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { useToast } from 'context/ToastContext';

import { TextArea, Button } from 'components/shared';
import { FiUser, FiMessageCircle } from 'react-icons/fi';
import schema from './schemaValidation';

import { Container, SubjectSelect, CategorySelect } from './styles';

interface FormData {
  category: { title: string; value: string } | null;
  subject: { title: string; value: string } | null;
  message: string;
}

interface Props {
  className?: string;
}

const Form: React.FC<Props> = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async data => {
    console.log(data);
  });

  return (
    <FormContext {...methods}>
      <Container onSubmit={onSubmit} className={className}>
        <SubjectSelect name="subject" />
        <CategorySelect name="category" />
        <TextArea name="message" icon={FiMessageCircle} label="Mensagem" />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Enviar
        </Button>
      </Container>
    </FormContext>
  );
};

export default Form;
