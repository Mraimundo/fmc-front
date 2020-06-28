import React, { useState } from 'react';
import * as Yup from 'yup';

import { useForm, FormContext } from 'react-hook-form';
import { useToast } from 'context/ToastContext';

import { TextArea, Button } from 'components/shared';
import { FiMessageCircle } from 'react-icons/fi';

import { Container } from './styles';

interface FormData {
  message: string;
}

interface Props {
  sendMessage(message: string): Promise<void> | void;
}

const Form: React.FC<Props> = ({ sendMessage }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    message: Yup.string().required('Mensagem é obrigatória'),
  });

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    try {
      await sendMessage(data.message);
    } catch (e) {
      addToast({
        title: e.response?.data?.message || 'Falha ao enviar mensagem',
        type: 'error',
      });
    }
    setLoading(false);
  });

  return (
    <FormContext {...methods}>
      <Container onSubmit={onSubmit}>
        <TextArea name="message" icon={FiMessageCircle} label="Responder" />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Enviar
        </Button>
      </Container>
    </FormContext>
  );
};

export default Form;
