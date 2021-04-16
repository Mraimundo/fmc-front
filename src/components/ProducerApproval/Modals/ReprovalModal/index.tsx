import React from 'react';

import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { Container, Modal, TextArea, Title } from './styles';
import { Button, Actions } from '../shared/styles';
import CloseButton from '../shared/CloseButton';

interface FormData {
  message: string;
}
interface ReprovalModalProps {
  isOpen: boolean;
  onCancelRequest: () => void;
}

const ReprovalModal: React.FC<ReprovalModalProps> = ({
  isOpen,
  onCancelRequest,
}) => {
  const { reproveFarmer } = useFarmersContext();

  const methods = useForm<FormData>({
    validationSchema: Yup.object().shape({
      message: Yup.string().required(
        'É obrigatório informar um motivo para REPROVAÇÂO',
      ),
    }),
    mode: 'onSubmit',
    defaultValues: {
      message: '',
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit(async ({ message }) => {
    reproveFarmer(message);
    reset();
  });

  return (
    <Modal isOpen={isOpen} onRequestClose={onCancelRequest}>
      <CloseButton onClickHandler={onCancelRequest} />

      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <Container>
            <Title>Tem certeza que deseja REPROVAR este cadastro?</Title>
            <TextArea name="message" label="Observação" />
            <Actions>
              <Button
                type="button"
                buttonRole="primary"
                onClick={onCancelRequest}
              >
                Cancelar
              </Button>
              <Button type="submit" buttonRole="primary">
                Reprovar
              </Button>
            </Actions>
          </Container>
        </form>
      </FormContext>
    </Modal>
  );
};

export default ReprovalModal;
