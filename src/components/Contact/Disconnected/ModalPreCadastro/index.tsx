import React, { useState, useCallback } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Option } from 'components/shared/Select';

import { useToast } from 'context/ToastContext';
import sendFile from 'services/storage/sendFile';

import openTicket from 'services/contact/disconnected/openTicket';

import schemaValidation from './schemaValidation';

import UfSelect from '../../../Auth/Register/Form/Selects/UfsSelect';

import ProdutorAgricolaSelect from './ProdutorAgricolaSelect';
import ComoFicouConhecendoSelect from './ComoFicouConhecendoSelect';
import {
  Container,
  Title,
  BoxPhone,
  Input,
  TextArea,
  Button,
  AttachFile,
  DefaultModal,
  BoxAccept,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

interface ContactFormData {
  name: string;
  cpf: string;
  email: string;
  dddMobile: string;
  mobile: string;
  subject: string;
  message: string;
  fileUrl: string;
  municipio?: string | undefined;
  estado?: Option | undefined;
  produtorAgricola?: Option | undefined;
  canal?: string | undefined;
  ficouSabendo?: Option | undefined;
}

const ModalPreCadastro: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [loading, setLoading] = useState(false);
  const [fileAttached, setFileAttached] = useState(false);
  const [attaching, setAttaching] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const { addToast } = useToast();

  const methods = useForm<ContactFormData>({
    validationSchema: schemaValidation,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: {
      subject: 'Solicitação Pré-cadastro',
      estado: undefined,
      produtorAgricola: undefined,
      canal: undefined,
      ficouSabendo: undefined,
    },
  });

  const { handleSubmit, register, setValue } = methods;
  const onSubmit = handleSubmit(async data => {
    if (hasAgreed) {
      try {
        const { message } = await openTicket({
          ...data,
          subjectId: 20,
        });
        addToast({ title: message });
        onRequestClose();
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha ao abir chamado. Por favor tente novamente',
          type: 'error',
        });
      }
      setLoading(false);
    }
  });

  const inputRole = 'secondary';

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        setAttaching(true);
        const { url } = await sendFile(e.target.files[0], 'avatar');
        setValue('fileUrl', url);
        setFileAttached(true);
        setAttaching(false);
      }
    },
    [setValue],
  );

  return (
    <DefaultModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="primary"
    >
      <Container>
        <Title> Solicitação de Pré-cadastro </Title>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <Input name="name" label="Nome completo*" inputRole={inputRole} />
            <Input
              name="cpf"
              label="CPF*"
              numbersOnly
              pattern="XXX.XXX.XXX-XX"
              inputRole={inputRole}
            />
            <Input name="email" label="E-mail*" inputRole={inputRole} />
            <BoxPhone>
              <Input
                name="dddMobile"
                label="Celular*"
                numbersOnly
                pattern="(XX)"
                inputRole={inputRole}
              />
              <Input
                name="mobile"
                numbersOnly
                pattern="X XXXX-XXXX"
                inputRole={inputRole}
              />
            </BoxPhone>
            <Input
              name="subject"
              label="Assunto*"
              disabled
              inputRole={inputRole}
              value="Solicitação Pré-cadastro"
            />

            <Input name="municipio" label="Município*" inputRole={inputRole} />

            <UfSelect name="estado" label="Estado*" inputRole={inputRole} />

            <ProdutorAgricolaSelect
              name="produtorAgricola"
              inputRole={inputRole}
            />

            <Input
              name="canal"
              label="Em qual Canal você compra os produtos FMC?"
              inputRole={inputRole}
            />

            <ComoFicouConhecendoSelect
              name="ficouSabendo"
              inputRole={inputRole}
            />

            <TextArea
              name="message"
              label="Mensagem"
              inputRole={inputRole}
              maxLength={350}
            />

            <input type="hidden" name="fileUrl" ref={register} />
            {attaching ? (
              <AttachFile>Anexando...</AttachFile>
            ) : (
              <>
                {fileAttached ? (
                  <AttachFile>Arquivo anexado</AttachFile>
                ) : (
                  <label htmlFor="inputFile">
                    <input
                      type="file"
                      id="inputFile"
                      accept="image/*,application/pdf"
                      style={{ display: 'none' }}
                      onChange={handleAttachFile}
                    />
                    <AttachFile>Anexar arquivo</AttachFile>
                  </label>
                )}
              </>
            )}

            <BoxAccept>
              <input
                type="checkbox"
                checked={hasAgreed}
                onChange={() => {
                  setHasAgreed(e => !e);
                }}
              />
              <span>
                Concordo em compartilhar meus dados para o pré-cadastro no
                Programa Juntos FMC - Produtor.*
                {!hasAgreed && <strong>Obrigatório</strong>}
              </span>
            </BoxAccept>

            <Button type="submit" buttonRole="primary" loading={loading}>
              Enviar
            </Button>
          </form>
        </FormContext>
      </Container>
    </DefaultModal>
  );
};

export default ModalPreCadastro;
