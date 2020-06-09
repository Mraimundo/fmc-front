import React, { useState } from 'react';
import DefaultModal from 'components/shared/Modal';
import { useForm, FormContext } from 'react-hook-form';

import { useToast } from 'context/ToastContext';
import { Input, Button } from 'components/shared';
import { FiUser } from 'react-icons/fi';
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
    defaultValues: {
      cpf: '12345678909',
      dddMobile: '43',
      email: 'test@test.com',
      fileUrl: '',
      message: 'teste',
      mobile: '999001234',
      name: 'Teste',
      subject: 'test',
    },
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

  const inputRole = 'secondary';

  return (
    <DefaultModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="primary"
    >
      <Container>
        <Title>Fale conosco</Title>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <Input
              name="name"
              icon={FiUser}
              label="Nome"
              inputRole={inputRole}
            />
            <Input name="cpf" icon={FiUser} label="Cpf" inputRole={inputRole} />
            <Input
              name="email"
              icon={FiUser}
              label="Email"
              inputRole={inputRole}
            />
            <BoxPhone>
              <Input
                name="dddMobile"
                icon={FiUser}
                label="Celular"
                inputRole={inputRole}
              />
              <Input name="mobile" icon={FiUser} inputRole={inputRole} />
            </BoxPhone>
            <SubjectSelect name="subject" inputRole={inputRole} />
            <Input
              name="message"
              icon={FiUser}
              label="Mensagem"
              inputRole={inputRole}
            />
            <Button type="submit" buttonRole="primary" loading={loading}>
              Cadastrar
            </Button>
          </form>
        </FormContext>
      </Container>
    </DefaultModal>
  );
};

export default Modal;
