import React, { useEffect, useState, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { useParams } from 'react-router-dom';
import history from 'services/history';
import getCampaign, {
  Campaign as ICampaign,
} from 'services/campaigns/getCampaign';
import { format } from 'date-fns';
import useModalStatus from 'hooks/use-modal-status';

import getRegulation from 'services/campaigns/getRegulation';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import participate from 'services/campaigns/participate';

import { Button } from 'components/shared';
import Campaign from './Campaign';
import RegulationModal from './RegulationModal';
import { Container, Content } from './styles';

interface Params {
  id: string;
}

const List: React.FC = () => {
  const params = useParams<Params>();
  const [campaign, setCampaign] = useState<ICampaign | null>(null);
  const [regulation, setRegulation] = useState<Regulation | null>(null);
  /* const [modalOpened, setModalOpened] = useState(false); */
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const modalStatus = useModalStatus();
  const { opened, closeModal, openModal } = modalStatus;

  useEffect(() => {
    getCampaign(parseInt(params.id, 0))
      .then(data => {
        setCampaign(data);
        getRegulation(data.id).then(reg => setRegulation(reg));
      })
      .catch(() => {
        history.push('/');
      });
  }, [params]);

  const handleAcceptRegulation = useCallback(
    async (campaignId: number) => {
      try {
        setLoading(true);
        await participate(campaignId);
        setCampaign(data =>
          data
            ? {
                ...data,
                signed: true,
                acceptedDate: format(new Date(), 'dd/MM/yyyy'),
              }
            : null,
        );
        closeModal();
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha ao aceitar regulamento. Por favor entre em contato com o suporte',
          type: 'error',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, closeModal],
  );

  return (
    <Container>
      <Content>
        {campaign && (
          <>
            <Campaign campaign={campaign} regulationModal={modalStatus} />
            {!campaign.signed && (
              <Button buttonRole="primary" type="button" onClick={openModal}>
                Participar
              </Button>
            )}
          </>
        )}
        {campaign && regulation && (
          <RegulationModal
            isOpen={opened}
            loading={loading}
            canAccept={!campaign.signed}
            onAccept={async () => {
              handleAcceptRegulation(campaign.id);
            }}
            onRequestClose={closeModal}
            campaign={{ ...campaign, regulationText: regulation.content }}
          />
        )}
      </Content>
    </Container>
  );
};

export default List;
