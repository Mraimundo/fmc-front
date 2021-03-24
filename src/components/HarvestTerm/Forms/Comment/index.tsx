import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import Button from 'components/shared/Button';
import * as Yup from 'yup';
import { addComment } from 'services/harvest-term/comments';
import { useToast } from 'context/ToastContext';
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

interface CommentFormProps {
  agreementTermId: string;
  onConfirmComment?: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  agreementTermId,
  onConfirmComment,
}) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

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
    try {
      setLoading(true);
      await addComment({ commentId: parseInt(agreementTermId, 10), comment });
      reset();

      if (onConfirmComment) onConfirmComment();
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message || 'Não foi possível adicionar comentário',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <FormContext {...methods}>
        <Form onSubmit={onSubmit}>
          <FormContainer>
            <TextAreaWrapper>
              <TextArea
                name="comment"
                inputRole="primary"
                label="Nova Mensagem"
              />
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
