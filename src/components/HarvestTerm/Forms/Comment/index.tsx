import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import Button from 'components/shared/Button';
import * as Yup from 'yup';
import {
  FormContainer,
  Form,
  TextArea,
  TextAreaWrapper,
  ActionWrapper,
} from './styles';

interface FormData {
  comment: string;
}

const CommentForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const methods = useForm<FormData>({
    validationSchema: Yup.object().shape({
      comment: Yup.string().required('Digite um comentário'),
    }),
    mode: 'onSubmit',
    defaultValues: {
      comment: '',
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit(async ({ comment }) => {
    alert(comment);
    reset();
  });

  return (
    <>
      <FormContext {...methods}>
        <Form onSubmit={onSubmit}>
          <FormContainer>
            <TextAreaWrapper>
              <TextArea name="comment" inputRole="primary" label="Comentário" />
            </TextAreaWrapper>
            <ActionWrapper>
              <Button type="submit" buttonRole="primary" loading={loading}>
                Enviar
              </Button>
            </ActionWrapper>
          </FormContainer>
        </Form>
      </FormContext>
    </>
  );
};

export default CommentForm;
