import React, { useState } from 'react';

import { ReactSVG } from 'react-svg';
import CloseIcon from 'assets/images/training/close-icon.svg';
import CommentIcon from 'assets/images/contact/message.svg';
import { approveAgreementTerm } from 'services/harvest-term';
import { useToast } from 'context/ToastContext';
import { useHarvestTermsContext } from 'components/HarvestTerm/Context';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import {
  Container,
  CustomModal as Modal,
  Close,
  Header,
  TextArea,
  Button,
  ActionsWrapper,
  TextAreaWrapper,
} from './styles';

interface ReproveModalProps {
  isOpen: boolean;
  agreementTermId: string;
  cancelRequest: () => void;
}

interface FormData {
  comment: string;
}

const ReproveModal: React.FC<ReproveModalProps> = ({
  isOpen,
  agreementTermId,
  cancelRequest,
}) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const { tabs, tabSelected, fetchAgreementTerms } = useHarvestTermsContext();

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
      await approveAgreementTerm({
        agreementTermId: parseInt(agreementTermId, 10),
        approve: false,
        reason: comment,
      });
      reset();
      cancelRequest();
      fetchAgreementTerms();
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message || 'Não foi possível reprovar o acordo',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <Modal isOpen={isOpen} onRequestClose={cancelRequest}>
      <Close>
        <button type="button" onClick={cancelRequest}>
          <ReactSVG src={CloseIcon} />
        </button>
      </Close>
      <Container>
        <Header>
          <ReactSVG src={CommentIcon} />
          <h3>Motivo da reprovação</h3>
        </Header>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <TextAreaWrapper>
              <TextArea
                name="comment"
                inputRole="primary"
                readOnly={tabSelected !== tabs[0]}
              />
            </TextAreaWrapper>
            {tabSelected === tabs[0] && (
              <ActionsWrapper>
                <Button type="submit" buttonRole="primary" loading={loading}>
                  Salvar
                </Button>
              </ActionsWrapper>
            )}
          </form>
        </FormContext>
      </Container>
    </Modal>
  );
};

export default ReproveModal;
