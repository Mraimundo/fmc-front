import React, { useState, useEffect } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { useToast } from 'context/ToastContext';
import { CreateTicketDTO } from 'services/contact/connected/dtos/index';

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
  openTicket(data: CreateTicketDTO): Promise<{ message: string }>;
}

const Form: React.FC<Props> = ({ className, openTicket }) => {
  const [loading, setLoading] = useState(false);
  const [subjectId, setSubjectId] = useState(0);
  const { addToast } = useToast();

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit, watch, setValue, reset } = methods;
  const onSubmit = handleSubmit(async data => {
    try {
      setLoading(true);
      const { message } = await openTicket({
        categoryId: parseInt(data.category?.value || '0', 0),
        fileUrl: '',
        message: data.message,
        subjectId: parseInt(data.subject?.value || '0', 0),
      });
      addToast({
        title: message,
        type: 'success',
      });
      reset();
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao ao abir chamado. Por favor tente novamente',
        type: 'error',
      });
    }
    setLoading(false);
  });

  const subject = watch('subject');
  useEffect(() => {
    setValue('category', null);
    if (subject?.value) {
      setSubjectId(parseInt(subject.value, 0));
    }
  }, [subject, setValue]);

  return (
    <FormContext {...methods}>
      <Container onSubmit={onSubmit} className={className}>
        <SubjectSelect name="subject" />
        <CategorySelect name="category" subjectId={subjectId} />
        <TextArea name="message" icon={FiMessageCircle} label="Mensagem" />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Enviar
        </Button>
      </Container>
    </FormContext>
  );
};

export default Form;
