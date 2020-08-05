import React, { useState, useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { SendMessageDTO } from 'services/contact/connected/dtos';
import uploadFileToStorage from 'services/storage/sendFile';

import { useForm, FormContext } from 'react-hook-form';
import { useToast } from 'context/ToastContext';

import { TextArea, Button } from 'components/shared';

import { Container, BoxText } from './styles';

interface FormData {
  message: string;
}

interface Props {
  sendMessage(data: SendMessageDTO): Promise<{ message: string }>;
  contactId: number;
}

const Form: React.FC<Props> = ({ sendMessage, contactId }) => {
  const [loading, setLoading] = useState(false);
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);
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

  const schema = Yup.object().shape({
    message: Yup.string().required('Mensagem é obrigatória'),
  });

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit, reset } = methods;
  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    try {
      const { message } = await sendMessage({
        contactId,
        fileUrl,
        message: data.message,
      });
      reset();
      setFileUrl('');
      addToast({
        title: message,
        type: 'success',
      });
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
        <BoxText>
          <TextArea name="message" label="Responder" inputRole="secondary" />
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
        </BoxText>
        <Button type="submit" buttonRole="primary" loading={loading}>
          Enviar
        </Button>
      </Container>
    </FormContext>
  );
};

export default Form;
