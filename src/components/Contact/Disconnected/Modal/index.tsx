import React, { useState } from 'react';
import DefaultModal from 'components/shared/Modal';
import { useForm, FormContext } from 'react-hook-form';

import { useToast } from 'context/ToastContext';
import { Input, Button, TextArea } from 'components/shared';
import {
  FiUser,
  FiMail,
  FiSmartphone,
  FiArchive,
  FiMessageCircle,
} from 'react-icons/fi';
import openTicket from 'services/contact/openTicket';
import SubjectSelect from '../PublicSubjectsSelect';
import schemaValidation from './schemaValidation';

import { Container, Title, BoxPhone } from './styles';

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
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const methods = useForm<ContactFormData>({
    validationSchema: schemaValidation,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    try {
      const { message } = await openTicket({
        ...data,
        subjectId: parseInt(data.subject, 0),
      });
      addToast({ title: message });
      onRequestClose();
    } catch (e) {
      addToast({
        description:
          e.response?.data?.message ||
          'Falha ao abir chamado. Por favor tente novamente',
        type: 'error',
        title: 'Erro',
      });
    }
    setLoading(false);
  });

  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <Title>Fale conosco</Title>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <Input name="name" icon={FiUser} label="Nome" />
            <Input
              name="cpf"
              icon={FiArchive}
              label="Cpf"
              numbersOnly
              pattern="XXX.XXX.XXX-XX"
            />
            <Input name="email" icon={FiMail} label="Email" />
            <BoxPhone>
              <Input
                name="dddMobile"
                icon={FiSmartphone}
                label="Celular"
                numbersOnly
                pattern="(XX)"
              />
              <Input
                name="mobile"
                icon={FiSmartphone}
                numbersOnly
                pattern="X XXXX-XXXX"
              />
            </BoxPhone>
            <SubjectSelect name="subject" />
            <TextArea name="message" icon={FiMessageCircle} label="Mensagem" />
            <Button type="submit" buttonRole="primary" loading={loading}>
              Enviar
            </Button>
          </form>
        </FormContext>
      </Container>
    </DefaultModal>
  );
};

export default Modal;
