import React, { useCallback, useState } from 'react';

import { approveAgreementTerm } from 'services/harvest-term';
import ReproveModal from 'components/HarvestTerm/Modals/ReproveModal';
import { useToast } from 'context/ToastContext';
import { useHarvestTermsContext } from 'components/HarvestTerm/Context';
import { Container, ApproveButton, ReproveButton } from './styles';

interface ManagementProps {
  agreementTermId: string;
}

const Management: React.FC<ManagementProps> = ({ agreementTermId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToast } = useToast();
  const { fetchAgreementTerms } = useHarvestTermsContext();

  const handleClickApprove = useCallback(async () => {
    try {
      await approveAgreementTerm({
        agreementTermId: parseInt(agreementTermId, 10),
        approve: true,
      });

      addToast({ title: 'Acordo aprovado com sucesso!', type: 'success' });
      fetchAgreementTerms();
    } catch (e) {
      addToast({
        title: e.response?.data?.message || 'Não foi possível aprovar o acordo',
        type: 'error',
      });
    }
  }, [addToast, agreementTermId, fetchAgreementTerms]);

  const handleClickReprove = useCallback(async () => {
    setIsModalOpen(true);
  }, []);

  const handleCancelRequest = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Container>
        <ApproveButton
          buttonRole="tertiary"
          type="button"
          onClick={handleClickApprove}
        >
          Aprovar
        </ApproveButton>
        <ReproveButton
          buttonRole="quaternary"
          type="button"
          onClick={handleClickReprove}
        >
          Reprovar
        </ReproveButton>
      </Container>
      <ReproveModal
        isOpen={isModalOpen}
        agreementTermId={agreementTermId}
        cancelRequest={handleCancelRequest}
      />
    </>
  );
};

export default Management;
