import React, { useCallback, useState } from 'react';

import { approveAgreementTerm } from 'services/harvest-term';
import ReproveModal from 'components/HarvestTerm/Modals/ReproveModal';
import ApproveModal from 'components/HarvestTerm/Modals/ApproveModal';
import { useToast } from 'context/ToastContext';
import { useHarvestTermsContext } from 'components/HarvestTerm/Context';
import { Container, ApproveButton, ReproveButton } from './styles';

interface ManagementProps {
  agreementTermId: string;
}

const Management: React.FC<ManagementProps> = ({ agreementTermId }) => {
  const [isReproveModalOpen, setIsReproveModalOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
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
      setIsApproveModalOpen(false);
    } catch (e) {
      addToast({
        title: e.response?.data?.message || 'Não foi possível aprovar o acordo',
        type: 'error',
      });
    }
  }, [addToast, agreementTermId, fetchAgreementTerms]);

  const handleClickReprove = useCallback(async () => {
    setIsReproveModalOpen(true);
  }, []);

  const handleCancelReproveRequest = useCallback(() => {
    setIsReproveModalOpen(false);
  }, []);

  const handleCancelApproveRequest = useCallback(() => {
    setIsApproveModalOpen(false);
  }, []);

  const handleClicklApproveRequest = useCallback(() => {
    setIsApproveModalOpen(true);
  }, []);

  return (
    <>
      <Container>
        <ApproveButton
          buttonRole="tertiary"
          type="button"
          onClick={handleClicklApproveRequest}
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
        isOpen={isReproveModalOpen}
        agreementTermId={agreementTermId}
        cancelRequest={handleCancelReproveRequest}
      />
      <ApproveModal
        isOpen={isApproveModalOpen}
        cancelRequest={handleCancelApproveRequest}
        confirmRequest={handleClickApprove}
      />
    </>
  );
};

export default Management;
