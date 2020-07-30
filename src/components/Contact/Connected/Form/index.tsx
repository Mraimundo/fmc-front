import React, { useState, useEffect, useCallback, useRef } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { useToast } from 'context/ToastContext';
import { CreateTicketDTO } from 'services/contact/connected/dtos/index';
import uploadFileToStorage from 'services/storage/sendFile';

import { TextArea, Button } from 'components/shared';
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
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [subjectId, setSubjectId] = useState(0);
  const { addToast } = useToast();

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        const isFileTooLarge = e.target.files[0].size / 1024 > 4096;
        if (isFileTooLarge) {
          addToast({
            title: 'Arquivo excede o tamanho máximo de 4mb!',
            type: 'error',
          });
          return;
        }

        setAttachingFile(true);
        const { url } = await uploadFileToStorage(e.target.files[0], 'avatar');
        setFileUrl(url);
        setAttachingFile(false);
      }
    },
    [addToast],
  );

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: {
      category: null,
      subject: null,
      message: '',
    },
  });

  const { handleSubmit, watch, setValue, reset } = methods;
  const onSubmit = handleSubmit(async data => {
    try {
      setLoading(true);
      const { message } = await openTicket({
        categoryId: parseInt(data.category?.value || '0', 0),
        fileUrl,
        message: data.message,
        subjectId: parseInt(data.subject?.value || '0', 0),
      });
      addToast({
        title: message,
        type: 'success',
      });
      reset();
      setFileUrl('');
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
        <TextArea name="message" label="Mensagem" inputRole="secondary" />

        <label htmlFor="fileId">
          <input
            type="file"
            id="fileId"
            accept="image/*, .pdf"
            onChange={handleAttachFile}
            ref={inputFileRef}
          />
          <button
            type="button"
            onClick={() => {
              inputFileRef.current?.click();
            }}
          >
            {fileUrl !== '' ? (
              <>Arquivo anexado</>
            ) : (
              <>{attachingFile ? 'Carregando ... ' : 'Anexar arquivo'}</>
            )}
          </button>
        </label>

        <Button type="submit" buttonRole="primary" loading={loading}>
          Enviar
        </Button>
      </Container>
    </FormContext>
  );
};

export default Form;
